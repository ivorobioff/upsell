import { auth } from '@/auth';
import AuthPage from '@/components/auth/page';
import SignInForm from '@/components/auth/sign-in-form';
import { HOME_PAGE_URL } from '@/lib/constants';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Sign In'
};

const SignInPage = async ({ searchParams }: { searchParams: Promise<{ callbackUrl?: string }> }) => {
  const { callbackUrl } = await searchParams;

  const session = await auth();

  if (session) {
    redirect(callbackUrl || HOME_PAGE_URL);
  }

  return (<AuthPage title="Sign In"><SignInForm /></AuthPage>);
}

export default SignInPage;