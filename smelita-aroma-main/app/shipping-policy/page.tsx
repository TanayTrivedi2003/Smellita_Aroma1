import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping Policy | Smelita Aroma",
  description: "Shipping Policy for Smelita Aroma - Learn about our shipping rates, delivery times, and process.",
}

export default function ShippingPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="mb-8 font-serif text-4xl font-bold text-balance">Shipping Policy</h1>

      <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
        <p className="text-sm text-muted-foreground">Last updated: January 2, 2026</p>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Shipping Coverage</h2>
          <p className="leading-relaxed">
            We currently ship to all locations within India. For international shipping inquiries, please contact us at
            info@smelitaaromas.com and we will do our best to accommodate your request.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Shipping Rates</h2>
          <p className="leading-relaxed">
            Shipping charges are calculated based on the delivery location and order value:
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>Orders above ₹999: Free shipping across India</li>
            <li>Orders below ₹999: Standard shipping charges apply (₹50-₹100 depending on location)</li>
            <li>Express delivery available for additional charges</li>
            <li>Cash on Delivery available with nominal charges</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Delivery Timeline</h2>
          <p className="leading-relaxed">Estimated delivery times from order confirmation:</p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>Metro cities: 3-5 business days</li>
            <li>Major cities: 5-7 business days</li>
            <li>Other locations: 7-10 business days</li>
            <li>Remote areas: 10-15 business days</li>
          </ul>
          <p className="leading-relaxed">
            Please note that delivery times are estimates and may vary during peak seasons, festivals, or due to
            unforeseen circumstances.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Order Processing</h2>
          <p className="leading-relaxed">
            Orders are processed within 1-2 business days (excluding weekends and holidays). You will receive a
            confirmation email with tracking information once your order has been dispatched.
          </p>
          <p className="leading-relaxed">
            Orders placed on weekends or public holidays will be processed on the next business day.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Order Tracking</h2>
          <p className="leading-relaxed">
            Once your order is shipped, you will receive a tracking number via email and SMS. You can track your order
            status using this tracking number on our courier partner's website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Packaging</h2>
          <p className="leading-relaxed">
            All products are carefully packaged to ensure they reach you in perfect condition. We use secure,
            eco-friendly packaging materials to protect your fragrances during transit. Each bottle is wrapped
            individually and placed in a cushioned box.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Delivery Issues</h2>
          <p className="leading-relaxed">If you face any delivery issues:</p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>Package not received: Contact us within 7 days of expected delivery</li>
            <li>Damaged package: Refuse delivery and contact us immediately with photos</li>
            <li>Incorrect address: Once shipped, address cannot be changed. Ensure accuracy at checkout</li>
            <li>Failed delivery attempts: Courier will make 2-3 delivery attempts before returning</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Undeliverable Orders</h2>
          <p className="leading-relaxed">
            If an order is returned to us as undeliverable due to incorrect address, refused delivery, or multiple
            failed delivery attempts, we will contact you to arrange re-shipment. Re-shipment charges may apply.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Contact Us</h2>
          <p className="leading-relaxed">For shipping-related inquiries, please contact us:</p>
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
