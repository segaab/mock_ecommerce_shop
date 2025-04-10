import Link from "next/link"
import { ArrowLeft, ShoppingBag } from "lucide-react"

import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ShippingPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6" />
              <span className="font-bold inline-block">ACME Store</span>
            </Link>
            <MainNav />
          </div>
          <div className="flex items-center gap-4">
            <Link href="/checkout">
              <Button variant="outline" size="icon">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:py-12">
          <div className="mb-8">
            <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="mt-4 text-3xl font-bold">Shipping Policy</h1>
          </div>

          <div className="prose max-w-none">
            <h2>Our Shipping Policy</h2>
            <p>
              At ACME Store, we strive to deliver your orders as quickly and efficiently as possible. Please review our
              shipping policies below.
            </p>

            <h3>Processing Time</h3>
            <p>
              All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your
              order confirmation email. You will receive another notification when your order has shipped.
            </p>

            <h3>Shipping Methods & Delivery Times</h3>
            <p>We offer the following shipping options:</p>
            <ul>
              <li>
                <strong>Standard Shipping:</strong> 3-5 business days
              </li>
              <li>
                <strong>Express Shipping:</strong> 2-3 business days
              </li>
              <li>
                <strong>Next Day Shipping:</strong> 1 business day (order must be placed before 12pm EST)
              </li>
            </ul>

            <h3>Shipping Rates</h3>
            <p>Our shipping rates are as follows:</p>
            <ul>
              <li>
                <strong>Orders under $50:</strong> $5.99 for Standard Shipping
              </li>
              <li>
                <strong>Orders over $50:</strong> FREE Standard Shipping
              </li>
              <li>
                <strong>Express Shipping:</strong> $12.99
              </li>
              <li>
                <strong>Next Day Shipping:</strong> $24.99
              </li>
            </ul>

            <h3>International Shipping</h3>
            <p>We currently ship to the following countries:</p>
            <ul>
              <li>Canada</li>
              <li>United Kingdom</li>
              <li>Australia</li>
              <li>European Union countries</li>
            </ul>
            <p>
              International shipping rates vary by country and order value. Delivery times typically range from 7-14
              business days. Please note that customers are responsible for all duties, taxes, and customs fees for
              international shipments.
            </p>

            <h3>Tracking Information</h3>
            <p>
              Once your order ships, you will receive a shipping confirmation email with a tracking number. You can
              track your order by clicking the tracking link in the email or entering the tracking number on the
              carrier's website.
            </p>

            <h3>Shipping Delays</h3>
            <p>
              While we strive to deliver all orders on time, occasionally delays may occur due to weather conditions,
              carrier delays, or other unforeseen circumstances. We appreciate your understanding in these situations.
            </p>

            <h3>Lost or Damaged Packages</h3>
            <p>
              If your package appears to be lost or damaged during transit, please contact our customer service team at
              support@acmestore.com within 7 days of the expected delivery date. We'll work with the shipping carrier to
              resolve the issue.
            </p>

            <h3>Contact Us</h3>
            <p>If you have any questions about our shipping policy, please contact us at:</p>
            <p>
              Email: support@acmestore.com
              <br />
              Phone: (555) 123-4567
              <br />
              Hours: Monday-Friday, 9am-5pm EST
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
