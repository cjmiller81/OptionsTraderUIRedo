'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  ChevronDown,
  ChevronRight,
  Home,
  LineChart,
} from 'lucide-react';
import { useSidebarStore } from '@/lib/store';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Sidebar() {
  const pathname = usePathname();
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <>
      {/* Mini Sidebar - Visible when collapsed */}
      <div
        className={cn(
          'fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-16 border-r bg-background transition-opacity duration-300',
          isOpen && 'opacity-0 pointer-events-none'
        )}
      >
        <div className="py-4 flex flex-col items-center space-y-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="hover:bg-muted"
          >
            <Home className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="hover:bg-muted"
          >
            <LineChart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Full Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 border-r bg-background transition-transform duration-300 ease-in-out',
          !isOpen && '-translate-x-full'
        )}
      >
        <ScrollArea className="h-full">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="space-y-1">
                <Link href="/">
                  <Button
                    variant={pathname === '/' ? 'secondary' : 'ghost'}
                    className="w-full justify-start"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>
              </div>
            </div>
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                OptionTrader
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="trading-sets" className="border-none">
                  <AccordionTrigger className="flex items-center py-2 px-4 w-full hover:bg-muted hover:no-underline">
                    <div className="flex items-center">
                      <LineChart className="mr-2 h-4 w-4" />
                      <span>Trading Sets</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-6 pt-1">
                      <Link href="/trading-sets/calls">
                        <Button
                          variant={pathname === '/trading-sets/calls' ? 'secondary' : 'ghost'}
                          className="w-full justify-start"
                        >
                          Calls
                        </Button>
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}