import type { Product } from "@/lib/types"

export const maizeProducts: Product[] = [
  {
    id: "zs263",
    name: "ZS263",
    category: "maize",
    shortDescription: "An exceptional new early maturing variety which takes 120-125 days.",
    fullDescription:
      "ZS263 is an exceptional new early maturing variety which takes 120-125 days. It is suitable for low to medium potential areas, though it can be grown as a late crop in high potential areas. This variety has good disease tolerance, including Grey Leaf Spot, Maize Streak Virus and Leaf Blight. It also has good levels of drought and low nitrogen tolerance.",
    maturity: "120-125 days",
    yieldPotential: "10t/ha",
    features: ["Early maturing variety", "Good disease tolerance", "Drought tolerant", "Low nitrogen tolerance"],
    regions: ["Low potential areas", "Medium potential areas", "High potential areas (late crop)"],
    image: "/images/maize-zs263.jpg",
    featured: true,
  },
  {
    id: "zs265a",
    name: "ZS265A",
    category: "maize",
    shortDescription: "Multi-cobbing white hybrid maize, medium maturing, 130 days.",
    fullDescription:
      "ZS265A is a multi-cobbing white hybrid maize with medium maturity, taking 130 days to reach maturity. It is an adaptable variety suitable for all maize growing areas. This variety performs extremely well under low fertility conditions and drought prone areas and can be produced in high potential areas. It has good tolerance to Maize Streak Virus, Grey Leaf Spot, Northern Leaf Blight and Common Rust.",
    maturity: "130 days",
    yieldPotential: "12t/ha",
    features: [
      "Multi-cobbing white hybrid",
      "Adaptable to all maize growing areas",
      "Performs well under low fertility conditions",
      "Good disease tolerance",
    ],
    regions: ["All maize growing areas", "Drought prone areas", "High potential areas"],
    image: "/images/maize-zs265a.jpg",
    featured: false,
  },
  {
    id: "zs269",
    name: "ZS269",
    category: "maize",
    shortDescription: "Drought tolerant hybrid maize, white medium maturity three-way hybrid.",
    fullDescription:
      "ZS269 is a drought tolerant white medium maturity three-way hybrid. It has good tolerance to maize streak virus, GLS, northern leaf blight, common rust and ear rots. This variety is suitable for production in all country's agro-ecological zones.",
    maturity: "Medium maturity",
    yieldPotential: "9-12t/ha",
    features: [
      "Drought tolerant",
      "White medium maturity three-way hybrid",
      "Good disease tolerance",
      "Suitable for all agro-ecological zones",
    ],
    regions: ["All country's agro-ecological zones"],
    image: "/images/maize-zs269.jpg",
    featured: true,
  },
  {
    id: "zs248a",
    name: "ZS248A",
    category: "maize",
    shortDescription: "Early to medium maturity, requiring 130-138 days to reach maturity.",
    fullDescription:
      "ZS248A is an early to medium maturity variety, requiring 130-138 days to reach maturity. It is drought tolerant and pest and disease tolerant. This variety features multiple cobbing, with an average of 2-3 cobs per plant, resulting in high yield potential of 7 to 10 t/ha.",
    maturity: "130-138 days",
    yieldPotential: "7-10t/ha",
    features: [
      "Early to medium maturity",
      "Drought tolerant",
      "Pest and disease tolerant",
      "Multiple cobbing (2-3 cobs per plant)",
    ],
    regions: ["All regions"],
    image: "/images/maize-zs248a.jpg",
    featured: false,
  },
  {
    id: "opv-zm-521",
    name: "OPV ZM 521",
    category: "maize",
    shortDescription: "Early maturing white Open Pollinated Variety (OPV) taking 120 to 130 days to maturity.",
    fullDescription:
      "OPV ZM 521 is an early maturing white Open Pollinated Variety (OPV) that takes 120 to 130 days to maturity. It excels under drought and low fertility conditions and is widely adapted to Natural Regions IIb, III and IV. This variety has good Grey Leaf Spot (GLS) tolerance.",
    maturity: "120-130 days",
    yieldPotential: "4-7t/ha",
    features: [
      "Early maturing white OPV",
      "Excels under drought and low fertility conditions",
      "Good Grey Leaf Spot tolerance",
      "Widely adapted to multiple regions",
    ],
    regions: ["Natural Region IIb", "Natural Region III", "Natural Region IV"],
    image: "/images/maize-opv-zm-521.jpg",
    featured: false,
  },
]

