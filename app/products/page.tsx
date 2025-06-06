import type { Metadata } from "next"
import ProductCategoryList from "@/components/product-category-list"
import ProductFilter from "@/components/product-filter"

export const metadata: Metadata = {
  title: "Products | ARDA Seeds",
  description:
    "Browse our complete catalog of high-quality agricultural seeds including maize, wheat, soybeans, groundnuts, and more.",
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Our Products</h1>
      <p className="text-gray-600 mb-8">Browse our complete catalog of high-quality agricultural seeds</p>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <ProductFilter />
        </div>
        <div className="lg:w-3/4">
          <ProductCategoryList />
        </div>
      </div>
    </div>
  )
}
