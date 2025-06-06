import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "News & Updates | ARDA Seeds",
  description:
    "Stay up-to-date with the latest news, product launches, seasonal campaigns, and agricultural insights from ARDA Seeds.",
}

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">News & Updates</h1>
      <p className="text-gray-600 mb-8">
        Stay up-to-date with the latest news, product launches, seasonal campaigns, and agricultural insights from ARDA
        Seeds.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Latest News</h2>

            <Card className="mb-6">
              <div className="relative h-[300px]">
                <Image
                  src="/images/news-1.jpg"
                  alt="New Maize Variety Launch"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-700">New Product</Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" /> June 1, 2023
                  </div>
                </div>
                <CardTitle>ARDA Seeds Launches New Drought-Resistant Maize Variety</CardTitle>
                <CardDescription>
                  Our latest maize variety offers exceptional performance in drought conditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  ARDA Seeds is proud to announce the launch of our newest maize variety, ZS270, specifically bred for
                  exceptional performance under drought conditions. This new variety combines early maturity with
                  outstanding yield potential, making it an ideal choice for farmers in regions with unpredictable
                  rainfall patterns.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-green-700 hover:bg-green-800">
                  <Link href="/news/drought-resistant-maize">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <div className="relative h-[200px]">
                  <Image src="/images/news-2.jpg" alt="Farmer Field Day" fill className="object-cover rounded-t-lg" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="border-green-700 text-green-700">
                      Event
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" /> May 15, 2023
                    </div>
                  </div>
                  <CardTitle>Successful Farmer Field Day in Mashonaland East</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 line-clamp-3">
                    Over 200 farmers attended our recent field day in Mashonaland East, where we showcased our latest
                    seed varieties and agronomic practices.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-green-700 text-green-700 hover:bg-green-50"
                  >
                    <Link href="/news/field-day">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <div className="relative h-[200px]">
                  <Image
                    src="/images/news-3.jpg"
                    alt="Partnership Announcement"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="border-green-700 text-green-700">
                      Partnership
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" /> April 28, 2023
                    </div>
                  </div>
                  <CardTitle>ARDA Seeds Partners with Agricultural Research Institute</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 line-clamp-3">
                    We are excited to announce our new research partnership aimed at developing climate-smart seed
                    varieties for Zimbabwean farmers.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-green-700 text-green-700 hover:bg-green-50"
                  >
                    <Link href="/news/research-partnership">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Seasonal Updates</h2>

            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-700">Current Season</Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" /> May 10, 2023
                  </div>
                </div>
                <CardTitle>2023 Winter Wheat Planting Season Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  As the winter wheat planting season approaches, ARDA Seeds recommends our NCEMA variety for its
                  excellent performance across different ecological zones. Here are some key recommendations for this
                  season:
                </p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Optimal planting time: Mid-May to early June</li>
                  <li>• Recommended seeding rate: 100-120 kg/ha</li>
                  <li>• Fertilizer application: Base dressing with Compound D (7:14:7)</li>
                  <li>• Disease monitoring: Watch for early signs of rust and powdery mildew</li>
                </ul>
                <p className="text-gray-700">
                  Contact our agronomists for personalized recommendations based on your specific farming conditions.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-green-700 hover:bg-green-800">
                  <Link href="/agronomy/guides/wheat">
                    View Wheat Planting Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
              <Link
                href="/news/category/product-launches"
                className="block text-green-700 hover:text-green-800 hover:underline"
              >
                Product Launches
              </Link>
              <Link href="/news/category/events" className="block text-green-700 hover:text-green-800 hover:underline">
                Events & Field Days
              </Link>
              <Link
                href="/news/category/partnerships"
                className="block text-green-700 hover:text-green-800 hover:underline"
              >
                Partnerships
              </Link>
              <Link
                href="/news/category/seasonal-updates"
                className="block text-green-700 hover:text-green-800 hover:underline"
              >
                Seasonal Updates
              </Link>
              <Link
                href="/news/category/agronomic-tips"
                className="block text-green-700 hover:text-green-800 hover:underline"
              >
                Agronomic Tips
              </Link>
              <Link
                href="/news/category/company-news"
                className="block text-green-700 hover:text-green-800 hover:underline"
              >
                Company News
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image src="/images/news-thumb-1.jpg" alt="News thumbnail" fill className="object-cover rounded" />
                </div>
                <div>
                  <h3 className="font-medium hover:text-green-700">
                    <Link href="/news/drought-resistant-maize">
                      ARDA Seeds Launches New Drought-Resistant Maize Variety
                    </Link>
                  </h3>
                  <p className="text-gray-500 text-sm">June 1, 2023</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image src="/images/news-thumb-2.jpg" alt="News thumbnail" fill className="object-cover rounded" />
                </div>
                <div>
                  <h3 className="font-medium hover:text-green-700">
                    <Link href="/news/field-day">Successful Farmer Field Day in Mashonaland East</Link>
                  </h3>
                  <p className="text-gray-500 text-sm">May 15, 2023</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image src="/images/news-thumb-3.jpg" alt="News thumbnail" fill className="object-cover rounded" />
                </div>
                <div>
                  <h3 className="font-medium hover:text-green-700">
                    <Link href="/news/research-partnership">
                      ARDA Seeds Partners with Agricultural Research Institute
                    </Link>
                  </h3>
                  <p className="text-gray-500 text-sm">April 28, 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Newsletter Signup</h2>
            <p className="text-gray-700 mb-4">
              Subscribe to our newsletter to receive the latest updates, seasonal recommendations, and agronomic tips.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Button className="w-full bg-green-700 hover:bg-green-800">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
