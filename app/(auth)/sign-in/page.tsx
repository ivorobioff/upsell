import { auth } from '@/auth';
import Header from '@/components/auth/header';
import SignInForm from '@/components/auth/sign-in-form';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon } from 'lucide-react';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Sign In'
};

const loginErrors: Record<string, string> = {
  'CredentialsSignin:credentials': 'Incorrect email or password. Please try again.'
};

const SignInPage = async ({ searchParams }: { searchParams: Promise<{ error: string; code: string; }> }) => {

  const { error, code } = await searchParams;

  const session = await auth();

  if (session) {
    redirect('/');
  }

  return (<div className="w-full px-10 sm:px-0 sm:w-1/2 md:w-1/3 lg:w-1/4">
    <Header title="Sign In" />
    {error && <Alert variant="destructive" className="mb-6">
      <AlertCircleIcon />
      <AlertTitle>{loginErrors[`${error}:${code}`] || 'Unknown error. Please try again or contact us.'}</AlertTitle>
    </Alert>}
    <SignInForm />
  </div>);
}

export default SignInPage;