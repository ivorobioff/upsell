'use server'

import { signIn } from '@/auth'
import { CredentialsSchema } from '@/lib/models/auth';
import { fail, success } from '@/lib/utils';
import { CredentialsSignin } from 'next-auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

export const login = async (data: CredentialsSchema) => {
  try {
    await signIn('credentials', data);
    return success();
  } catch (e) {
    if (e instanceof CredentialsSignin) {
      return fail('Incorrect email or password. Please try again.');
    }

    if (isRedirectError(e)) {
      return success();
    }

    return fail('Unknown error. Please try again or contact us.');
  }
};