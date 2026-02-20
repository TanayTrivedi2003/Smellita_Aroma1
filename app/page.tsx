import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles, Heart, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getFeaturedProducts } from "@/lib/products"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <Image
              src = "images/perfume3.jpeg"
              alt="Luxury perfume collection"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto flex h-full items-center px-4">
            <div className="max-w-2xl space-y-6">
              <h1 className="font-serif text-5xl font-bold leading-tight text-primary-foreground text-balance md:text-6xl">
                Spread the Soulful Smell
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Experience the luxury of traditional Indian perfumes and attars. Handcrafted with the finest ingredients
                for the discerning connoisseur.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/shop">
                    Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-border/40">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <div className="rounded-full bg-accent/10 p-4">
                    <Sparkles className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">Premium Quality</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Sourced from the finest ingredients across India, our fragrances are crafted with utmost care and
                    tradition.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <div className="rounded-full bg-accent/10 p-4">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">Handcrafted</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Each bottle is a labor of love, blended by master perfumers following centuries-old techniques.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <div className="rounded-full bg-accent/10 p-4">
                    <Package className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">Luxury Packaging</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Elegantly packaged in gold and black, each fragrance arrives as a gift ready to enchant.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold text-balance">Featured Collection</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                Discover our most popular fragrances, beloved by connoisseurs for their exceptional quality and lasting
                impression.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.slug}`} className="group">
                  <Card className="overflow-hidden border-border/40 transition-shadow hover:shadow-lg">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover object-top transition-transform group-hover:scale-105"
                        style={{ objectPosition: 'top center' }}
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {product.category}
                      </div>
                      <h3 className="mb-2 font-serif text-lg font-semibold group-hover:text-accent">{product.name}</h3>
                      <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-xl font-bold text-accent">₹{product.price}</span>
                        <span className="text-xs text-muted-foreground">{product.size}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/shop">
                  View All Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
              Experience Luxury Like Never Before
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/90 leading-relaxed">
              Join thousands of satisfied customers who have discovered the magic of authentic Indian perfumery. Each
              fragrance tells a story.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
