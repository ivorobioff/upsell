import { type AuthorizedUser } from '@/lib/models/auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface User extends AuthorizedUser { };
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: string;
  }
}