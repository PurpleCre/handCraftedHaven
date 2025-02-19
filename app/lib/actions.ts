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

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Profile.',
    };
  }

  const { username, password_hash, full_name, email, role } = validatedFields.data;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password_hash, saltRounds);

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

const ProductSchema = z.object({
  id: z.string(),
  product_name: z.string().min(1, "Product name is required"),
  material: z.string().min(1, "Please enter main material used for the product"),
  price: z.coerce
    .number()
    .gt(0, { message: 'Please enter a price greater than 0.' }),
  description: z.string().min(1, "Description is required"),
  image1: z.string().url("Invalid URL format"),
  image2: z.string().url("Invalid URL format").optional().or(z.literal("")),
  image3: z.string().url("Invalid URL format").optional().or(z.literal(""))
});

const CreateProduct = ProductSchema.omit({ id: true });

export type ProductState = {
  errors?: {
    product_name?: string[];
    material?: string[];
    price?: string[];
    description?: string[];
    image1?: string[];
    image2?: string[];
    image3?: string[];
    user_id?: string[];
    database?: string[];
  };
  message?: string | null;
};

export async function createProduct(prevState: ProductState, formData: FormData) : Promise<ProductState> {

  const validatedFields = CreateProduct.safeParse({
    product_name: formData.get('product_name'),
    material: formData.get('material'),
    price: formData.get('price'),
    description: formData.get('description'),
    image1: formData.get('image1'),
    image2: formData.get('image2'),
    image3: formData.get('image3')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid product data. Failed to add product.',
    };
  }

  const { product_name, material, price, description, image1, image2, image3 } = validatedFields.data;

  try {
    const images = [image1, image2, image3].filter(img => img && img.trim() !== "");
    const formattedImages = `{${images.map(img => `"${img}"`).join(',')}}`;
    console.log('formattedImages', formattedImages)
    await sql`
      INSERT INTO products (product_name, user_id, material, price, description, images)
      VALUES (${product_name}, 'ddff15bd-e8c1-4274-9a84-416b64626974', ${material}, ${price}, ${description}, ${formattedImages})
    `;
    console.log("Inserted to database")
  } catch (error) {
    return {
      message: 'Database Error: Failed to add product.',
      errors: { database: [`An error occurred while adding the product: ${error}`] }
    };
  }

  revalidatePath('/market');
  redirect('/market');
}
