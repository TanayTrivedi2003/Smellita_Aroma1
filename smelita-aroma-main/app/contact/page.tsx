"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 font-serif text-5xl font-bold text-balance">Get in Touch</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              We'd love to hear from you. Whether you have a question about our fragrances, need assistance, or just
              want to share your experience, we're here to help.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-border/40">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="mb-6 font-serif text-2xl font-bold">Send us a Message</h2>

                    {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                          <CheckCircle2 className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="mb-2 font-serif text-xl font-semibold">Message Sent!</h3>
                        <p className="text-muted-foreground">
                          Thank you for contacting us. We'll get back to you soon.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">Your Name *</Label>
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
                            <Label htmlFor="email">Email Address *</Label>
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
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="How can we help you?"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us more about your inquiry..."
                            rows={6}
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-primary text-primary-foreground md:w-auto"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 lg:col-span-1">
                <Card className="border-border/40">
                  <CardContent className="p-6">
                    <h3 className="mb-6 font-serif text-xl font-semibold">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                          <Mail className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <div className="mb-1 font-medium">Email</div>
                          <a
                            href="mailto:info@smelitaaromas.com"
                            className="text-sm text-muted-foreground transition-colors hover:text-accent"
                          >
                            info@smelitaaromas.com
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                          <Phone className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <div className="mb-1 font-medium">Phone</div>
                          <a
                            href="tel:+917887037749"
                            className="text-sm text-muted-foreground transition-colors hover:text-accent"
                          >
                            +91 788 703 7749
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                          <MapPin className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <div className="mb-1 font-medium">Address</div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Kanpur, Uttar Pradesh
                            <br />
                            India - 208014
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/40">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-serif text-xl font-semibold">Business Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/40 bg-accent/5">
                  <CardContent className="p-6">
                    <h3 className="mb-3 font-serif text-xl font-semibold">Quick Response</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters,
                      please call us directly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                Find answers to common questions about our products and services
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Card className="border-border/40">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">How long does shipping take?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We ship within 2-3 business days. Delivery typically takes 5-7 business days depending on your
                    location.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">What is your return policy?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We offer a 30-day return policy. If you're not satisfied with your purchase, contact us for a full
                    refund.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Are your fragrances natural?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, we use premium natural ingredients sourced from across India and beyond. All our attars are
                    alcohol-free.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Do you offer gift wrapping?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All our products come in elegant packaging perfect for gifting. Premium gift sets include luxury
                    boxes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
