import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';

export interface LogoProps {
  size: '48' | '64';
}

const Logo = ({ size }: LogoProps) => {
  return (<Image src="/images/logo.svg" width={size} height={size} alt={`${APP_NAME} logo`} />);
}

export default Logo;