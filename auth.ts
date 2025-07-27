import { db } from '@/db';
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { compareSync } from 'bcryptjs';
import { AuthorizedUser, credentialsSpec } from '@/lib/models/auth';


export const { handlers, signIn, signOut, auth } = NextAuth({

  session: {
    strategy: 'jwt',
    maxAge: 2592000 // 30 days
  },
  adapter: PrismaAdapter(db),
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session: ({ session, token }) => {
      session.user.id = token.sub;

      return session;
    },
  },
  logger: {
    error: (error) => {
      if (error.name === 'CredentialsSignin') {
        return;
      }

      console.error(error);
    }
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
      authorize: async (credentials): Promise<AuthorizedUser | null> => {
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

        return user;
      }
    })
  ],
})