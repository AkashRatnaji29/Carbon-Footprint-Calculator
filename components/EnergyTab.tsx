"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

type EnergyTabProps = {
  formData: any;
  onInputChange: (field: string, value: number) => void;
};

export default function EnergyTab({ formData, onInputChange }: EnergyTabProps) {
  const handleIncrement = (field: string) => {
    onInputChange(field, (formData[field] || 0) + 1);
  };

  const handleDecrement = (field: string) => {
    if ((formData[field] || 0) > 0) {
      onInputChange(field, formData[field] - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6"
    >
      {/* Electricity Usage */}
      <Card className="shadow-lg border-slate-200">
        <CardContent className="flex items-center gap-4 p-4">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3103/3103475.png"
            alt="Electricity"
            width={30}
            height={30}
          />
          <div className="w-full">
            <Label className="text-sm font-semibold">Electricity Usage (kWh/month)</Label>
            <Slider
              defaultValue={[formData.electricity || 0]}
              max={1000}
              step={10}
              onValueChange={(val) => onInputChange("electricity", val[0])}
            />
            <div className="text-sm text-muted-foreground mt-1">{formData.electricity || 0} kWh</div>
          </div>
        </CardContent>
      </Card>

      {/* Gas Usage */}
      <Card className="shadow-lg border-slate-200">
        <CardContent className="flex items-center gap-4 p-4">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3144/3144733.png"
            alt="Gas"
            width={30}
            height={30}
          />
          <div className="w-full">
            <Label className="text-sm font-semibold">Gas Usage (litres/month)</Label>
            <div className="flex items-center justify-between mt-2">
              <Button variant="outline" onClick={() => handleDecrement("gas")}>−</Button>
              <span className="px-4">{formData.gas || 0} litres</span>
              <Button variant="outline" onClick={() => handleIncrement("gas")}>+</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Renewable Energy */}
      <Card className="shadow-lg border-slate-200">
        <CardContent className="flex items-center gap-4 p-4">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/7297/7297019.png"
            alt="Renewable"
            width={30}
            height={30}
          />
          <div className="w-full">
            <Label className="text-sm font-semibold">% Renewable Energy Used</Label>
            <Slider
              defaultValue={[formData.renewable || 0]}
              max={100}
              step={5}
              onValueChange={(val) => onInputChange("renewable", val[0])}
            />
            <div className="text-sm text-muted-foreground mt-1">{formData.renewable || 0}%</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
