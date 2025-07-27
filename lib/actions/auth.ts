'use server'

import { signIn } from '@/auth'
import { CredentialsSchema } from '@/lib/models/auth';
import { fail, success } from '@/lib/utils';
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