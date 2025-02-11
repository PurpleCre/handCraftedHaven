'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
    id: z.string(),
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email"),
    password_hash: z.string()
        .min(8, "Password must be at least 8 characters long"),
    full_name: z.string().min(1, "Please enter your fullname"),
    role: z.enum(["buyer", "seller", "admin"], {
        invalid_type_error: "Please select a role.",
    })
});

const CreateProfile = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    username?: string[];
    email?: string[];
    password_hash?: string[];
    full_name?: string[];
    role?: string[];
  };
  message?: string | null;
};

export async function createProfile(prevState: State, formData: FormData) {
  const validatedFields = CreateProfile.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password_hash: formData.get('password_hash'),
    full_name: formData.get('full_name'),
    role: formData.get('role')
  });

  // If validation fails, return errors early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Profile.',
    };
  }

  // Prepare data
  const { username, password_hash, full_name, email, role } = validatedFields.data;

  try {
    // Hash the password before storing it
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password_hash, saltRounds);

    // Insert into the database with the hashed password
    await sql`
      INSERT INTO users (username, email, password_hash, full_name, role)
      VALUES (${username}, ${email}, ${hashedPassword}, ${full_name}, ${role})
    `;

  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Profile.',
      error: error,
    };
  }

  // Revalidate cache and redirect
  revalidatePath('/market');
  redirect('/market');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid Credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}