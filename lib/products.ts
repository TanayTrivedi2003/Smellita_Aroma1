import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "White Oud",
    slug: "white-oud",
    description:
      "A luxurious blend of pure white oud with hints of citrus and musk. Clean, sophisticated, and perfect for both day and evening wear.",
    price: 2499,
    category: "perfume",
    image: "/images/perfumeman1.jpeg",
    images: [
      "/images/perfumeman1.jpeg",
      "/images/perfumeman2.jpeg",
      "/images/whatsapp-20image-202025-12-27-20at-2010.jpeg",
    ],
    inStock: true,
    featured: true,
    notes: {
      top: ["Bergamot", "White Musk"],
      middle: ["White Oud", "Jasmine"],
      base: ["Sandalwood", "Amber", "Vanilla"],
    },
    size: "50ml",
    sku: "SA-WO-001",
  },
  {
    id: "2",
    name: "Purple Oud",
    slug: "purple-oud",
    description:
      "Rich and mysterious purple oud combined with floral notes. An enchanting fragrance that captivates the senses.",
    price: 2499,
    category: "perfume",
    image: "/images/perfume1.jpeg",
    images: [
      "/images/perfume1.jpeg",
      "/images/perfume2.jpeg",
      "/images/perfume3.jpeg",
    ],
    inStock: true,
    featured: true,
    notes: {
      top: ["Lavender", "Violet"],
      middle: ["Purple Oud", "Rose"],
      base: ["Patchouli", "Musk", "Amber"],
    },
    size: "50ml",
    sku: "SA-PO-002",
  },
  {
    id: "3",
    name: "Texas",
    slug: "texas",
    description:
      "Bold and rugged fragrance inspired by the American West. Warm leather, tobacco, and spices create a masculine scent.",
    price: 2199,
    category: "perfume",
    image: "/images/perfumeman2.jpeg",
    images: [
      "/images/perfumeman2.jpeg",
      "/images/perfumeman1.jpeg",
      "/images/whatsapp-20image-202025-12-27-20at-2010.jpeg",
    ],
    inStock: true,
    featured: true,
    notes: {
      top: ["Bergamot", "Tobacco Leaf"],
      middle: ["Leather", "Cinnamon"],
      base: ["Vanilla", "Tonka Bean", "Cedarwood"],
    },
    size: "50ml",
    sku: "SA-TX-003",
  },
  {
    id: "4",
    name: "Spring",
    slug: "spring",
    description:
      "Fresh and romantic floral bouquet. Light yet captivating, perfect for daily wear and special moments.",
    price: 1899,
    category: "perfume",
    image: "/images/perfume2.jpeg",
    images: [
      "/images/perfume2.jpeg",
      "/images/perfume3.jpeg",
      "/images/perfume1.jpeg",
    ],
    inStock: true,
    featured: true,
    notes: {
      top: ["Peony", "Freesia", "Bergamot"],
      middle: ["Rose", "Jasmine", "Lily"],
      base: ["White Musk", "Sandalwood"],
    },
    size: "50ml",
    sku: "SA-SP-004",
  },
  {
    id: "5",
    name: "Morning Mist",
    slug: "morning-mist",
    description: "Crisp and refreshing scent capturing the essence of early morning dew. Clean and invigorating.",
    price: 1799,
    category: "perfume",
    image: "/images/perfume2.jpeg",
    images: [
      "/images/perfume2.jpeg",
      "/images/perfume1.jpeg",
      "/images/perfume3.jpeg",
    ],
    inStock: true,
    featured: false,
    notes: {
      top: ["Citrus", "Green Tea", "Mint"],
      middle: ["Aquatic Notes", "Lavender"],
      base: ["Musk", "Cedarwood"],
    },
    size: "50ml",
    sku: "SA-MM-005",
  },
  {
    id: "6",
    name: "Vergo",
    slug: "vergo",
    description: "Sophisticated and complex fragrance blend. Perfect for the modern individual who appreciates depth.",
    price: 2299,
    category: "perfume",
    image: "/images/perfumeman1.jpeg",
    images: [
      "/images/perfumeman1.jpeg",
      "/images/perfumeman2.jpeg",
      "/images/whatsapp-20image-202025-12-27-20at-2010.jpeg",
    ],
    inStock: true,
    featured: false,
    notes: {
      top: ["Bergamot", "Black Pepper"],
      middle: ["Oud", "Leather"],
      base: ["Amber", "Patchouli", "Vetiver"],
    },
    size: "50ml",
    sku: "SA-VG-006",
  },
  {
    id: "7",
    name: "Man",
    slug: "man",
    description: "Classic masculine fragrance with woody and spicy notes. Timeless and confident.",
    price: 2099,
    category: "perfume",
    image: "/images/perfumeman2.jpeg",
    images: [
      "/images/perfumeman2.jpeg",
      "/images/perfumeman1.jpeg",
      "/images/whatsapp-20image-202025-12-27-20at-2010.jpeg",
    ],
    inStock: true,
    featured: false,
    notes: {
      top: ["Cardamom", "Ginger"],
      middle: ["Cedarwood", "Sandalwood"],
      base: ["Musk", "Tobacco", "Amber"],
    },
    size: "50ml",
    sku: "SA-MN-007",
  },
  {
    id: "8",
    name: "Luxury Collection Gift Set",
    slug: "luxury-gift-set",
    description: "Curated collection of our finest perfumes presented in an elegant gift box. Perfect for gifting.",
    price: 8999,
    category: "gift-set",
    image: "/images/whatsapp-20image-202025-12-26-20at-206.jpeg",
    images: [
      "/images/whatsapp-20image-202025-12-26-20at-206.jpeg",
      "/images/whatsapp-20image-202025-12-27-20at-2010.jpeg",
      "/images/perfume1.jpeg",
    ],
    inStock: true,
    featured: true,
    notes: {},
    size: "5 x 30ml",
    sku: "SA-LGS-008",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category)
}
