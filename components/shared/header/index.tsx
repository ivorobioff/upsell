import { EllipsisVerticalIcon, ShoppingCart, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import ModeToggle from '@/components/shared/header/mode-toggle';
import Logo from '@/components/ui/logo';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import MainMenu from '@/components/shared/header/main-menu';

const Header = () => {
  return <header className="w-full border-b">
    <div className="wrapper flex-between">
      <div className="flex-start">
        <Link className="flex-start" href="/">
          <Logo size="48" />
          <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
        </Link>
      </div>
      <MainMenu />
      <nav className="flex md:hidden">
        <Sheet>
          <SheetTrigger>
            <EllipsisVerticalIcon />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <MainMenu placement="drawer" />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  </header>;
}

export default Header;