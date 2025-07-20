'use client'
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, SunMoonIcon, PaintbrushVerticalIcon, PaletteIcon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';

export interface ModeToggleProps {
  label?: boolean;
}

const ModeToggle = ({ label }: ModeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (<DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost">
        {theme === 'system' ? <PaletteIcon /> : theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        {label && 'Appearance'}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {!label && <>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
      </>}
      {['system', 'dark', 'light'].map((mode) => <DropdownMenuCheckboxItem className="capitalize" key={mode} checked={theme === mode} onClick={() => setTheme(mode)}>{mode}</DropdownMenuCheckboxItem>)}
    </DropdownMenuContent>
  </DropdownMenu>);
}

export default ModeToggle;