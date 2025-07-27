import { User } from '@/lib/generated/prisma';
import { zodResolver } from '@hookform/resolvers/zod';
import { Session } from 'next-auth';
import z from 'zod';

export const credentialsSpec = z.object({
  email: z.email(),
  password: z.string().min(4),
});

export type CredentialsSchema = z.infer<typeof credentialsSpec>;
export const credentialsResolver = zodResolver(credentialsSpec);

export type AuthorizedUser = Pick<User, 'id' | 'email' | 'name' | 'image' | 'role'>;

export const isAuthorizedUser = (user?: Session['user']): user is AuthorizedUser => typeof user === 'object' && 'role' in user;
