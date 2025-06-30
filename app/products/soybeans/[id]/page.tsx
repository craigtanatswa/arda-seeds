import { notFound } from 'next/navigation';
import { soybeanProducts } from '@/lib/product-data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from "@/components/ui/badge"

interface ProductPageProps {
  params: { id: string };
}

export default function SoybeanProductPage({ params }: ProductPageProps) {
  const product = soybeanProducts.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb Navigation */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-green-700">Home</Link> / 
        <Link href="/products" className="hover:text-green-700 ml-1">Products</Link> / 
        <Link href="/products/soybeans" className="hover:text-green-700 ml-1">Soybeans</Link> / 
        <span className="text-gray-900 ml-1">{product.name}</span>
      </div>

      {/* Back Button */}
      <Link 
        href="/products/soybeans" 
        className="inline-flex items-center text-green-700 mb-6 hover:text-green-800"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Soybean Products
      </Link>

      {/* Product Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            {product.featured && <Badge className="bg-green-700">Featured</Badge>}
          </div>
          
          <p className="text-gray-700 mb-6">{product.fullDescription}</p>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3">Key Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 p-3 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-1">Maturity Period</h3>
              <p className="text-gray-700">{product.maturity}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-1">Yield Potential</h3>
              <p className="text-gray-700">{product.yieldPotential}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-1">Suitable Regions</h3>
              <p className="text-gray-700">{product.regions.join(', ')}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-1">Category</h3>
              <p className="text-gray-700 capitalize">{product.category}</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <Link
              href={`/quote?product=${product.id}`}
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors text-center"
            >
              Request Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors text-center"
            >
              Contact Sales Team
            </Link>            
          </div>
        </div>
      </div>

      {/* Soybean-Specific Growing Recommendations */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Soybean Growing Recommendations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Planting Guidelines for Soybeans</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Optimal planting time: November to December</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Planting depth: 2-4 cm</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Row spacing: 45-60 cm</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Plant spacing: 5-10 cm within rows</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Seeding rate: 80-100 kg/ha</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Soil & Fertilizer Requirements</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Prefers well-drained loamy soils</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Ideal soil pH: 6.0-6.8</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Basal fertilizer: Compound D (200-300 kg/ha)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Inoculate seeds with rhizobium for nitrogen fixation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Phosphorus is critical for good nodulation</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Disease Management</h3>
          <ul className="space-y-2 text-gray-700 grid md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Rotate crops to prevent disease buildup</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Use certified disease-free seeds</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Monitor regularly for red leaf blotch and frog-eye leaf spot</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Apply fungicides preventatively during flowering</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Harvest & Post-Harvest</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Harvest when 95% of pods have turned brown</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Harvest at 15-18% moisture content</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Dry immediately to 12% moisture for storage</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Store in clean, dry conditions to maintain quality</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Other Soybean Varieties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soybeanProducts
            .filter(p => p.id !== product.id)
            .map(relatedProduct => (
              <Link 
                key={relatedProduct.id}
                href={`/products/soybeans/${relatedProduct.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{relatedProduct.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{relatedProduct.shortDescription}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}