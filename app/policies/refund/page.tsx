import Footer from "@/components/footer"

export default function RefundPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-16">
          <h1 className="mb-8 text-3xl font-bold">Refund Policy</h1>
          <div className="prose max-w-none">
            <h2>Our Refund Policy</h2>
            <p>
              At ACME Store, we want you to be completely satisfied with your purchase. If you're not entirely happy
              with your order, we're here to help.
            </p>

            <h3>Return Eligibility</h3>
            <p>
              You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the
              return shipping costs if the return is a result of our error (you received an incorrect or defective item,
              etc.).
            </p>

            <h3>Return Process</h3>
            <p>
              To initiate a return, please email us at returns@acmestore.com with your order number and details about
              the item(s) you wish to return. We'll provide you with a Return Merchandise Authorization (RMA) number and
              return instructions.
            </p>

            <h3>Refund Timing</h3>
            <p>
              Once we receive your returned item, we'll inspect it and notify you that we've received your returned
              item. We'll immediately notify you on the status of your refund after inspecting the item.
            </p>
            <p>
              If your return is approved, we'll initiate a refund to your credit card (or original method of payment).
              You'll receive the credit within a certain amount of days, depending on your card issuer's policies.
            </p>

            <h3>Items Not Eligible for Returns</h3>
            <ul>
              <li>Items that have been worn, used, or altered</li>
              <li>Intimate apparel and swimwear</li>
              <li>Gift cards</li>
              <li>Downloadable software products</li>
              <li>Some health and personal care items</li>
            </ul>

            <h3>Damaged or Defective Items</h3>
            <p>
              If you receive a damaged or defective item, please contact us immediately at support@acmestore.com. We'll
              work with you to resolve the issue promptly.
            </p>

            <h3>Sale Items</h3>
            <p>Only regular priced items may be refunded. Sale items cannot be refunded.</p>

            <h3>Exchanges</h3>
            <p>
              We're happy to exchange items that meet our return policy criteria. To request an exchange, please follow
              the same process as for returns and specify the item you'd like in exchange.
            </p>

            <h3>Contact Us</h3>
            <p>If you have any questions about our return policy, please contact us at:</p>
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
