import { auth } from '@/auth';
import ModeToggle from '@/components/shared/header/mode-toggle';
import { Button } from '@/components/ui/button';
import { LogOutIcon, ShoppingCartIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';

export interface MainMenuProps {
  placement?: 'drawer' | 'default';
}

const MainMenu = async ({ placement = 'default' }: MainMenuProps) => {
  const session = await auth();
  return (<nav className={placement === 'default' ? 'hidden space-x-2 md:flex' : 'flex flex-col w-full'}>
    {placement === 'default' && <ModeToggle />}
    <Button asChild variant="ghost">
      <Link href="/cart">
        <ShoppingCartIcon /> Cart
      </Link>
    </Button>
    <Button asChild variant="ghost">
      <Link href="/sign-in">
        {session ? <><LogOutIcon /> Sign Out</> : <><UserIcon /> Sign In</>}
      </Link>
    </Button>
    {placement === 'drawer' && <ModeToggle label />}
  </nav>);
}

export default MainMenu;