import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Search,
  MessageSquare,
  CreditCard,
  BarChart3,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  DollarSign,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                How InfluenceConnect Works
              </h1>
              <p className="max-w-[700px] text-white/80 md:text-xl">
                Our platform makes it easy to connect brands with influencers for successful marketing campaigns. Learn
                how to get started in just a few simple steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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

        {/* Tabs Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="brands" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="brands">For Brands</TabsTrigger>
                  <TabsTrigger value="influencers">For Influencers</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="brands" className="space-y-12">
                <div className="grid gap-8 md:grid-cols-3 md:gap-12">
                  <Card className="relative overflow-hidden border-brand/20">
                    <div className="absolute top-0 left-0 h-1 w-full bg-brand"></div>
                    <CardContent className="pt-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                        <Users className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">1. Create Your Brand Profile</h3>
                      <p className="mt-2 text-muted-foreground">
                        Sign up and create a detailed brand profile. Add your industry, target audience, and campaign
                        goals to help us match you with the right influencers.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="relative overflow-hidden border-brand/20">
                    <div className="absolute top-0 left-0 h-1 w-full bg-brand"></div>
                    <CardContent className="pt-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                        <Search className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">2. Discover Influencers</h3>
                      <p className="mt-2 text-muted-foreground">
                        Browse our marketplace of verified influencers. Filter by niche, audience size, engagement
                        rates, and more to find the perfect match for your campaign.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="relative overflow-hidden border-brand/20">
                    <div className="absolute top-0 left-0 h-1 w-full bg-brand"></div>
                    <CardContent className="pt-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                        <MessageSquare className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">3. Connect & Collaborate</h3>
                      <p className="mt-2 text-muted-foreground">
                        Reach out to influencers directly through our platform. Discuss campaign details, negotiate
                        terms, and build relationships with creators who align with your brand.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="relative overflow-hidden border-brand/20">
                    <div className="absolute top-0 left-0 h-1 w-full bg-brand"></div>
                    <CardContent className="pt-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                        <ShieldCheck className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">4. Secure Payment</h3>
                      <p className="mt-2 text-muted-foreground">
                        Once you've agreed on deliverables, use our secure escrow payment system. Your payment is held
                        safely until you approve the completed work, protecting both parties.
                      </p>
                      <div className="mt-2">
                        <Link href="/payment-flow" className="text-sm text-brand hover:underline">
                          Learn about our payment process →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="relative overflow-hidden border-brand/20">
                    <div className="absolute top-0 left-0 h-1 w-full bg-brand"></div>
                    <CardContent className="pt-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                        <BarChart3 className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">5. Track Performance</h3>
                      <p className="mt-2 text-muted-foreground">
                        Monitor campaign performance with our analytics dashboard. Track engagement, reach, conversions,
                        and ROI to measure the success of your influencer partnerships.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="relative overflow-hidden border-brand/20">
                    <div className="absolute top-0 left-0 h-1 w-full bg-brand"></div>
                    <CardContent className="pt-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                        <CheckCircle className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">6. Build Long-term Relationships</h3>
                      <p className="mt-2 text-muted-foreground">
                        Leave reviews, build your network, and develop ongoing relationships with your top-performing
                        influencers for future campaigns and brand ambassadorships.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mx-auto max-w-3xl rounded-lg bg-muted p-6 md:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Ready to find the perfect influencers?</h3>
                    <p className="text-muted-foreground">
                      Join thousands of brands who have successfully launched influencer marketing campaigns through our
                      platform.
                    </p>
                    <Link href="/signup?type=brand">
                      <Button className="bg-brand hover:bg-brand-light text-white">
                        Create Brand Account
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="influencers" className="space-y-12">
                <div className="grid gap-8 md:grid-cols-3 md:gap-12">
                  <Card className="relative overflow-hidden border-brand/20">
                    <div className="absolute top-0 left-0 h-1 w-full bg-brand"></div>
                    <CardContent className="pt-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                        <Users className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">1. Create Your Profile</h3>
                      <p className="mt-2 text-muted-foreground">
                        Sign up and build your influencer profile. Showcase your niche, audience demographics,
                        engagement rates, and previous brand collaborations to attract potential clients.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="relative overflow-hidden border-brand/20">
                    <div className="absolute top-0 left-0 h-1 w-full bg-brand"></div>
                    <CardContent className="pt-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                        <CreditCard className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">2. Set Your Packages</h3>
                      <p className="mt-2 text-muted-foreground">
                        Create custom service packages with clear pricing. Define what you offer across different
                        platforms, from single posts to full campaigns, making it easy for brands to work with you.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="relative overflow-hidden border-brand/20">
                    <div className="absolute top-0 left-0 h-1 w-full bg-brand"></div>
                    <CardContent className="pt-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                        <Search className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">3. Get Discovered</h3>
                      <p className="mt-2 text-muted-foreground">
                        Our algorithm matches you with relevant brands based on your profile. Brands actively searching
                        for influencers in your niche will discover your profile in our marketplace.
                      </p>
                      <div className="mt-2">
                        <Link href="/featured-listings" className="text-sm text-brand hover:underline">
                          Boost visibility with featured listings →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="relative overflow-hidden border-brand/20">
                    <div className="absolute top-0 left-0 h-1 w-full bg-brand"></div>
                    <CardContent className="pt-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                        <MessageSquare className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">4. Receive & Negotiate Offers</h3>
                      <p className="mt-2 text-muted-foreground">
                        Brands will reach out with collaboration opportunities. Review offers, discuss campaign details,
                        and negotiate terms through our secure messaging system.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="relative overflow-hidden border-brand/20">
                    <div className="absolute top-0 left-0 h-1 w-full bg-brand"></div>
                    <CardContent className="pt-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                        <CheckCircle className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">5. Deliver Content</h3>
                      <p className="mt-2 text-muted-foreground">
                        Once terms are agreed upon, create and deliver content according to the campaign brief. Use our
                        platform to share drafts, get approval, and track deliverables.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="relative overflow-hidden border-brand/20">
                    <div className="absolute top-0 left-0 h-1 w-full bg-brand"></div>
                    <CardContent className="pt-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                        <CreditCard className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">6. Get Paid Securely</h3>
                      <p className="mt-2 text-muted-foreground">
                        Receive payment through our secure escrow system once the campaign is completed and approved.
                        Build your reputation with reviews and grow your influencer business.
                      </p>
                      <div className="mt-2">
                        <Link href="/payment-flow" className="text-sm text-brand hover:underline">
                          Learn about our payment process →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mx-auto max-w-3xl rounded-lg bg-muted p-6 md:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Ready to grow your influencer career?</h3>
                    <p className="text-muted-foreground">
                      Join thousands of influencers who have found brand partnerships and grown their business through
                      our platform.
                    </p>
                    <Link href="/signup?type=influencer">
                      <Button className="bg-brand hover:bg-brand-light text-white">
                        Create Influencer Account
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Platform Features */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Platform Features</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                InfluenceConnect offers powerful tools for both brands and influencers to make collaboration seamless.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <Search className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold">Advanced Search & Filtering</h3>
                <p className="mt-2 text-muted-foreground">
                  Find exactly what you're looking for with powerful search filters for niche, audience demographics,
                  location, and more.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <MessageSquare className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold">Secure Messaging</h3>
                <p className="mt-2 text-muted-foreground">
                  Communicate directly with brands or influencers through our encrypted messaging system to discuss
                  campaign details.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <ShieldCheck className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold">Secure Escrow Payments</h3>
                <p className="mt-2 text-muted-foreground">
                  Our escrow system ensures that payments are secure and only released when both parties are satisfied
                  with the deliverables.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <BarChart3 className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                <p className="mt-2 text-muted-foreground">
                  Track campaign performance, engagement metrics, and ROI with our comprehensive analytics tools.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <DollarSign className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold">Affiliate Marketing Tools</h3>
                <p className="mt-2 text-muted-foreground">
                  Generate additional revenue with our affiliate marketing system. Brands pay commission on sales driven
                  by influencer content.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <Users className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold">Managed Campaigns</h3>
                <p className="mt-2 text-muted-foreground">
                  Our white-glove service handles every aspect of your influencer campaign, from strategy to execution
                  and reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Find answers to common questions about using InfluenceConnect.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I get started as a brand?</AccordionTrigger>
                  <AccordionContent>
                    Simply sign up for a brand account, complete your profile with information about your company and
                    campaign goals, and start browsing our marketplace of influencers. You can filter by niche, audience
                    size, engagement rates, and more to find the perfect match for your campaign.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I get started as an influencer?</AccordionTrigger>
                  <AccordionContent>
                    Create an influencer account, build a detailed profile showcasing your niche, audience demographics,
                    and previous work. Set up your service packages with clear pricing, and brands will be able to
                    discover you through our marketplace or our matching algorithm.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How does the payment system work?</AccordionTrigger>
                  <AccordionContent>
                    We use a secure escrow system. When a brand and influencer agree on a campaign, the brand deposits
                    the payment into escrow. Once the campaign is completed successfully and the brand approves the
                    work, the funds are released to the influencer minus our platform fee. This protects both parties
                    and ensures fair transactions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What fees does InfluenceConnect charge?</AccordionTrigger>
                  <AccordionContent>
                    InfluenceConnect charges a platform fee on each transaction. Brands pay a 5% fee on the total
                    campaign value, while influencers pay a 10-20% commission on their earnings (depending on their
                    subscription plan). These fees help us maintain the platform, provide secure payments, and offer
                    customer support.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do you verify influencers?</AccordionTrigger>
                  <AccordionContent>
                    We verify all influencers through a multi-step process that includes social media account
                    verification, audience quality analysis, and engagement rate authentication. This ensures that
                    brands connect with genuine influencers who have authentic audiences.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I work with international influencers/brands?</AccordionTrigger>
                  <AccordionContent>
                    Yes! InfluenceConnect is a global platform that supports collaborations across borders. You can
                    filter influencers by location if you need region-specific campaigns, or work with talent from
                    around the world to expand your reach.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>How does the affiliate marketing program work?</AccordionTrigger>
                  <AccordionContent>
                    Our affiliate marketing program allows brands to set a commission rate (typically 10%) on sales
                    generated through influencer content. When a customer makes a purchase using the influencer's unique
                    tracking link or promo code, the system automatically attributes the sale and calculates the
                    commission. The platform takes a small percentage of this commission, with the majority going to the
                    influencer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>What are featured listings and how do they work?</AccordionTrigger>
                  <AccordionContent>
                    Featured listings are a premium visibility option that places influencer profiles at the top of
                    search results. Influencers can purchase featured listing slots individually or receive them as part
                    of their subscription plan. Featured profiles receive significantly more views and engagement from
                    brands looking for collaborations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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

