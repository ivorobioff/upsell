import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { logout } from '@/lib/actions/auth';
import { AuthorizedUser } from '@/lib/models/auth';

export interface UserButtonProps {
  user: AuthorizedUser;
}

const UserButton = async ({ user }: UserButtonProps) => {

  const firstInitial = user.name?.charAt(0) || 'U';

  return (<DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="relative w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">{firstInitial}</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel className="font-normal flex flex-col">
        <div className="font-medium text-sm">{user.name || 'User'}</div>
        <div className="text-sm text-muted-foreground">{user.email || 'User'}</div>
      </DropdownMenuLabel>
      <DropdownMenuItem>
        <Button variant="ghost" className="w-full justify-start pl-0 h-0 py-4"
          onClick={async () => {
            'use server'
            await logout();
          }}>Sing Out</Button>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>);
}

export default UserButton;