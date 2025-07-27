import AuthPage from '@/components/auth/page';
import SignUpForm from '@/components/auth/sign-up-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up'
};

const SignUpPage = () => {
  return (<AuthPage title="Sign Up"><SignUpForm /></AuthPage>);
}

export default SignUpPage;