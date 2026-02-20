import Link from "next/link"
import { CheckCircle2, Package, Home } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CheckoutSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              {/* Success Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                <CheckCircle2 className="h-12 w-12 text-accent" />
              </div>

              {/* Success Message */}
              <h1 className="mb-4 font-serif text-4xl font-bold text-balance">Order Placed Successfully!</h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Thank you for your purchase. Your order has been received and is being processed. We'll send you a
                confirmation email shortly.
              </p>

              {/* Order Details Card */}
              <Card className="mb-8 border-border/40">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-center gap-2 text-accent">
                    <Package className="h-5 w-5" />
                    <span className="font-semibold">What's Next?</span>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>1. You'll receive an order confirmation email with your order details</p>
                    <p>2. We'll prepare your luxury fragrances with care</p>
                    <p>3. Your order will be shipped within 2-3 business days</p>
                    <p>4. Track your shipment via the link in your email</p>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground">
                  <Link href="/">
                    <Home className="mr-2 h-5 w-5" />
                    Back to Home
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-12 rounded-lg bg-muted/30 p-6">
                <p className="mb-2 text-sm font-semibold">Need Help?</p>
                <p className="text-sm text-muted-foreground">
                  Contact us at{" "}
                  <a href="mailto:info@smelitaaromas.com" className="text-accent hover:underline">
                    info@smelitaaromas.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+917887037749" className="text-accent hover:underline">
                    +91 788 703 7749
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
