'use client';

import { MainNav } from '@/components/main-nav';
import { Sidebar } from '@/components/sidebar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

export default function CallOptionSet() {
  const [dteStart, setDteStart] = useState('0');
  const [dteEnd, setDteEnd] = useState('32');
  const [requireActiveBid, setRequireActiveBid] = useState(false);
  const [baMaxEnabled, setBaMaxEnabled] = useState(false);
  const [baMaxValue, setBaMaxValue] = useState('20');

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
          <Button 
            className="bg-[#2A9D8F] text-white shadow-lg hover:bg-[#2A9D8F]/90 text-xl font-semibold px-8 py-2 mb-6"
          >
            + Send Order
          </Button>
          
          <div className="space-y-6">
            <Card className="w-[500px] h-[300px] border-[#1A6D63] bg-[#2A2A2A] shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Option Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder="Enter Ticker"
                      className="w-[300px] bg-[#1E1E1E] border-0 text-white placeholder:text-gray-400"
                    />
                    <div className="flex items-center gap-2 ml-4">
                      <span className="text-white text-sm whitespace-nowrap">DTE Range</span>
                      <Input
                        type="number"
                        value={dteStart}
                        onChange={(e) => setDteStart(e.target.value)}
                        className="w-[60px] bg-[#1E1E1E] border-0 text-white"
                      />
                      <span className="text-white text-sm">to</span>
                      <Input
                        type="number"
                        value={dteEnd}
                        onChange={(e) => setDteEnd(e.target.value)}
                        className="w-[60px] bg-[#1E1E1E] border-0 text-white"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="requireActiveBid"
                        checked={requireActiveBid}
                        onCheckedChange={setRequireActiveBid}
                        className="bg-[#1E1E1E] border-gray-600 data-[state=checked]:bg-[#2A9D8F] data-[state=checked]:border-[#2A9D8F]"
                      />
                      <label
                        htmlFor="requireActiveBid"
                        className="text-sm text-white cursor-pointer"
                      >
                        Require Active Bid
                      </label>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <Checkbox
                        id="baMaxOnOff"
                        checked={baMaxEnabled}
                        onCheckedChange={setBaMaxEnabled}
                        className="bg-[#1E1E1E] border-gray-600 data-[state=checked]:bg-[#2A9D8F] data-[state=checked]:border-[#2A9D8F]"
                      />
                      <div className="flex flex-col">
                        <label
                          htmlFor="baMaxOnOff"
                          className="text-sm text-white cursor-pointer"
                        >
                          B/A Max On/Off
                        </label>
                        <span className={`text-[11px] italic ${!baMaxEnabled ? 'text-gray-500' : 'text-gray-400'}`}>
                          B/A Max (e.g 5 = 5%)
                        </span>
                      </div>
                      <Input
                        type="number"
                        value={baMaxValue}
                        onChange={(e) => setBaMaxValue(e.target.value)}
                        disabled={!baMaxEnabled}
                        className={`w-[60px] bg-[#1E1E1E] border-0 text-white ${!baMaxEnabled && 'opacity-50'}`}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-[500px] h-[300px] border-[#1A6D63] bg-[#2A2A2A] shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Option Filter</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Option Filter content will go here */}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}