"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { items, updateQuantity, removeItem, total, itemCount } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="container mx-auto px-4 py-16 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="mb-4 font-serif text-3xl font-bold">Your Cart is Empty</h1>
            <p className="mb-8 text-muted-foreground">Looks like you haven't added any items to your cart yet.</p>
            <Button asChild size="lg">
              <Link href="/shop">
                Continue Shopping <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-2 font-serif text-4xl font-bold">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
            </p>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Cart Items */}
              <div className="space-y-4 lg:col-span-2">
                {items.map((item) => (
                  <Card key={item.product.id} className="overflow-hidden border-border/40">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <Link href={`/product/${item.product.slug}`} className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded">
                          <Image
                            src={item.product.image || "/placeholder.svg"}
                            alt={item.product.name}
                            fill
                            className="object-cover object-top"
                            style={{ objectPosition: 'top center' }}
                          />
                        </Link>

                        {/* Product Info */}
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <Link
                              href={`/product/${item.product.slug}`}
                              className="font-serif text-lg font-semibold hover:text-accent"
                            >
                              {item.product.name}
                            </Link>
                            <div className="mt-1 text-sm text-muted-foreground">
                              {item.product.category} • {item.product.size}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                                <span className="sr-only">Decrease quantity</span>
                              </Button>
                              <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                                <span className="sr-only">Increase quantity</span>
                              </Button>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-4">
                              <span className="font-serif text-lg font-bold text-accent">
                                ₹{item.product.price * item.quantity}
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                                onClick={() => removeItem(item.product.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Remove item</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-20 border-border/40">
                  <CardContent className="p-6">
                    <h2 className="mb-6 font-serif text-2xl font-bold">Order Summary</h2>

                    <div className="space-y-4 border-b border-border pb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">₹{total}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="font-medium text-accent">Free</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax</span>
                        <span className="font-medium">Calculated at checkout</span>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between border-b border-border pb-4">
                      <span className="font-serif text-lg font-bold">Total</span>
                      <span className="font-serif text-2xl font-bold text-accent">₹{total}</span>
                    </div>

                    <div className="mt-6 space-y-3">
                      <Button asChild size="lg" className="w-full bg-primary text-primary-foreground">
                        <Link href="/checkout">
                          Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                        <Link href="/shop">Continue Shopping</Link>
                      </Button>
                    </div>

                    <div className="mt-6 space-y-2 text-xs text-muted-foreground">
                      <p>• Free shipping on all orders</p>
                      <p>• Secure payment processing</p>
                      <p>• 30-day return policy</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
