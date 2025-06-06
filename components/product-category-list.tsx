import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    id: "maize",
    name: "Maize",
    description: "High-yielding maize varieties with excellent disease resistance",
    image: "/images/maize.jpg",
    varieties: 5,
  },
  {
    id: "wheat",
    name: "Wheat",
    description: "Quality wheat seeds adapted to various ecological zones",
    image: "/images/wheat.jpg",
    varieties: 1,
  },
  {
    id: "soybeans",
    name: "Soybeans",
    description: "Soybean varieties with high protein content and disease resistance",
    image: "/images/soybeans.jpg",
    varieties: 2,
  },
  {
    id: "groundnuts",
    name: "Groundnuts",
    description: "Drought-tolerant groundnut varieties with high pod yield",
    image: "/images/groundnuts.jpg",
    varieties: 1,
  },
  {
    id: "sunflower",
    name: "Sunflower",
    description: "Sunflower seeds with high oil content for various conditions",
    image: "/images/sunflower.jpg",
    varieties: 2,
  },
  {
    id: "cowpeas",
    name: "Cowpeas",
    description: "Early maturing cowpea varieties with resistance to pests and diseases",
    image: "/images/cowpeas.jpg",
    varieties: 2,
  },
  {
    id: "sugarbeans",
    name: "Sugarbeans",
    description: "Drought-tolerant sugarbeans with high yield potential",
    image: "/images/sugarbeans.jpg",
    varieties: 2,
  },
  {
    id: "sorghum",
    name: "Sorghum",
    description: "Sorghum varieties adapted to different regions with good disease tolerance",
    image: "/images/sorghum.jpg",
    varieties: 2,
  },
]

export default function ProductCategoryList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/products/${category.id}`}
          className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative w-1/3">
            <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
          </div>
          <div className="w-2/3 p-4">
            <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{category.description}</p>
            <p className="text-green-700 font-medium">{category.varieties} varieties available</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
