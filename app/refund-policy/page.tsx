import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund Policy | Smelita Aroma",
  description: "Refund Policy for Smelita Aroma - Learn about our return and refund process.",
}

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="mb-8 font-serif text-4xl font-bold text-balance">Refund Policy</h1>

      <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
        <p className="text-sm text-muted-foreground">Last updated: January 2, 2026</p>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Return Eligibility</h2>
          <p className="leading-relaxed">
            At Smelita Aroma, we want you to be completely satisfied with your purchase. Due to the nature of perfume
            products and hygiene considerations, we have specific guidelines for returns and refunds.
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>Returns are accepted within 7 days of delivery</li>
            <li>Products must be unopened and in original sealed packaging</li>
            <li>Products must be unused with all original tags and packaging intact</li>
            <li>Gift sets and promotional items are eligible for return if completely unused</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Non-Returnable Items</h2>
          <p className="leading-relaxed">The following items cannot be returned or refunded:</p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>Opened or used perfume bottles</li>
            <li>Products without original packaging</li>
            <li>Damaged or tampered products</li>
            <li>Custom or personalized orders</li>
            <li>Sale or clearance items (unless defective)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Defective or Damaged Products</h2>
          <p className="leading-relaxed">
            If you receive a defective or damaged product, please contact us immediately at info@smelitaaromas.com with
            photos of the product and packaging. We will arrange for a replacement or full refund at no additional cost
            to you.
          </p>
          <p className="leading-relaxed">
            You must report damaged or defective items within 48 hours of delivery for us to process your claim.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Refund Process</h2>
          <p className="leading-relaxed">Once we receive and inspect your returned item:</p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>We will send you an email notification confirming receipt of your return</li>
            <li>Your refund will be processed within 7-10 business days</li>
            <li>Refunds will be issued to the original payment method</li>
            <li>Shipping charges are non-refundable unless the return is due to our error</li>
            <li>You are responsible for return shipping costs unless the item is defective</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">How to Initiate a Return</h2>
          <p className="leading-relaxed">To start a return:</p>
          <ol className="list-decimal pl-6 space-y-2 leading-relaxed">
            <li>Contact us at info@smelitaaromas.com or +91 788 703 7749</li>
            <li>Provide your order number and reason for return</li>
            <li>Wait for return authorization and instructions</li>
            <li>Pack the item securely in its original packaging</li>
            <li>Ship the item to the address provided</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Exchanges</h2>
          <p className="leading-relaxed">
            We do not offer direct exchanges. If you would like a different product, please return the original item for
            a refund and place a new order for the desired product.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Contact Us</h2>
          <p className="leading-relaxed">If you have any questions about our refund policy, please contact us:</p>
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
