'use client';

import { MainNav } from '@/components/main-nav';
import { Sidebar } from '@/components/sidebar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function CallOptionSet() {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <Sidebar />
      <main className="ml-16 lg:ml-64 transition-all duration-300 ease-in-out">
        <div className="sticky top-0 z-20 bg-background">
          <div className="p-8 pb-0">
            <h1 className="text-2xl font-bold mb-4">Call Option Set</h1>
            <Separator className="mb-4" />
            <div className="flex items-center gap-4 mb-4">
              <Select>
                <SelectTrigger className="w-[200px] bg-secondary">
                  <SelectValue placeholder="Account" />
                </SelectTrigger>
                <SelectContent>
                  {/* Account items will go here */}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[300px] bg-[#2A9D8F] text-white shadow-lg hover:bg-[#2A9D8F]/90">
                  <SelectValue placeholder="Select Sub-Profile" />
                </SelectTrigger>
                <SelectContent>
                  {/* Sub-Profile items will go here */}
                </SelectContent>
              </Select>
              <Button 
                className="bg-[#2A9D8F] text-white shadow-lg hover:bg-[#2A9D8F]/90 text-center px-6"
              >
                + Create New Sub-Profile
              </Button>
              <Button 
                className="bg-[#2A9D8F] text-white shadow-lg hover:bg-[#2A9D8F]/90 text-center px-6"
              >
                Save
              </Button>
              <Button 
                className="bg-[#2A9D8F] text-white shadow-lg hover:bg-[#2A9D8F]/90 text-center px-6"
              >
                Save Copy
              </Button>
            </div>
            <Separator className="mb-4" />
          </div>
        </div>
        <div className="p-8 pt-0">
          {/* Main content will go here */}
        </div>
      </main>
    </div>
  );
}