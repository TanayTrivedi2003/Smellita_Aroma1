import Image from "next/image"
import { Sparkles, Heart, Award, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-20">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/traditional-perfume-making-process.jpg"
              alt="Traditional perfume making"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="mb-4 font-serif text-5xl font-bold text-primary-foreground text-balance">Our Story</h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
              Crafting luxury fragrances with tradition, passion, and soul
            </p>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-serif text-4xl font-bold text-balance">Spread the Soulful Smell</h2>
                <div className="mx-auto h-1 w-20 bg-accent" />
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Smelita Aroma was born from a deep passion for traditional Indian perfumery and a desire to share the
                  magic of authentic fragrances with the world. Our journey began with a simple belief: that every scent
                  tells a story, and every story deserves to be told with excellence.
                </p>
                <p>
                  Drawing inspiration from centuries-old attar-making traditions, we combine time-honored techniques
                  with modern sensibilities to create fragrances that are both timeless and contemporary. Each bottle is
                  a testament to our commitment to quality, authenticity, and the art of perfumery.
                </p>
                <p>
                  Our master perfumers carefully source the finest ingredients from across India and beyond - from the
                  precious oud of Assam to the delicate roses of Bulgaria, from the sacred sandalwood of Mysore to the
                  golden saffron of Kashmir. Every ingredient is chosen for its exceptional quality and aromatic
                  profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold">Our Values</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border/40 text-center">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Sparkles className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-semibold">Quality First</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We never compromise on quality. Every ingredient is carefully selected and every fragrance is
                    meticulously crafted.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40 text-center">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-semibold">Handcrafted</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Each fragrance is a labor of love, handcrafted by skilled artisans following traditional methods.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40 text-center">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-semibold">Authenticity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We honor ancient traditions while creating fragrances that resonate with modern sensibilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40 text-center">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-semibold">Customer First</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your satisfaction is our priority. We're committed to providing exceptional service and support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Centered Logo Image */}
              <div className="mb-12 flex justify-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-lg md:h-80 md:w-80">
                  <Image
                    src="/images/logo-amit.png"
                    alt="Smelita Aroma Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Centered Content */}
              <div className="text-center">
                <h2 className="mb-4 font-serif text-4xl font-bold text-balance">The Art of Perfumery</h2>
                <div className="mx-auto mb-6 h-1 w-20 bg-accent" />
                <div className="mx-auto max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Creating a perfect fragrance is an art that requires patience, skill, and an intimate understanding
                    of aromatics. Our master perfumers spend years perfecting their craft, learning to blend notes in
                    harmony and balance.
                  </p>
                  <p>
                    Each fragrance goes through multiple stages of development - from concept to creation, from testing
                    to refinement. We believe that rushing this process would compromise the integrity of our products,
                    so we take all the time necessary to ensure perfection.
                  </p>
                  <p>
                    The result is a collection of fragrances that not only smell exquisite but also tell a story - of
                    tradition, of craftsmanship, and of the timeless beauty of natural aromatics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance">Experience Our Fragrances</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground leading-relaxed">
              Discover the perfect scent that speaks to your soul. Explore our collection and find your signature
              fragrance.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Collection
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
