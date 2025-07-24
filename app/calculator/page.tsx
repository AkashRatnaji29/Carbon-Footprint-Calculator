'use client'

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import PersonalTab from '@/components/PersonalTab'
import TravelTab from '@/components/TravelTab'
import WasteTab from '@/components/WasteTab'
import EnergyTab from '@/components/EnergyTab'
import ConsumptionTab from '@/components/ConsumptionTab'
import { motion, AnimatePresence } from 'framer-motion'

const Page = () => {
  const [formData, setFormData] = useState<any>({})
  const [currentTab, setCurrentTab] = useState('personal')

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }))
  }

  const renderTabContent = () => {
    switch (currentTab) {
      case 'personal':
        return <PersonalTab formData={formData} onInputChange={handleInputChange} />
      case 'travel':
        return <TravelTab formData={formData} onInputChange={handleInputChange} />
      case 'waste':
        return <WasteTab formData={formData} onInputChange={handleInputChange} />
      case 'energy':
        return <EnergyTab formData={formData} onInputChange={handleInputChange} />
      case 'consumption':
        return <ConsumptionTab formData={formData} onInputChange={handleInputChange} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Carbon Footprint Calculator
        </motion.h1>

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="flex justify-center flex-wrap gap-2 mb-8">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="travel">Travel</TabsTrigger>
            <TabsTrigger value="waste">Waste</TabsTrigger>
            <TabsTrigger value="energy">Energy</TabsTrigger>
            <TabsTrigger value="consumption">Consumption</TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <TabsContent value={currentTab}>
                {renderTabContent()}
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  )
}

export default Page
