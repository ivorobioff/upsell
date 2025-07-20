import ModeToggle from '@/components/shared/header/mode-toggle';
import { Button } from '@/components/ui/button';
import { ShoppingCartIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';

export interface MainMenuProps {
  placement?: 'drawer' | 'default';
}

const MainMenu = ({ placement = 'default' }: MainMenuProps) => {
  return (<nav className={placement === 'default' ? 'hidden space-x-2 md:flex' : 'flex flex-col w-full'}>
    {placement === 'default' && <ModeToggle />}
    <Button asChild variant="ghost">
      <Link href="/cart">
        <ShoppingCartIcon /> Cart
      </Link>
    </Button>
    <Button asChild variant="ghost">
      <Link href="/sign-in">
        <UserIcon /> Sign In
      </Link>
    </Button>
    {placement === 'drawer' && <ModeToggle label />}
  </nav>);
}

export default MainMenu;