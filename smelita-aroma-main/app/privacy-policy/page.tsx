import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Smelita Aroma",
  description: "Privacy Policy for Smelita Aroma - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="mb-8 font-serif text-4xl font-bold text-balance">Privacy Policy</h1>

      <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
        <p className="text-sm text-muted-foreground">Last updated: January 2, 2026</p>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Introduction</h2>
          <p className="leading-relaxed">
            Welcome to Smelita Aroma. We respect your privacy and are committed to protecting your personal data. This
            privacy policy will inform you about how we look after your personal data when you visit our website and
            tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Information We Collect</h2>
          <p className="leading-relaxed">
            We may collect, use, store and transfer different kinds of personal data about you:
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>Identity Data: name, username or similar identifier</li>
            <li>Contact Data: billing address, delivery address, email address and telephone numbers</li>
            <li>Transaction Data: details about payments and products you have purchased from us</li>
            <li>Technical Data: internet protocol (IP) address, browser type and version, time zone setting</li>
            <li>Usage Data: information about how you use our website and products</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">How We Use Your Information</h2>
          <p className="leading-relaxed">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
            in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>To process and deliver your orders</li>
            <li>To manage payments, fees and charges</li>
            <li>To communicate with you about your orders and inquiries</li>
            <li>To improve our website, products and services</li>
            <li>To send you marketing communications (with your consent)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Data Security</h2>
          <p className="leading-relaxed">
            We have put in place appropriate security measures to prevent your personal data from being accidentally
            lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data
            to those employees and partners who have a business need to know.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Your Rights</h2>
          <p className="leading-relaxed">
            Under certain circumstances, you have rights under data protection laws in relation to your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions about this privacy policy or our privacy practices, please contact us:
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
