import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "About Us | ARDA Seeds",
  description:
    "Learn about ARDA Seeds, our history, mission, values, and the team behind our high-quality agricultural seeds.",
}

export default function AboutPage() {
  return (
    <div>
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src="/images/aboutus/aboutus-maize.jpg"
          alt="ARDA Seeds field"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">About ARDA Seeds</h1>
            <p className="text-white text-lg md:text-xl max-w-2xl">
              Committed to agricultural excellence and sustainable farming practices
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="company" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="company">Our Company</TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
            <TabsTrigger value="partners">Partners & Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="company" className="pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  ARDA Seeds (PVT) Ltd was established with a vision to provide Zimbabwean farmers with high-quality,
                  locally adapted seed varieties that would help them increase productivity and profitability.
                </p>
                <p className="text-gray-700 mb-4">
                  Over the years, we have grown to become one of the leading seed suppliers in Zimbabwe, known for our
                  commitment to quality, innovation, and customer service. Our extensive research and development
                  efforts have resulted in seed varieties that are specifically bred for local conditions, offering
                  superior performance in terms of yield, disease resistance, and adaptability.
                </p>
                <p className="text-gray-700">
                  Today, ARDA Seeds continues to expand its product range and geographical reach, while maintaining its
                  core values of integrity, excellence, and sustainability.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src="/images/about-company.jpg" alt="ARDA Seeds facility" fill className="object-cover" />
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Mission & Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-center">Mission</h3>
                    <p className="text-gray-700">
                      To enhance agricultural productivity and food security by providing farmers with high-quality,
                      innovative seed solutions and agronomic support.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-center">Vision</h3>
                    <p className="text-gray-700">
                      To be the leading seed company in Zimbabwe and beyond, recognized for excellence in product
                      quality, innovation, and customer service.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-center">Values</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Integrity in all our dealings</li>
                      <li>• Commitment to quality and excellence</li>
                      <li>• Innovation in product development</li>
                      <li>• Sustainability in farming practices</li>
                      <li>• Customer-centric approach</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">Our Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-green-700 mb-2">16+</div>
                  <p className="text-gray-700">Seed Varieties</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-green-700 mb-2">1000+</div>
                  <p className="text-gray-700">Farmers Served</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-green-700 mb-2">20+</div>
                  <p className="text-gray-700">Years of Experience</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-green-700 mb-2">5+</div>
                  <p className="text-gray-700">Research Partnerships</p>
                </div>
              </div>
            </div>
          </TabsContent>


          <TabsContent value="team" className="pt-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Leadership Team</h2>
            
            {/* Managing Director - Top Level */}
            <div className="max-w-md mx-auto mb-12">
              <div className="text-center">
                <div className="relative h-96 w-96 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/images/aboutus/leadership/managing-director.png" alt="Managing Director" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-green-700 mb-2">Managing Director</p>
                <p className="text-gray-700 text-sm">
                  With over two decades of dedicated service to the agricultural sector, our Managing Director Mr Wiseman Teta, brings a wealth of strategic and operational expertise to the helm of ARDA Seeds. His leadership is deeply rooted in his foundational five-year tenure as the General Manager of ARDA, where he played a pivotal role in revitalizing large-scale agricultural projects and streamlining national supply chains. This period was instrumental in shaping his holistic understanding of the industry; by navigating the complexities of high-level agricultural management, he developed a sharp reputation as a pragmatic problem-solver with an unwavering focus on food security and rural development.

                    Beyond his technical credentials, he is defined by a "field-first" philosophy. He is a leader who firmly believes that the most valuable insights are found in the soil and through direct conversation with growers, rather than just on a balance sheet. This approach has fostered a corporate culture at ARDA Seeds that prioritizes integrity and seed purity above all else. Having guided organizations through various economic and climatic cycles, he possesses a visionary resilience and a calm, long-term perspective on agricultural investment that stabilizes the company's trajectory in a changing world.

                    Under his guidance, ARDA Seeds has evolved from a traditional supplier into a true strategic partner for the farming community. His character is marked by a commitment to mentorship, as he remains dedicated to empowering the next generation of agronomists and researchers within the firm. Ultimately, his leadership is driven by a singular, guiding belief: that the strength of the nation is built upon the success of the farmer. By blending institutional knowledge with a modern, innovative mindset, he continues to ensure that every seed we produce is a promise of reliability and prosperity.
                </p>
              </div>
            </div>

            {/* General Manager and Commercial Services Manager - Second Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/images/aboutus/leadership/general-manager.png" alt="General Manager" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-green-700 mb-2">General Manager</p>
                <p className="text-gray-700 text-sm">
                  Jane oversees our day-to-day operations, ensuring that we maintain the highest standards of quality
                  and service excellence.
                </p>
              </div>

              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images//aboutus/leadership/corporate-services-manager.png"
                    alt="Commercial Services Manager"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Robert Johnson</h3>
                <p className="text-green-700 mb-2">Commercial Services Manager</p>
                <p className="text-gray-700 text-sm">
                  Robert leads our commercial team, developing strategic partnerships and ensuring that our products
                  reach farmers across the country.
                </p>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Team's Expertise</h2>
              <p className="text-gray-700 max-w-3xl mx-auto mb-6">
                At ARDA Seeds, our team comprises experienced professionals with diverse expertise in plant breeding,
                agronomy, seed production, quality control, and customer service. This multidisciplinary approach allows
                us to deliver comprehensive solutions to our farmers.
              </p>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="partners" className="pt-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="relative h-20 mb-4">
                    <Image
                      src="/images/partner-1.jpg"
                      alt="Zimbabwe Seed Producers Association"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Zimbabwe Seed Producers Association</h3>
                  <p className="text-gray-700">
                    As a member of the Zimbabwe Seed Producers Association, we collaborate with other seed producers to
                    promote industry standards and best practices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="relative h-20 mb-4">
                    <Image
                      src="/images/partner-2.jpg"
                      alt="Agricultural Research Council"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Agricultural Research Council</h3>
                  <p className="text-gray-700">
                    Our partnership with the Agricultural Research Council enables us to stay at the forefront of
                    agricultural research and innovation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="relative h-20 mb-4">
                    <Image src="/images/partner-3.jpg" alt="Farmer City" fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Farmer City</h3>
                  <p className="text-gray-700">
                    Farmer City is one of our key retail partners, helping us distribute our seeds to farmers across the
                    country.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-center">Certifications & Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-gray-700 mb-4">
                    All our seed varieties undergo rigorous testing to ensure they meet the highest standards of
                    quality, purity, and germination. Our quality control processes include:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Field inspections during seed production</li>
                    <li>• Laboratory testing for germination and purity</li>
                    <li>• Post-harvest quality checks</li>
                    <li>• Proper storage and handling procedures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                  <p className="text-gray-700 mb-4">
                    Our commitment to quality and excellence is reflected in our certifications:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• ISO 9001:2015 Quality Management System</li>
                    <li>• Seed Certification from the Seed Services Institute</li>
                    <li>• Member of the Zimbabwe Seed Producers Association</li>
                    <li>• Environmental Management Certification</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
              <p className="text-gray-700 max-w-3xl mx-auto mb-6">
                We are always looking for new partnerships that can help us better serve our farmers and expand our
                reach. If you are interested in partnering with ARDA Seeds, please contact us.
              </p>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="/contact">Contact Us for Partnership</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}