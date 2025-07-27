import { auth } from '@/auth';
import Header from '@/components/auth/header';
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

  return (<div className="w-full px-10 sm:px-0 sm:w-1/2 md:w-1/3 lg:w-1/4">
    <Header title="Sign In" />
    <SignInForm />
  </div>);
}

export default SignInPage;