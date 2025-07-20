import { ShoppingCart, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import ModeToggle from '@/components/shared/header/mode-toggle';
import Logo from '@/components/ui/logo';

const Header = () => {
  return <header className="w-full border-b">
    <div className="wrapper flex-between">
      <div className="flex-start">
        <Link className="flex-start" href="/">
          <Logo size="48" />
          <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
        </Link>
      </div>
      <div className="space-x-2">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </div>
    </div>
  </header>;
}

export default Header;