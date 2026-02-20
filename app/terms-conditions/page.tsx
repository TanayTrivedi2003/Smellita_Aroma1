import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Smelita Aroma",
  description: "Terms and Conditions for Smelita Aroma - Read our terms of service and usage policies.",
}

export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="mb-8 font-serif text-4xl font-bold text-balance">Terms & Conditions</h1>

      <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
        <p className="text-sm text-muted-foreground">Last updated: January 2, 2026</p>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Agreement to Terms</h2>
          <p className="leading-relaxed">
            By accessing and using the Smelita Aroma website, you accept and agree to be bound by the terms and
            conditions of this agreement. If you do not agree to these terms, please do not use our website or services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Use of Website</h2>
          <p className="leading-relaxed">
            You agree to use our website only for lawful purposes and in a way that does not infringe the rights of
            others. You must not:
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>Use the website in any way that is unlawful or fraudulent</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Transmit any harmful or malicious code</li>
            <li>Collect data from the website using automated means</li>
            <li>Reproduce, duplicate, or copy material from our website without permission</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Product Information</h2>
          <p className="leading-relaxed">
            We strive to provide accurate product descriptions and pricing. However, we do not warrant that product
            descriptions, pricing, or other content is accurate, complete, reliable, or error-free. If a product is not
            as described, your sole remedy is to return it in unused condition.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Pricing and Payment</h2>
          <p className="leading-relaxed">
            All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless otherwise stated.
            We reserve the right to change prices at any time without prior notice. The price applicable will be the
            price at the time of order confirmation.
          </p>
          <p className="leading-relaxed">
            Payment can be made through Cash on Delivery (COD) or other payment methods as available on the website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Order Acceptance</h2>
          <p className="leading-relaxed">
            We reserve the right to refuse or cancel any order for any reason, including but not limited to product
            availability, errors in product information or pricing, or problems identified by our fraud detection
            systems.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Intellectual Property</h2>
          <p className="leading-relaxed">
            All content on this website, including text, graphics, logos, images, and software, is the property of
            Smelita Aroma and is protected by intellectual property laws. You may not reproduce, distribute, or create
            derivative works without our express written permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Product Usage</h2>
          <p className="leading-relaxed">
            Our perfumes and attars are for external use only. Always perform a patch test before use. Discontinue use
            if irritation occurs. Keep away from children and pets. Store in a cool, dry place away from direct
            sunlight.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Limitation of Liability</h2>
          <p className="leading-relaxed">
            To the fullest extent permitted by law, Smelita Aroma shall not be liable for any indirect, incidental,
            special, or consequential damages arising from the use of our products or website. Our total liability shall
            not exceed the purchase price of the product.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Governing Law</h2>
          <p className="leading-relaxed">
            These terms and conditions are governed by the laws of India. Any disputes arising from these terms shall be
            subject to the exclusive jurisdiction of the courts in Kanpur, Uttar Pradesh.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Changes to Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
            to the website. Your continued use of the website after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions about these terms and conditions, please contact us:
          </p>
          <ul className="space-y-2 leading-relaxed">
            <li>Email: info@smelitaaromas.com</li>
            <li>Phone: +91 788 703 7749</li>
            <li>Address: Kanpur, Uttar Pradesh, India - 208014</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
