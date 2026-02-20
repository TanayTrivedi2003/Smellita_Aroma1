"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Check } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/types"

interface ProductClientProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductClient({ product, relatedProducts }: ProductClientProps) {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = () => {
    addItem(product)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleWhatsAppOrder = () => {
    const message = `Hi, I'm interested in ordering *${product.name}* (${product.size}) - ₹${product.price}. Please provide more details.`
    const whatsappUrl = `https://wa.me/917887037749?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={product.images[selectedImage] || product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover object-top"
                  style={{ objectPosition: 'top center' }}
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index ? "border-accent" : "border-border hover:border-accent/50"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover object-top"
                      style={{ objectPosition: 'top center' }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </div>
                <h1 className="mb-4 font-serif text-4xl font-bold">{product.name}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="font-serif text-4xl font-bold text-accent">₹{product.price}</span>
                <span className="text-sm text-muted-foreground">Size: {product.size}</span>
              </div>

              {/* Fragrance Notes */}
              {(product.notes.top || product.notes.middle || product.notes.base) && (
                <Card className="border-border/40">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-serif text-lg font-semibold">Fragrance Notes</h3>
                    <div className="space-y-3">
                      {product.notes.top && product.notes.top.length > 0 && (
                        <div>
                          <div className="mb-1 text-sm font-medium">Top Notes</div>
                          <div className="text-sm text-muted-foreground">{product.notes.top.join(", ")}</div>
                        </div>
                      )}
                      {product.notes.middle && product.notes.middle.length > 0 && (
                        <div>
                          <div className="mb-1 text-sm font-medium">Middle Notes</div>
                          <div className="text-sm text-muted-foreground">{product.notes.middle.join(", ")}</div>
                        </div>
                      )}
                      {product.notes.base && product.notes.base.length > 0 && (
                        <div>
                          <div className="mb-1 text-sm font-medium">Base Notes</div>
                          <div className="text-sm text-muted-foreground">{product.notes.base.join(", ")}</div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Add to Cart */}
              <div className="space-y-3">
                {product.inStock ? (
                  <>
                    <Button size="lg" className="w-full bg-primary text-primary-foreground" onClick={handleAddToCart}>
                      {addedToCart ? (
                        <>
                          <Check className="mr-2 h-5 w-5" />
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="mr-2 h-5 w-5" />
                          Add to Cart
                        </>
                      )}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                      onClick={handleWhatsAppOrder}
                    >
                      <WhatsAppIcon className="mr-2 h-5 w-5" />
                      Order via WhatsApp
                    </Button>
                  </>
                ) : (
                  <Button size="lg" className="w-full" disabled>
                    Out of Stock
                  </Button>
                )}
                <div className="text-xs text-muted-foreground">SKU: {product.sku}</div>
              </div>

              {/* Product Details */}
              <Card className="border-border/40">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-serif text-lg font-semibold">Product Details</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Handcrafted with premium ingredients</li>
                    <li>• Long-lasting fragrance</li>
                    <li>• Alcohol-free formula</li>
                    <li>• Suitable for all occasions</li>
                    <li>• Elegant packaging perfect for gifting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 font-serif text-3xl font-bold">You May Also Like</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/product/${relatedProduct.slug}`} className="group">
                  <Card className="overflow-hidden border-border/40 transition-shadow hover:shadow-lg">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover object-top transition-transform group-hover:scale-105"
                        style={{ objectPosition: 'top center' }}
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {relatedProduct.category}
                      </div>
                      <h3 className="mb-2 font-serif text-lg font-semibold group-hover:text-accent">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-xl font-bold text-accent">₹{relatedProduct.price}</span>
                        <span className="text-xs text-muted-foreground">{relatedProduct.size}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
