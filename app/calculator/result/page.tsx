'use client';

import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA46BE'];

const ecoTips = [
  '🚴 Use a bike or walk for short distances.',
  '💡 Switch to LED lighting.',
  '♻️ Recycle plastic, glass, and paper properly.',
  '🌱 Choose locally grown organic food.',
  '🔌 Unplug electronics when not in use.',
  '👕 Buy fewer fast-fashion clothes.',
  '🌿 Plant a tree or start a garden.',
];

const ResultPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const stored = localStorage.getItem('formData');
    if (stored) {
      const d = JSON.parse(stored);
  
      console.log("formData raw inputs:", d); // Debug: Log raw inputs

// Normalize values to kg CO2e, aligned with snippet 2
const personal = (
  (d.height || 0) * 0.1 +
  (d.weight || 0) * 0.5 +
  (d.diet === 'vegan' ? 1000 : d.diet === 'vegetarian' ? 1500 : 2000) +
  (d.socialActivity === 'often' ? 500 : d.socialActivity === 'sometimes' ? 200 : 0)
);

// Travel with annual scaling and modifiers
const travel = (
  (d.commute || 0) * 0.41 * 365 +
  (d.flights || 0) * 90
) * (d.carType === 'electric' ? 0.5 : d.carType === 'hybrid' ? 0.75 : 1) *
  (d.publicTransport === 'often' ? 0.5 : d.publicTransport === 'sometimes' ? 0.75 : 1);

// Waste with default value and baseline
const weeklyWaste = parseFloat(d.weeklyWaste) || 1; // Default to 1 kg/week if missing/invalid
const waste = (
  weeklyWaste * 52 * 2 + 50 // Annual scaling + baseline (50 kg CO2e for minimal waste)
) * (d.recycle === 'always' ? 0.5 : d.recycle === 'sometimes' ? 0.75 : 1) *
  (d.compost === 'yes' ? 0.8 : 1) *
  (d.plastics === 'never' ? 0.7 : d.plastics === 'sometimes' ? 0.85 : 1);

// Energy with annual scaling and modifiers
const energy = (
  (d.electricity || 0) * 0.92 * 12
) * (d.heating === 'renewable' ? 0.5 : d.heating === 'electric' ? 0.8 : 1) *
  (d.appliances === 'most' ? 0.7 : d.appliances === 'some' ? 0.85 : 1) *
  (d.renewable === 'full' ? 0.3 : d.renewable === 'partial' ? 0.6 : 1);

// Consumption with default values and baseline
const shopping = parseFloat(d.shopping) || 0.5; // Default to 0.5 items/week
const clothing = parseFloat(d.clothing) || 2; // Default to 2 clothing items/year
const consumption = (
  shopping * 52 * 5 + clothing * 20 + 100 // Annual scaling + baseline (100 kg CO2e for minimal consumption)
) * (d.secondhand === 'often' ? 0.5 : d.secondhand === 'sometimes' ? 0.75 : 1) *
  (d.packaging === 'none' ? 0.6 : d.packaging === 'minimal' ? 0.8 : 1);

const chartData = [
  { name: 'Personal', value: parseFloat(personal.toFixed(2)) },
  { name: 'Travel', value: parseFloat(travel.toFixed(2)) },
  { name: 'Waste', value: parseFloat(waste.toFixed(2)) },
  { name: 'Energy', value: parseFloat(energy.toFixed(2)) },
  { name: 'Consumption', value: parseFloat(consumption.toFixed(2)) },
];  
      console.log("Chart Data:", chartData); // Debug: Verify chart data values
  
      const totalFootprint = chartData.reduce((sum, item) => sum + item.value, 0);
      setData(chartData);
      setTotal(parseFloat(totalFootprint.toFixed(2)));
    }
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-slate-100 to-slate-200">
      <h1 className="text-4xl font-bold text-center mb-6 text-slate-800">🌍 Your Carbon Footprint Report</h1>

      <Card className="max-w-4xl mx-auto shadow-xl rounded-3xl bg-white p-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4 text-center">Total Carbon Footprint: <span className="text-green-600">{total} kg CO₂/month</span></h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(2)}%`}
                outerRadius={120}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-6">
        <CardContent>
          <h3 className="text-lg font-bold mb-3 text-slate-700">🌱 Eco-Friendly Tips to Reduce Your Footprint</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {ecoTips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6">
        <Button onClick={() => window.location.href = '/calculator'} variant="default">
          🔁 Go Back & Edit Inputs
        </Button>
      </div>
    </div>
  );
};

export default ResultPage;