"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ConsumptionTabProps {
  formData: any;
  onInputChange: (field: string, value: number) => void;
}

export default function ConsumptionTab({ formData, onInputChange }: ConsumptionTabProps) {
  const [gadgetHours, setGadgetHours] = useState(formData.gadgetHours || 0);

  const handleGadgetChange = (val: number[]) => {
    setGadgetHours(val[0]);
    onInputChange("gadgetHours", val[0]);
  };

  const handleOptionChange = (field: string, value: number) => {
    onInputChange(field, value);
  };

  return (
    <Card className="p-4 shadow-xl">
      <CardContent className="space-y-6">
        {/* Gadget Usage */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Image src="https://cdn-icons-png.flaticon.com/512/1077/1077046.png" alt="Gadgets" width={30} height={30} />
            <Label className="text-base font-semibold">Gadget Usage (hours/day): {gadgetHours}</Label>
          </div>
          <Slider
            defaultValue={[gadgetHours]}
            max={24}
            step={1}
            onValueChange={handleGadgetChange}
          />
        </div>

        {/* Clothing Purchase */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Image src="https://cdn-icons-png.flaticon.com/512/892/892458.png" alt="Clothing" width={30} height={30} />
            <Label className="text-base font-semibold">Clothing Purchases Per Month</Label>
          </div>
          <RadioGroup
            defaultValue={formData.clothingPurchases?.toString() || "0"}
            onValueChange={(val) => handleOptionChange("clothingPurchases", parseInt(val))}
            className="grid grid-cols-2 gap-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="0" id="clothing-none" />
              <Label htmlFor="clothing-none">None</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2" id="clothing-1-2" />
              <Label htmlFor="clothing-1-2">1–2 items</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4" id="clothing-3-5" />
              <Label htmlFor="clothing-3-5">3–5 items</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="6" id="clothing-6+" />
              <Label htmlFor="clothing-6+">6+ items</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Paper Usage */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Image src="https://cdn-icons-png.flaticon.com/512/3238/3238024.png" alt="Paper" width={30} height={30} />
            <Label className="text-base font-semibold">Paper Usage Per Month</Label>
          </div>
          <RadioGroup
            defaultValue={formData.paperUsage?.toString() || "0"}
            onValueChange={(val) => handleOptionChange("paperUsage", parseInt(val))}
            className="grid grid-cols-2 gap-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="25" id="paper-minimal" />
              <Label htmlFor="paper-minimal">Minimal (0–50)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="75" id="paper-moderate" />
              <Label htmlFor="paper-moderate">Moderate (51–100)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="150" id="paper-high" />
              <Label htmlFor="paper-high">High (101–200)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="250" id="paper-very-high" />
              <Label htmlFor="paper-very-high">Very High (200+)</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Submit Button */}
        <Button
          className="mt-6 w-full text-lg"
          onClick={() => {
            if (typeof window !== 'undefined') {
              localStorage.setItem('formData', JSON.stringify(formData));
              window.location.href = '/calculator/result';
            }
          }}
        >
          🚀 Calculate Carbon Footprint
        </Button>
      </CardContent>
    </Card>
  );
}
