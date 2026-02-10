import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Wheat } from "lucide-react"

export const metadata: Metadata = {
  title: "Planting Guides | ARDA Seeds Agronomy",
  description: "Access comprehensive planting guides for maize, wheat, soybeans, groundnuts, sunflower and more from ARDA Seeds.",
}

const plantingGuides = [
  {
    id: "maizeguide",
    title: "Maize Planting Guide",
    description: "Comprehensive guide for planting and managing maize crops across various ecological zones",
    icon: Leaf,
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
    crops: "5 varieties",
    season: "Nov-Dec planting",
    yield: "4-12t/ha",
  },
  {
    id: "wheatguide",
    title: "Wheat Planting Guide",
    description: "Best practices for wheat cultivation in Highveld, Middleveld, and Lowveld regions",
    icon: Wheat,
    color: "from-amber-400 to-amber-600",
    bgColor: "bg-amber-100",
    textColor: "text-amber-700",
    crops: "1 premium variety",
    season: "Apr-May planting",
    yield: "6-10t/ha",
  },
  {
    id: "soybeans",
    title: "Soybean Planting Guide",
    description: "Guidelines for successful soybean cultivation with high protein content and disease resistance",
    icon: Leaf,
    color: "from-emerald-400 to-emerald-600",
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-700",
    crops: "2 varieties",
    season: "Nov-Dec planting",
    yield: "3-4t/ha",
  },
  {
    id: "groundnutsguide",
    title: "Groundnut Planting Guide",
    description: "Complete guide to growing drought-tolerant groundnuts with high pod yield potential",
    icon: Leaf,
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-100",
    textColor: "text-orange-700",
    crops: "1 short-season variety",
    season: "Nov-Dec planting",
    yield: "4t/ha pods",
  },
  {
    id: "sunflower",
    title: "Sunflower Planting Guide",
    description: "Growing sunflowers with high oil content (39-45%) for various ecological conditions",
    icon: Leaf,
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700",
    crops: "2 oil-rich varieties",
    season: "Nov-Dec planting",
    yield: "Up to 2.5t/ha",
  },
]

export default function PlantingGuidesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Planting Guides
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Expert agronomic advice and comprehensive step-by-step guides for all our crop varieties
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="font-semibold">5 Crop Guides</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="font-semibold">Complete Growing Info</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="font-semibold">Disease Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Crop</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a planting guide below to access detailed information on varieties, planting techniques, 
            fertilization, pest management, and harvest practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plantingGuides.map((guide) => {
            const Icon = guide.icon
            
            return (
              <Card 
                key={guide.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${guide.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                      <Icon className={`h-8 w-8 ${guide.textColor}`} />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                      {guide.crops}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{guide.title}</CardTitle>
                  <CardDescription className="text-base">{guide.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className={`${guide.bgColor} p-1.5 rounded`}>
                        <Leaf className={`h-4 w-4 ${guide.textColor}`} />
                      </div>
                      <span className="text-gray-700"><strong>Season:</strong> {guide.season}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className={`${guide.bgColor} p-1.5 rounded`}>
                        <Wheat className={`h-4 w-4 ${guide.textColor}`} />
                      </div>
                      <span className="text-gray-700"><strong>Yield:</strong> {guide.yield}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    asChild 
                    className={`w-full bg-gradient-to-r ${guide.color} hover:opacity-90 transition-opacity`}
                  >
                    <Link href={`/agronomy/guides/${guide.id}`}>
                      View Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3">More Guides Coming Soon</h3>
              <p className="text-gray-600 mb-4">
                We're continuously developing new planting guides for additional crops including 
                cowpeas, sugar beans, sorghum, and more.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">Request a Specific Guide</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Agronomic Advice?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our team of experienced agronomists is available to provide customized recommendations 
            for your specific farming conditions and challenges
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              <Link href="/contact">Contact Our Agronomists</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-green-800 hover:bg-gray-100">
              <Link href="/products">Browse Our Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
