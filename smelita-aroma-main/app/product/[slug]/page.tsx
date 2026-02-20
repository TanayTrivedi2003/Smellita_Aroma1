"use client"

import { notFound } from "next/navigation"
import { getProductBySlug, products } from "@/lib/products"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductClient } from "@/components/product-client"

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ProductClient product={product} relatedProducts={relatedProducts} />
      <Footer />
    </div>
  )
}
