"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ProductFilter() {
  const [showMaturity, setShowMaturity] = useState(true)
  const [showRegions, setShowRegions] = useState(true)
  const [showTraits, setShowTraits] = useState(true)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Filter Products</h2>

      {/* Maturity Period */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setShowMaturity(!showMaturity)}
        >
          <h3 className="font-medium">Maturity Period</h3>
          {showMaturity ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>

        {showMaturity && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="early" />
              <Label htmlFor="early">Early (60-90 days)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="medium" />
              <Label htmlFor="medium">Medium (90-120 days)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="late" />
              <Label htmlFor="late">Late (120+ days)</Label>
            </div>
          </div>
        )}
      </div>

      {/* Growing Regions */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setShowRegions(!showRegions)}
        >
          <h3 className="font-medium">Growing Regions</h3>
          {showRegions ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>

        {showRegions && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="region1" />
              <Label htmlFor="region1">Region I</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="region2" />
              <Label htmlFor="region2">Region II</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="region3" />
              <Label htmlFor="region3">Region III</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="region4" />
              <Label htmlFor="region4">Region IV</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="region5" />
              <Label htmlFor="region5">Region V</Label>
            </div>
          </div>
        )}
      </div>

      {/* Special Traits */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setShowTraits(!showTraits)}
        >
          <h3 className="font-medium">Special Traits</h3>
          {showTraits ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>

        {showTraits && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="drought" />
              <Label htmlFor="drought">Drought Tolerant</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disease" />
              <Label htmlFor="disease">Disease Resistant</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="high-yield" />
              <Label htmlFor="high-yield">High Yield</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="low-nitrogen" />
              <Label htmlFor="low-nitrogen">Low Nitrogen Tolerant</Label>
            </div>
          </div>
        )}
      </div>

      <Button className="w-full bg-green-700 hover:bg-green-800">Apply Filters</Button>
    </div>
  )
}
