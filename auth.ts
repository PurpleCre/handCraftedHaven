import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from './app/lib/definitions';
import bcrypt from 'bcrypt';
import type { NextAuthConfig } from 'next-auth';
// import useLS from './useLS';

// function SetLocalStorage(param: string){
//   const username = param
//   localStorage.setItem('myCount', username);
// }



async function getUser(username: string): Promise<User | undefined> {
    try {
      const user = await sql<User>`SELECT * FROM users WHERE username=${username}`;
      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
}
 
export const { auth, signIn, signOut } = NextAuth({
  // ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
        const parsedCredentials = z
            .object({username: z.string(), password: z.string().min(8) })
            .safeParse(credentials);

        if (parsedCredentials.success) {
            const { username, password } = parsedCredentials.data;
            const user = await getUser(username);
            // SetLocalStorage(username);
            // useLS("username", username)
            if (!user) return null;
            const passwordsMatch = await bcrypt.compare(password, user.password_hash);
 
            if (passwordsMatch) return {
              id: user.id,
              username: user.username,
              email: user.email,
              full_name: user.full_name,
              role: user.role
          };
        }

        console.log('Invalid credentials');
        return null;
    }
  })],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/market');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/market', nextUrl));
      }
      return true;
    },
    
    async jwt({ token, user }) {
      if (user) {
      token.id = user.id as string;
      token.username = user.username as string;
      token.email = user.email as string;
      token.full_name = user.full_name as string;
      token.role = user.role as string;

      }
      return token;
    },

    async session({ session, token }) {
      if(session){
      session.user.id = token.id as string;
      session.user.username = token.username as string;
      session.user.email = token.email as string;
      session.user.full_name = token.full_name as string;
      session.user.role = token.role as string;
      }
      return session;
    }
  },
  session: {
    strategy: 'jwt', // Use JWT for session management
  },

  pages: {
    signIn: '/login',  // Custom login page
  }
}satisfies NextAuthConfig) 