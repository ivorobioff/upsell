import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';

export interface LogoProps {
  size: '48' | '64';
  className?: string;
}

const Logo = ({ size, className }: LogoProps) => {
  return (<Image src="/images/logo.svg" width={size} height={size} alt={`${APP_NAME} logo`} priority className={className} />);
}

export default Logo;