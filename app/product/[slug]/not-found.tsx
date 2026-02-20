import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold">Product Not Found</h1>
          <p className="mb-8 text-muted-foreground">Sorry, we couldn't find the product you're looking for.</p>
          <Button asChild size="lg">
            <Link href="/shop">Back to Shop</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
