'use client';

import { MainNav } from '@/components/main-nav';
import { Sidebar } from '@/components/sidebar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useState, useMemo, useEffect } from 'react';
import { NumericFormat } from 'react-number-format';

export default function CallOptionSet() {
  const [dteStart, setDteStart] = useState('0');
  const [dteEnd, setDteEnd] = useState('32');
  const [requireActiveBid, setRequireActiveBid] = useState(false);
  const [baMaxEnabled, setBaMaxEnabled] = useState(false);
  const [baMaxValue, setBaMaxValue] = useState('20');
  const [minContractAsk, setMinContractAsk] = useState('0.05');
  const [tradeAsSet, setTradeAsSet] = useState(false);
  const [minOpenInterest, setMinOpenInterest] = useState('150');
  const [minVolume, setMinVolume] = useState('10');
  const [baSpreadDiff, setBaSpreadDiff] = useState('10');
  const [totalDollarAmount, setTotalDollarAmount] = useState('30000');
  const [oiPercentCap, setOiPercentCap] = useState('10');
  const [entryType, setEntryType] = useState('Buy_Ask');
  const [offsetPercent, setOffsetPercent] = useState('10');
  const [useLaddering, setUseLaddering] = useState(false);

  const isLadderingDisabled = useMemo(() => {
    return entryType === 'Buy_Ask' && parseFloat(offsetPercent) >= 0;
  }, [entryType, offsetPercent]);

  // Automatically uncheck "Use Laddering" when it becomes disabled
  useEffect(() => {
    if (isLadderingDisabled && useLaddering) {
      setUseLaddering(false);
    }
  }, [isLadderingDisabled, useLaddering]);

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
          
          <div className="flex gap-6">
            <div className="space-y-6">
              <Card className="w-[500px] h-[340px] border-[#1A6D63] bg-[#2A2A2A] shadow-lg">
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
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="requireActiveBid"
                            checked={requireActiveBid}
                            onCheckedChange={(checked) => setRequireActiveBid(checked === true)}
                            className="bg-[#1E1E1E] border-gray-600 data-[state=checked]:bg-[#2A9D8F] data-[state=checked]:border-[#2A9D8F]"
                          />
                          <label
                            htmlFor="requireActiveBid"
                            className="text-sm text-white cursor-pointer"
                          >
                            Require Active Bid
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="baMaxOnOff"
                            checked={baMaxEnabled}
                            onCheckedChange={(checked) => setBaMaxEnabled(checked === true)}
                            className="bg-[#1E1E1E] border-gray-600 data-[state=checked]:bg-[#2A9D8F] data-[state=checked]:border-[#2A9D8F]"
                          />
                          <div className="flex flex-col">
                            <label
                              htmlFor="baMaxOnOff"
                              className="text-sm text-white cursor-pointer"
                            >
                              B/A Max On/Off
                            </label>
                            <span className={`text-[11px] italic ${!baMaxEnabled ? 'text-gray-700' : 'text-gray-400'}`}>
                              B/A Max (e.g 5 = 5%)
                            </span>
                          </div>
                          <Input
                            type="number"
                            value={baMaxValue}
                            onChange={(e) => setBaMaxValue(e.target.value)}
                            disabled={!baMaxEnabled}
                            className={`w-[60px] bg-[#1E1E1E] border-0 text-white ${!baMaxEnabled && 'opacity-30'}`}
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <span className="text-sm text-white block">Min Contract Ask</span>
                          <Input
                            type="number"
                            value={minContractAsk}
                            onChange={(e) => setMinContractAsk(e.target.value)}
                            className="w-[100px] bg-[#1E1E1E] border-0 text-white"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="tradeAsSet"
                            checked={tradeAsSet}
                            onCheckedChange={(checked) => setTradeAsSet(checked === true)}
                            className="bg-[#1E1E1E] border-gray-600 data-[state=checked]:bg-[#2A9D8F] data-[state=checked]:border-[#2A9D8F]"
                          />
                          <label
                            htmlFor="tradeAsSet"
                            className="text-sm text-white cursor-pointer"
                          >
                            Trade As Set
                          </label>
                        </div>
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
                  <div className="space-y-6">
                    <div className="flex gap-8">
                      <div className="space-y-2">
                        <span className="text-sm text-white block">Min Open Interest</span>
                        <Input
                          type="number"
                          value={minOpenInterest}
                          onChange={(e) => setMinOpenInterest(e.target.value)}
                          className="w-[100px] bg-[#1E1E1E] border-0 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <span className="text-sm text-white block">Min Volume</span>
                        <Input
                          type="number"
                          value={minVolume}
                          onChange={(e) => setMinVolume(e.target.value)}
                          className="w-[100px] bg-[#1E1E1E] border-0 text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm text-white block">B/A Spread Diff (e.g 5 = 5%)</span>
                      <Input
                        type="number"
                        value={baSpreadDiff}
                        onChange={(e) => setBaSpreadDiff(e.target.value)}
                        className="w-[100px] bg-[#1E1E1E] border-0 text-white"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="w-[430px] h-[660px] border-[#1A6D63] bg-[#2A2A2A] shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Entry Order</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-8">
                    <div className="space-y-2">
                      <span className="text-sm text-white block">Total Dollar Amount</span>
                      <NumericFormat
                        value={totalDollarAmount}
                        onValueChange={(values) => setTotalDollarAmount(values.value)}
                        thousandSeparator=","
                        customInput={Input}
                        className="w-[150px] bg-[#1E1E1E] border-0 text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm text-white block">OI Percent Cap (e.g 5 = 5%)</span>
                      <Input
                        type="number"
                        value={oiPercentCap}
                        onChange={(e) => setOiPercentCap(e.target.value)}
                        className="w-[100px] bg-[#1E1E1E] border-0 text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm text-white block">Entry Type</span>
                    <div className="flex items-center gap-4">
                      <Select value={entryType} onValueChange={setEntryType}>
                        <SelectTrigger className="w-[150px] bg-[#1E1E1E] border-0 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Buy_Bid">Buy_Bid</SelectItem>
                          <SelectItem value="Buy_Mid">Buy_Mid</SelectItem>
                          <SelectItem value="Buy_Ask">Buy_Ask</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="useLaddering"
                            checked={useLaddering}
                            disabled={isLadderingDisabled}
                            onCheckedChange={(checked) => setUseLaddering(checked === true)}
                            className="bg-[#1E1E1E] border-gray-600 data-[state=checked]:bg-[#2A9D8F] data-[state=checked]:border-[#2A9D8F] disabled:opacity-50"
                          />
                          <label
                            htmlFor="useLaddering"
                            className={`text-sm cursor-pointer ${isLadderingDisabled ? 'text-gray-500' : 'text-white'}`}
                          >
                            Use Laddering?
                          </label>
                        </div>
                        {isLadderingDisabled && (
                          <span className="text-[11px] italic text-gray-500 mt-1">
                            Offset must be &lt;0 if Buy_Ask
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm text-white block">Offset Percent (e.g 5 = 5%)</span>
                    <Input
                      type="number"
                      value={offsetPercent}
                      onChange={(e) => setOffsetPercent(e.target.value)}
                      className="w-[100px] bg-[#1E1E1E] border-0 text-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}