import AuthHeader from '@/components/auth/header';
import React from 'react';

export interface AuthPageProps {
  title: string;
  children: React.ReactNode;
}

const AuthPage = ({ title, children }: AuthPageProps) => {
  return (<div className="w-full px-10 sm:px-0 sm:w-1/2 md:w-1/3 lg:w-1/4">
    <AuthHeader title={title} />
    {children}
  </div>);
}

export default AuthPage;