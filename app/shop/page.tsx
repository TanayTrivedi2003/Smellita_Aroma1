"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/products"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  const categories = [
    { value: "all", label: "All Products" },
    { value: "attar", label: "Attars" },
    { value: "perfume", label: "Perfumes" },
    { value: "gift-set", label: "Gift Sets" },
  ]

  const handleWhatsAppOrder = (product: any) => {
    const message = `Hi, I'm interested in ordering *${product.name}* (${product.size}) - ₹${product.price}. Please provide more details.`
    const whatsappUrl = `https://wa.me/917887037749?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 font-serif text-4xl font-bold text-balance md:text-5xl">Our Collection</h1>
            <p className="max-w-2xl text-muted-foreground leading-relaxed">
              Explore our curated selection of premium perfumes and traditional attars, each crafted with care and
              passion.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="border-b border-border bg-background py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className={
                    selectedCategory === category.value ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 text-sm text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden border-border/40 transition-shadow hover:shadow-lg">
                  <Link href={`/product/${product.slug}`}>
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover object-top transition-transform hover:scale-105"
                        style={{ objectPosition: 'top center' }}
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                          <span className="rounded bg-destructive px-3 py-1 text-sm font-semibold text-destructive-foreground">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <div className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {product.category}
                    </div>
                    <h3 className="mb-2 font-serif text-lg font-semibold hover:text-accent">{product.name}</h3>
                    <p className="mb-3 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-serif text-xl font-bold text-accent">₹{product.price}</span>
                      <span className="text-xs text-muted-foreground">{product.size}</span>
                    </div>
                    {product.inStock && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                        onClick={(e) => {
                          e.preventDefault()
                          handleWhatsAppOrder(product)
                        }}
                      >
                        <WhatsAppIcon className="mr-2 h-4 w-4" />
                        Order on WhatsApp
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-muted-foreground">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
