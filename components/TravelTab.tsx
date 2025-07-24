'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import Image from "next/image";

type TravelTabProps = {
  formData: any;
  onInputChange: (field: string, value: any) => void;
};

export default function TravelTab({ formData, onInputChange }: TravelTabProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6"
    >
      {/* Mode of Transport Dropdown */}
      <Card className="shadow-lg border-slate-200">
        <CardContent className="flex items-center gap-4 p-4">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
            alt="Transport"
            width={30}
            height={30}
          />
          <div className="w-full">
            <Label className="text-sm font-semibold">Mode of Transport</Label>
            <Select
              onValueChange={(val) => onInputChange("modeOfTransport", val)}
              defaultValue={formData.modeOfTransport || "car"}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Car</SelectItem>
                <SelectItem value="bike">Bike</SelectItem>
                <SelectItem value="bus">Bus</SelectItem>
                <SelectItem value="train">Train</SelectItem>
                <SelectItem value="walk">Walk</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Car Travel */}
      <Card className="shadow-lg border-slate-200">
        <CardContent className="flex items-center gap-4 p-4">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
            alt="Car"
            width={30}
            height={30}
          />
          <div className="w-full">
            <Label className="text-sm font-semibold">Car Travel (km/day)</Label>
            <Slider
              value={[formData.carTravel || 0]}
              max={100}
              step={1}
              onValueChange={(val) => onInputChange("carTravel", val[0])}
            />
            <div className="text-sm text-muted-foreground mt-1">{formData.carTravel || 0} km/day</div>
          </div>
        </CardContent>
      </Card>

      {/* Bike Travel */}
      <Card className="shadow-lg border-slate-200">
        <CardContent className="flex items-center gap-4 p-4">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1768/1768214.png"
            alt="Bike"
            width={30}
            height={30}
          />
          <div className="w-full">
            <Label className="text-sm font-semibold">Bike Travel (km/day)</Label>
            <Slider
              value={[formData.bikeTravel || 0]}
              max={100}
              step={1}
              onValueChange={(val) => onInputChange("bikeTravel", val[0])}
            />
            <div className="text-sm text-muted-foreground mt-1">{formData.bikeTravel || 0} km/day</div>
          </div>
        </CardContent>
      </Card>

      {/* Flights per Year */}
      <Card className="shadow-lg border-slate-200">
        <CardContent className="flex items-center gap-4 p-4">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/7893/7893979.png"
            alt="Flight"
            width={30}
            height={30}
          />
          <div className="w-full">
            <Label className="text-sm font-semibold">Flights per Year</Label>
            <Slider
              value={[formData.flights || 0]}
              max={20}
              step={1}
              onValueChange={(val) => onInputChange("flights", val[0])}
            />
            <div className="text-sm text-muted-foreground mt-1">{formData.flights || 0} flights</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}