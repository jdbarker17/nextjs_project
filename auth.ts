import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';


async function getUser(email: string): Promise<User | undefined> {
    try {
      const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
        // authorize handles authentication logic
        async authorize(credentials) {
          //zod handles the validation of email and password before checking if the user exists in the database  
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);
        
            
            //if credentials are validated
        if (parsedCredentials.success) {
            
            const { email, password } = parsedCredentials.data;
            // query the SQL database to get the user
            const user = await getUser(email);
            if (!user){
                return null;
            } 
            // use bcrypt to validate if the passwords match
            const passwordsMatch = await bcrypt.compare(password,user.password);
            if (passwordsMatch){
                //if they do, return the user
                return user;
                } 
            }
            //else return null
        console.log('Invalid credentials');
        return null;
        },
        
    }),
    ]
});