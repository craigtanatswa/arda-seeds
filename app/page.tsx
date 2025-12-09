import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCategoryCard from "@/components/product-category-card";
import TestimonialCard from "@/components/testimonial-card";
import { ArrowRight, Leaf, Sprout, FlaskRoundIcon as Flask } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import HeroSlideshow from "@/components/hero-slideshow";

export default async function Home() {
  // Fetch slideshow images from Supabase
  const { data: slides } = await supabase
    .from("hero_slides")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div className="flex flex-col">

      {/* HERO SECTION — DB POWERED SLIDESHOW */}
      <HeroSlideshow slides={slides ?? []} />

      {/* Product Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Seed Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCategoryCard
              title="Maize"
              description="High-yielding maize varieties with excellent disease resistance"
              image="/images/maize.jpg"
              href="/products/maize"
            />
            <ProductCategoryCard
              title="Wheat"
              description="Quality wheat seeds adapted to various ecological zones"
              image="/images/wheat.jpg"
              href="/products/wheat"
            />
            <ProductCategoryCard
              title="Soybeans"
              description="Soybean varieties with high protein content and disease resistance"
              image="/images/soybeans.jpg"
              href="/products/soybeans"
            />
            <ProductCategoryCard
              title="Groundnuts"
              description="Drought-tolerant groundnut varieties with high pod yield"
              image="/images/groundnuts.jpg"
              href="/products/groundnuts"
            />
            <ProductCategoryCard
              title="Sunflower"
              description="Sunflower seeds with high oil content for various conditions"
              image="/images/sunflower.jpg"
              href="/products/sunflower"
            />
            <ProductCategoryCard
              title="Other Crops"
              description="Explore our cowpeas, sugarbeans, sorghum and other varieties"
              image="/images/other-crops.jpg"
              href="/products/other"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Sprout className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Outgrowing</h3>
              <p className="text-gray-600">
                Partner with us for seed multiplication and production through our outgrower programs.
              </p>
              <Link href="/services/outgrowing" className="mt-4 text-green-700 font-medium flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Flask className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Soil Testing</h3>
              <p className="text-gray-600">
                Get comprehensive soil analysis to optimize your crop production and yield potential.
              </p>
              <Link href="/services/soil-testing" className="mt-4 text-green-700 font-medium flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agronomic Support</h3>
              <p className="text-gray-600">
                Access expert advice on planting guides, pest control, and crop management.
              </p>
              <Link href="/agronomy" className="mt-4 text-green-700 font-medium flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Growers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="ARDA Seeds' maize varieties have consistently given me excellent yields, even during drought seasons."
              author="John Moyo"
              role="Commercial Farmer, Mashonaland"
            />
            <TestimonialCard
              quote="The technical support from ARDA's agronomists has been invaluable for improving my farming practices."
              author="Sarah Mutasa"
              role="Smallholder Farmer, Manicaland"
            />
            <TestimonialCard
              quote="I've been using ARDA's soybean seeds for five years now and the quality is always outstanding."
              author="David Ncube"
              role="Farm Manager, Midlands"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow with ARDA Seeds?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied farmers across Zimbabwe who trust our seeds for their crops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              <Link href="/register">Register as a Grower</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white hover:bg-green-800">
              <Link href="/quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
