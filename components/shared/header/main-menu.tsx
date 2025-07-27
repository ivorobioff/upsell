import { auth } from '@/auth';
import ModeToggle from '@/components/shared/header/mode-toggle';
import UserButton from '@/components/shared/header/user-button';
import { Button } from '@/components/ui/button';
import { isAuthorizedUser } from '@/lib/models/auth';
import { ShoppingCartIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';

export interface MainMenuProps {
  placement?: 'drawer' | 'default';
}

const MainMenu = async ({ placement = 'default' }: MainMenuProps) => {
  const session = await auth();
  const user = session?.user;

  return (<nav className={placement === 'default' ? 'hidden space-x-2 md:flex' : 'flex flex-col w-full'}>
    {placement === 'default' && <ModeToggle />}
    <Button asChild variant="ghost">
      <Link href="/cart">
        <ShoppingCartIcon /> Cart
      </Link>
    </Button>
    {isAuthorizedUser(user)
      ? <UserButton user={user} />
      : <Button asChild variant="default">
        <Link href="/sign-in" color=""><UserIcon /> Sign In</Link>
      </Button>}
    {placement === 'drawer' && <ModeToggle label />}
  </nav>);
}

export default MainMenu;