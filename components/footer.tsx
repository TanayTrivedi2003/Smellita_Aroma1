"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo-amit.png" alt="Smelita Aroma" width={40} height={40} className="h-10 w-auto" />
              <span className="font-serif text-xl font-semibold">Smelita Aroma</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Spread the Soulful Smell. Experience luxury through our handcrafted perfumes and traditional attars.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-muted-foreground transition-colors hover:text-accent">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-accent">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=zr65x0r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-accent"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open('https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=zr65x0r', '_blank', 'noopener,noreferrer')
                  }}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground transition-colors hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-muted-foreground transition-colors hover:text-accent">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-muted-foreground transition-colors hover:text-accent">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-muted-foreground transition-colors hover:text-accent">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 788 703 7749</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@smelitaaromas.com</span>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=zr65x0r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-accent"
                  aria-label="Follow us on Instagram"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open('https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=zr65x0r', '_blank', 'noopener,noreferrer')
                  }}
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground transition-colors hover:text-accent">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BrandMate Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
