"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { CheckCircle2, CreditCard, Truck, ShoppingBag } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/lib/cart-context"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart, itemCount } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Clear cart and redirect to success page
    clearCart()
    router.push("/checkout/success")
  }

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
            <p className="mb-8 text-muted-foreground">Please add items to your cart before checking out.</p>
            <Button asChild size="lg">
              <a href="/shop">Continue Shopping</a>
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
        <section className="border-b border-border bg-muted/30 py-8">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 font-serif text-3xl font-bold">Checkout</h1>
            {/* Progress Steps */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                  1
                </div>
                <span className="text-sm font-medium">Shipping</span>
              </div>
              <div className="h-px w-12 bg-border" />
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-border text-sm text-muted-foreground">
                  2
                </div>
                <span className="text-sm text-muted-foreground">Payment</span>
              </div>
              <div className="h-px w-12 bg-border" />
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-border text-sm text-muted-foreground">
                  3
                </div>
                <span className="text-sm text-muted-foreground">Confirm</span>
              </div>
            </div>
          </div>
        </section>

        {/* Checkout Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Left Column - Forms */}
                <div className="space-y-6 lg:col-span-2">
                  {/* Shipping Information */}
                  <Card className="border-border/40">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-serif text-2xl">
                        <Truck className="h-6 w-6 text-accent" />
                        Shipping Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Street address, apartment, suite, etc."
                          required
                        />
                      </div>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Mumbai"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder="Maharashtra"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pincode">Pincode *</Label>
                          <Input
                            id="pincode"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            placeholder="400001"
                            required
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Information */}
                  <Card className="border-border/40">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-serif text-2xl">
                        <CreditCard className="h-6 w-6 text-accent" />
                        Payment Method
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border-2 border-accent bg-accent/5 p-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                              <CreditCard className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="font-semibold">Cash on Delivery</div>
                              <div className="text-sm text-muted-foreground">Pay when you receive your order</div>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          More payment options will be available soon. Currently, we only accept Cash on Delivery for a
                          seamless experience.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-20 border-border/40">
                    <CardHeader>
                      <CardTitle className="font-serif text-2xl">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Order Items */}
                      <div className="space-y-3 border-b border-border pb-4">
                        {items.map((item) => (
                          <div key={item.product.id} className="flex gap-3">
                            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                              <Image
                                src={item.product.image || "/placeholder.svg"}
                                alt={item.product.name}
                                fill
                                className="object-cover object-top"
                                style={{ objectPosition: 'top center' }}
                              />
                              <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                                {item.quantity}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium">{item.product.name}</div>
                              <div className="text-xs text-muted-foreground">{item.product.size}</div>
                              <div className="mt-1 text-sm font-semibold text-accent">
                                ₹{item.product.price * item.quantity}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Price Breakdown */}
                      <div className="space-y-2 border-b border-border pb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Subtotal ({itemCount} items)</span>
                          <span className="font-medium">₹{total}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Shipping</span>
                          <span className="font-medium text-accent">Free</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Tax</span>
                          <span className="font-medium">₹0</span>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="flex justify-between border-b border-border pb-4">
                        <span className="font-serif text-lg font-bold">Total</span>
                        <span className="font-serif text-2xl font-bold text-accent">₹{total}</span>
                      </div>

                      {/* Place Order Button */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary text-primary-foreground"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="mr-2 h-5 w-5" />
                            Place Order
                          </>
                        )}
                      </Button>

                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>• Secure checkout process</p>
                        <p>• Free shipping on all orders</p>
                        <p>• 30-day return policy</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
