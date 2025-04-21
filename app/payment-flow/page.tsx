import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, ShieldCheck, CreditCard, ThumbsUp, DollarSign } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PaymentFlowPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Secure Payment Process
              </h1>
              <p className="max-w-[700px] text-white/80 md:text-xl">
                Our escrow system ensures safe transactions between brands and influencers
              </p>
            </div>
          </div>
        </section>

        {/* Payment Flow Steps */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How Our Payment System Works</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Our secure escrow system protects both brands and influencers throughout the collaboration process.
              </p>
            </div>

            <div className="grid gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-2xl font-bold">Brand Books an Influencer</h3>
                    <p className="text-muted-foreground">
                      After finding the right influencer, the brand selects a package or negotiates a custom price. Once
                      both parties agree on deliverables and pricing, the brand initiates the booking process through
                      our platform.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5" />
                        <span>Select an influencer package or negotiate custom terms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5" />
                        <span>Agree on deliverables, timeline, and price</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5" />
                        <span>Initiate payment through our secure platform</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <Card className="w-full max-w-md overflow-hidden">
                    <div className="bg-brand/10 p-6 flex justify-center">
                      <CreditCard className="h-24 w-24 text-brand" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2">Payment Initiation</h4>
                      <p className="text-muted-foreground mb-4">
                        The brand provides payment details and confirms the full campaign amount (e.g., $500).
                      </p>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">Campaign Total:</span>
                        <span className="text-xl font-bold">$500.00</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Divider with arrow */}
              <div className="flex justify-center">
                <ArrowRight className="h-8 w-8 text-muted-foreground" />
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-2">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand font-bold text-xl">
                      2
                    </div>
                    <h3 className="text-2xl font-bold">Payment Goes to Escrow</h3>
                    <p className="text-muted-foreground">
                      The full payment is securely held in our escrow system, not directly sent to the influencer. This
                      protects the brand's investment while giving the influencer confidence to begin work.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5" />
                        <span>Funds are held securely by InfluenceConnect</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5" />
                        <span>Brand's payment is protected until work is approved</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5" />
                        <span>Influencer receives confirmation and begins work</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-1 flex justify-center">
                  <Card className="w-full max-w-md overflow-hidden">
                    <div className="bg-brand/10 p-6 flex justify-center">
                      <ShieldCheck className="h-24 w-24 text-brand" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2">Secure Escrow</h4>
                      <p className="text-muted-foreground mb-4">
                        The full amount is held securely while the campaign is in progress.
                      </p>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">In Escrow:</span>
                        <span className="text-xl font-bold">$500.00</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Divider with arrow */}
              <div className="flex justify-center">
                <ArrowRight className="h-8 w-8 text-muted-foreground" />
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand font-bold text-xl">
                      3
                    </div>
                    <h3 className="text-2xl font-bold">Completion & Approval</h3>
                    <p className="text-muted-foreground">
                      The influencer creates and submits the content according to the agreed terms. The brand reviews
                      the deliverables and approves the work if it meets expectations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5" />
                        <span>Influencer submits content through the platform</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5" />
                        <span>Brand reviews the deliverables</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5" />
                        <span>Brand approves the work or requests revisions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <Card className="w-full max-w-md overflow-hidden">
                    <div className="bg-brand/10 p-6 flex justify-center">
                      <ThumbsUp className="h-24 w-24 text-brand" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2">Content Approval</h4>
                      <p className="text-muted-foreground mb-4">
                        The brand reviews and approves the influencer's work, confirming it meets requirements.
                      </p>
                      <div className="p-3 bg-muted rounded-lg text-center">
                        <span className="font-medium text-green-600">Content Approved ✓</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Divider with arrow */}
              <div className="flex justify-center">
                <ArrowRight className="h-8 w-8 text-muted-foreground" />
              </div>

              {/* Step 4 */}
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-2">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand font-bold text-xl">
                      4
                    </div>
                    <h3 className="text-2xl font-bold">Commission Deduction & Payout</h3>
                    <p className="text-muted-foreground">
                      Once the work is approved, InfluenceConnect deducts its platform commission and releases the
                      remaining amount to the influencer through their preferred payment method.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5" />
                        <span>Platform fee is deducted (e.g., 20% of $500 = $100)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5" />
                        <span>Remaining amount ($400) is released to the influencer</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5" />
                        <span>Payment is processed via the influencer's preferred method</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-1 flex justify-center">
                  <Card className="w-full max-w-md overflow-hidden">
                    <div className="bg-brand/10 p-6 flex justify-center">
                      <DollarSign className="h-24 w-24 text-brand" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2">Payment Distribution</h4>
                      <p className="text-muted-foreground mb-4">
                        The platform fee is deducted and the remaining amount is sent to the influencer.
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-2 rounded-lg">
                          <span>Total Campaign Amount:</span>
                          <span className="font-medium">$500.00</span>
                        </div>
                        <div className="flex justify-between items-center p-2 rounded-lg">
                          <span>Platform Fee (20%):</span>
                          <span className="font-medium">-$100.00</span>
                        </div>
                        <div className="h-px bg-border my-1"></div>
                        <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                          <span className="font-medium">Influencer Payout:</span>
                          <span className="text-xl font-bold">$400.00</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Benefits of Our Escrow System</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Our payment process is designed to create trust and security for all parties.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-brand/10">
                      <ShieldCheck className="h-8 w-8 text-brand" />
                    </div>
                    <h3 className="text-xl font-bold">Protection for Brands</h3>
                    <p className="text-muted-foreground">
                      Your payment is only released when you're satisfied with the content. If the work doesn't meet
                      expectations, our dispute resolution team will help resolve the issue.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-brand/10">
                      <CheckCircle className="h-8 w-8 text-brand" />
                    </div>
                    <h3 className="text-xl font-bold">Security for Influencers</h3>
                    <p className="text-muted-foreground">
                      Start work with confidence knowing the funds are already secured. Once your content is approved,
                      payment is guaranteed and processed quickly.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-brand/10">
                      <CreditCard className="h-8 w-8 text-brand" />
                    </div>
                    <h3 className="text-xl font-bold">Transparent Fees</h3>
                    <p className="text-muted-foreground">
                      Our platform fee structure is clear and upfront. The percentage varies based on your subscription
                      plan, with premium plans enjoying lower fees.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Supported Payment Methods</h2>
              <p className="max-w-[700px] text-muted-foreground">
                We offer flexible payment options for both brands and influencers.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">For Brands</h3>
                    <p className="text-muted-foreground mb-4">
                      Multiple payment options to fund your influencer marketing campaigns:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand mr-2" />
                        <span>Credit and Debit Cards (Visa, Mastercard, Amex)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand mr-2" />
                        <span>PayPal</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand mr-2" />
                        <span>Bank Transfer (ACH/Wire)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand mr-2" />
                        <span>Invoice Payment (Enterprise plans)</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">For Influencers</h3>
                    <p className="text-muted-foreground mb-4">Choose how you want to receive your earnings:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand mr-2" />
                        <span>Direct Deposit (ACH)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand mr-2" />
                        <span>PayPal</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand mr-2" />
                        <span>Stripe</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand mr-2" />
                        <span>International Wire Transfer</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-brand text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[700px] text-white/80 md:text-xl">
                Join thousands of brands and influencers already using InfluenceConnect to create successful marketing
                campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/signup?type=brand">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90">
                    I'm a Brand
                  </Button>
                </Link>
                <Link href="/signup?type=influencer">
                  <Button size="lg" variant="outline" className="border-white text-white bg-white/20 hover:bg-white/30">
                    I'm an Influencer
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

