import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, FileText, Leaf, Droplets, Bug } from "lucide-react"

export const metadata: Metadata = {
  title: "Agronomic Support | ARDA Seeds",
  description:
    "Access expert agronomic advice, planting guides, pest and disease control information, and soil management tips from ARDA Seeds.",
}

export default function AgronomyPage() {
  return (
    <div>
      <div className="bg-green-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Agronomic Support</h1>
          <p className="text-xl mb-8">Expert advice and resources to help you maximize your crop yield and quality</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              <a href="#planting-guides">Planting Guides</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-green-800">
              <a href="#pest-control">Pest & Disease Control</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="planting-guides" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="planting-guides">Planting Guides</TabsTrigger>
            <TabsTrigger value="pest-control">Pest & Disease Control</TabsTrigger>
            <TabsTrigger value="soil-management">Soil Management</TabsTrigger>
          </TabsList>

          <TabsContent value="planting-guides" id="planting-guides" className="pt-6">
            <h2 className="text-2xl font-bold mb-6">Planting Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <Leaf className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle>Maize Planting Guide</CardTitle>
                  <CardDescription>Comprehensive guide for planting and managing maize crops</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Learn about optimal planting times, spacing, fertilization, and management practices for different
                    maize varieties across various ecological zones.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                    <Link href="/agronomy/guides/maize">
                      View Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <Leaf className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle>Wheat Planting Guide</CardTitle>
                  <CardDescription>Best practices for wheat cultivation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Detailed information on wheat planting dates, seeding rates, fertilization schedules, and irrigation
                    management for optimal wheat production.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                    <Link href="/agronomy/guides/wheat">
                      View Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <Leaf className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle>Soybean Planting Guide</CardTitle>
                  <CardDescription>Maximize your soybean yield with expert advice</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Guidelines for successful soybean cultivation, including planting techniques, inoculation, weed
                    management, and harvesting recommendations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                    <Link href="/agronomy/guides/soybeans">
                      View Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                <Link href="/agronomy/guides">View All Planting Guides</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="pest-control" id="pest-control" className="pt-6">
            <h2 className="text-2xl font-bold mb-6">Pest & Disease Control</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <Bug className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle>Maize Disease Management</CardTitle>
                  <CardDescription>Identifying and controlling common maize diseases</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Learn to identify and manage Grey Leaf Spot, Maize Streak Virus, Northern Leaf Blight, and other
                    common diseases affecting maize crops.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                    <Link href="/agronomy/pest-control/maize-diseases">
                      View Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <Bug className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle>Fall Armyworm Control</CardTitle>
                  <CardDescription>Strategies to combat fall armyworm infestations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Comprehensive guide on identifying, monitoring, and controlling fall armyworm, including cultural,
                    biological, and chemical control methods.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                    <Link href="/agronomy/pest-control/fall-armyworm">
                      View Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <Bug className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle>Integrated Pest Management</CardTitle>
                  <CardDescription>Sustainable approaches to pest control</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Learn about environmentally sensitive approaches to pest management that rely on a combination of
                    common-sense practices and careful monitoring.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                    <Link href="/agronomy/pest-control/ipm">
                      View Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                <Link href="/agronomy/pest-control">View All Pest & Disease Guides</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="soil-management" className="pt-6">
            <h2 className="text-2xl font-bold mb-6">Soil Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <Droplets className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle>Soil Testing Guide</CardTitle>
                  <CardDescription>Understanding and interpreting soil test results</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Learn how to properly collect soil samples, understand soil test reports, and make informed
                    decisions about fertilization and soil amendments.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                    <Link href="/agronomy/soil/testing">
                      View Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <Droplets className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle>Fertilization Strategies</CardTitle>
                  <CardDescription>Optimizing crop nutrition for maximum yield</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Comprehensive guide on fertilizer types, application methods, timing, and rates for different crops
                    and soil conditions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                    <Link href="/agronomy/soil/fertilization">
                      View Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <Droplets className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle>Conservation Agriculture</CardTitle>
                  <CardDescription>Sustainable soil management practices</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Learn about minimum tillage, crop rotation, and cover cropping techniques to improve soil health,
                    reduce erosion, and enhance long-term productivity.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                    <Link href="/agronomy/soil/conservation">
                      View Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                <Link href="/agronomy/soil">View All Soil Management Guides</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-gray-50 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3">
                <div className="bg-green-100 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                  <FileText className="h-12 w-12 text-green-700" />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-3">Need Personalized Agronomic Advice?</h2>
                <p className="text-gray-700 mb-4">
                  Our team of agronomists is available to provide customized recommendations for your specific farming
                  conditions and challenges.
                </p>
                <Button asChild className="bg-green-700 hover:bg-green-800">
                  <Link href="/contact">Contact Our Agronomists</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
