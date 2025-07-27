import { db } from '@/db';
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { compareSync } from 'bcryptjs';
import { User } from '@/lib/generated/prisma';
import { credentialsSpec } from '@/lib/models/credentials';


export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    
  },
  session: {
    strategy: 'jwt',
    maxAge: 2592000 // 30 days
  },
  adapter: PrismaAdapter(db),
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token.sub) {
        session.user.id = token.sub;
      }

      return session;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          type: 'email'
        },
        password: {
          type: 'password'
        },
      },
      authorize: async (credentials): Promise<Pick<User, 'id' | 'name' | 'email' | 'role'> | null> => {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentialsSpec.parse(credentials);

        const user = await db.user.findFirst({ where: { email } });

        if (!user?.password) {
          return null;
        }

        if (!compareSync(password, user.password)) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        };
      }
    })
  ],
})