export const wheatProducts: Product[] = [
  {
    id: "ncema",
    name: "NCEMA",
    category: "wheat",
    shortDescription: "High yielding, large grain, semi dwarf (81cm) variety with semi erect growth habit.",
    fullDescription:
      "NCEMA is a high yielding, large grain, semi dwarf (81cm) variety with semi erect growth habit. It is an early to medium variety taking approximately 136 days in Highveld, 120 days in Middleveld, and 109 days in Lowveld. This variety features large grain size with an average thousand grain weight of 46 grams and grain protein content of 11.4%. It has good disease resistance qualities to Leaf Rust, Stem Rust and Powdery Mildew.",
    maturity: "109-136 days (region dependent)",
    yieldPotential: "6-10t/ha (region dependent)",
    features: [
      "High yielding, large grain variety",
      "Semi dwarf (81cm) with semi erect growth habit",
      "Large grain size (46g per thousand grains)",
      "11.4% grain protein content",
      "Good disease resistance to Leaf Rust, Stem Rust and Powdery Mildew",
    ],
    regions: ["Highveld", "Middleveld", "Lowveld"],
    image: "/images/wheat-ncema.jpg",
    featured: true,
  },

]

export const soybeanProducts: Product[] = [
  {
    id: "bimha",
    name: "BIMHA",
    category: "soybeans",
    shortDescription: "Determinate broad-leafed soybean variety with high yields and excellent disease resistance.",
    fullDescription:
      "BIMHA is a determinate broad-leafed soybean variety recommended for grain production in all soybean growing areas. It features large yellow seeds with yellow hilum and offers high yields and grades. This variety has acceptable resistance to red leaf blotch, downy mildew, and bacterial blight, with moderate resistance to frog-eye leaf spot.",
    maturity: "110-120 days",
    yieldPotential: "3-4 t/ha",
    features: [
      "Determinate broad-leafed variety",
      "Large yellow seeds with yellow hilum",
      "Resistant to red leaf blotch, downy mildew, and bacterial blight",
      "Moderately resistant to frog-eye leaf spot",
      "High yields and excellent grades"
    ],
    regions: ["All soybean growing areas"],
    image: "/images/soybeans-bimha.jpg",
    featured: true,
  },
  {
    id: "mhofu",
    name: "MHOFU",
    category: "soybeans",
    shortDescription: "Broad-leafed determinate variety suitable for high, middle and lowveld areas.",
    fullDescription:
      "MHOFU is a broad-leafed determinate soybean variety specifically bred for grain production. It is suitable for high, middle and lowveld areas and matures in up to 126 days with good pod clearance from the ground. This variety shows moderate levels of resistance to leaf spot, red leaf blotch and bacterial blight, making it a reliable choice for various growing conditions.",
    maturity: "126 days",
    yieldPotential: "3-4 t/ha",
    features: [
      "Bred for grain production",
      "Good pod clearance from ground",
      "Moderate resistance to leaf spot, red leaf blotch and bacterial blight",
      "Suitable for Highveld, Middleveld and Lowveld",
      "Consistent high yields"
    ],
    regions: ["Highveld", "Middleveld", "Lowveld"],
    image: "/images/soybeans-mhofu.jpg",
    featured: true,
  },
];

export const groundnutProducts: Product[] = [
  {
    id: "ilanda",
    name: "Ilanda",
    category: "groundnuts",
    shortDescription: "Short-season groundnut variety with high pod yield potential.",
    fullDescription:
      "Ilanda is a short-season groundnut variety that matures in 90-100 days in lowveld areas and 100-120 days in middle/highveld regions. It features an erect/lax bunch growth habit with moderate tolerance to leaf spot diseases. This variety has no seed dormancy and is recommended for rain-fed production in warmer and drier areas of the country. Ilanda delivers high pod yields of up to 4t/ha and kernel yields of 2.8t/ha.",
    maturity: "90-120 days (region dependent)",
    yieldPotential: "4t/ha (pod yield), 2.8t/ha (kernel yield)",
    features: [
      "Short-season variety",
      "Erect/lax bunch growth habit",
      "Moderate tolerance to leaf spot diseases",
      "No seed dormancy",
      "High pod and kernel yields"
    ],
    regions: ["Lowveld", "Middleveld", "Highveld"],
    image: "/images/groundnuts-ilanda.jpg",
    featured: true,
  },
  // Add more groundnut varieties here as needed
];




// Add more product categories as needed
