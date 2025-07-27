import Logo from '@/components/ui/logo';

export interface AuthHeaderProps {
  title: string;
}

const AuthHeader = ({ title }: AuthHeaderProps) => {
  return (<div className="flex flex-col items-center">
    <Logo size="64" className="mb-4" />
    <h1 className="title-3 mb-8">{title}</h1>
  </div>);
}

export default AuthHeader;