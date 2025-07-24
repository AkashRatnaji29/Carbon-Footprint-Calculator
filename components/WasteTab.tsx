"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import Image from "next/image";

type WasteTabProps = {
  formData: any;
  onInputChange: (field: string, value: number) => void;
};

export default function WasteTab({ formData, onInputChange }: WasteTabProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6"
    >
      {/* Plastic Waste */}
      <Card className="shadow-lg border-slate-200">
        <CardContent className="flex items-center gap-4 p-4">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1039/1039778.png"
            alt="Plastic"
            width={30}
            height={30}
          />
          <div className="w-full">
            <Label className="text-sm font-semibold">Plastic Waste (kg/week)</Label>
            <Slider
              defaultValue={[formData.plasticWaste || 0]}
              max={50}
              step={1}
              onValueChange={(val) => onInputChange("plasticWaste", val[0])}
            />
            <div className="text-sm text-muted-foreground mt-1">{formData.plasticWaste || 0} kg</div>
          </div>
        </CardContent>
      </Card>

      {/* Food Waste */}
      <Card className="shadow-lg border-slate-200">
        <CardContent className="flex items-center gap-4 p-4">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/135/135620.png"
            alt="Food"
            width={30}
            height={30}
          />
          <div className="w-full">
            <Label className="text-sm font-semibold">Food Waste (kg/week)</Label>
            <Slider
              defaultValue={[formData.foodWaste || 0]}
              max={50}
              step={1}
              onValueChange={(val) => onInputChange("foodWaste", val[0])}
            />
            <div className="text-sm text-muted-foreground mt-1">{formData.foodWaste || 0} kg</div>
          </div>
        </CardContent>
      </Card>

      {/* Paper Waste */}
      <Card className="shadow-lg border-slate-200">
        <CardContent className="flex items-center gap-4 p-4">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1039/1039780.png"
            alt="Paper"
            width={30}
            height={30}
          />
          <div className="w-full">
            <Label className="text-sm font-semibold">Paper Waste (kg/week)</Label>
            <Slider
              defaultValue={[formData.paperWaste || 0]}
              max={50}
              step={1}
              onValueChange={(val) => onInputChange("paperWaste", val[0])}
            />
            <div className="text-sm text-muted-foreground mt-1">{formData.paperWaste || 0} kg</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
