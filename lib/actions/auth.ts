'use server'

import { signIn, signOut } from '@/auth'
import { db } from '@/db';
import { CreateUserSchema, createUserSpec, CredentialsSchema } from '@/lib/models/auth';
import { fail, success } from '@/lib/utils';
import { hashSync } from 'bcryptjs';
import { CredentialsSignin } from 'next-auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

export interface LoginOptions {
  redirectTo?: string | null;
}

export const login = async (data: CredentialsSchema, { redirectTo }: LoginOptions = {}) => {
  try {
    await signIn('credentials', {
      ...data,
      redirectTo: redirectTo || '/'
    });
    return success();
  } catch (e) {
    if (isRedirectError(e)) {
      throw e;
    }

    if (e instanceof CredentialsSignin) {
      return fail('Incorrect email or password. Please try again.');
    }

    return fail('Unknown error. Please try again or contact us.');
  }
};

export const logout = async () => signOut();

export const register = async (data: CreateUserSchema) => {

  createUserSpec.parse(data);

  const { email, password } = data;

  const foundUser = await db.user.findUnique({ where: { email }, select: { id: true } });

  if (foundUser) {
    return fail('This email is already taken');
  }

  await db.user.create({
    data: {
      ...data,
      password: hashSync(password)
    }
  });

  return success();
};