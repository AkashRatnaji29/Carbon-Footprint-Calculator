'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'

interface PersonalTabProps {
  formData: any
  onInputChange: (field: string, value: number | string) => void
}

const PersonalTab: React.FC<PersonalTabProps> = ({ formData, onInputChange }) => {
  const handleIncrement = (field: string) => {
    onInputChange(field, (formData[field] || 0) + 1)
  }

  const handleDecrement = (field: string) => {
    onInputChange(field, Math.max((formData[field] || 0) - 1, 0))
  }

  return (
    <motion.div
      key="personal"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl max-w-2xl mx-auto"
    >
      {/* Age */}
      <div className="flex items-center gap-4">
        <Image src="https://cdn-icons-png.flaticon.com/512/7187/7187696.png" alt="Age" width={30} height={30} />
        <Label className="text-base font-semibold">Age</Label>
        <div className="flex items-center ml-auto gap-2">
          <Button variant="outline" onClick={() => handleDecrement('age')}>−</Button>
          <span className="w-8 text-center">{formData.age || 0}</span>
          <Button variant="outline" onClick={() => handleIncrement('age')}>+</Button>
        </div>
      </div>

    {/* Gender */}
<div className="flex items-center gap-4">
  <Image src="https://cdn-icons-png.flaticon.com/512/506/506023.png" alt="Gender" width={30} height={30} />
  <Label className="text-base font-semibold">Gender</Label>
  <Select value={formData.gender || ''} onValueChange={(value) => onInputChange('gender', value)}>
    <SelectTrigger className="w-[180px] ml-auto">
      <SelectValue placeholder="Select gender" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="male">Male</SelectItem>
      <SelectItem value="female">Female</SelectItem>
      <SelectItem value="trans">Transgender</SelectItem>
      <SelectItem value="prefer_not_say">Prefer not to say</SelectItem>
    </SelectContent>
  </Select>
</div>

{/* Height */}
<div className="flex items-center gap-4">
  <Image src="https://cdn-icons-png.flaticon.com/512/4482/4482403.png" alt="Height" width={30} height={30} />
  <Label className="text-base font-semibold">Height (cm)</Label>
  <div className="flex-1 ml-auto">
    <Slider
      min={100}
      max={250}
      step={1}
      value={[formData.height || 170]}
      onValueChange={(val) => onInputChange('height', val[0])}
    />
    <div className="text-right text-sm text-muted-foreground">{formData.height || 170} cm</div>
  </div>
</div>

{/* Weight */}
<div className="flex items-center gap-4">
  <Image src="https://cdn-icons-png.flaticon.com/512/1043/1043217.png" alt="Weight" width={30} height={30} />
  <Label className="text-base font-semibold">Weight (kg)</Label>
  <div className="flex-1 ml-auto">
    <Slider
      min={30}
      max={200}
      step={1}
      value={[formData.weight || 70]}
      onValueChange={(val) => onInputChange('weight', val[0])}
    />
    <div className="text-right text-sm text-muted-foreground">{formData.weight || 70} kg</div>
  </div>
</div>

{/* Dietary Preference */}
<div className="flex items-center gap-4">
  <Image src="https://cdn-icons-png.flaticon.com/512/706/706195.png" alt="Diet" width={30} height={30} />
  <Label className="text-base font-semibold">Dietary Preference</Label>
  <Select value={formData.diet || ''} onValueChange={(value) => onInputChange('diet', value)}>
    <SelectTrigger className="w-[200px] ml-auto">
      <SelectValue placeholder="Select diet" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="omnivore">Omnivore</SelectItem>
      <SelectItem value="vegetarian">Vegetarian</SelectItem>
      <SelectItem value="vegan">Vegan</SelectItem>
    </SelectContent>
  </Select>
</div>

    </motion.div>
  )
}

export default PersonalTab
