'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSidebarStore } from '@/lib/store';

export function MainNav() {
  const { toggleSidebar } = useSidebarStore();

  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4">
        <Button
          variant="ghost"
          size="icon"
          className="mr-4"
          onClick={toggleSidebar}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-semibold">Dark Pools Dashboard</span>
        </Link>
      </div>
    </div>
  );
}