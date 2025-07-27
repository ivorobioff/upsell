import SignInForm from '@/components/auth/sign-in-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In'
};

const SignInPage = () => {

  return (<>
    <h1 className="title-3 mb-8 text-center">Sign In</h1>
    <SignInForm />
  </>);
}

export default SignInPage;