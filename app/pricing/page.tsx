import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Users, CreditCard, TrendingUp } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Simple, Transparent Pricing
              </h1>
              <p className="max-w-[700px] text-white/80 md:text-xl">
                Choose the plan that's right for you. No hidden fees, no long-term contracts.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tabs */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="brands" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="brands">For Brands</TabsTrigger>
                  <TabsTrigger value="influencers">For Influencers</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="brands" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-3">
                  {/* Starter Plan */}
                  <Card className="flex flex-col border-brand/20">
                    <CardHeader>
                      <CardTitle>Starter</CardTitle>
                      <div className="mt-4 flex items-baseline text-brand">
                        <span className="text-4xl font-extrabold tracking-tight">$49</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                      <CardDescription className="mt-4">
                        Perfect for small businesses just getting started with influencer marketing.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Up to 5 active campaigns</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Basic search filters</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Message up to 20 influencers/month</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Basic analytics dashboard</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>5% platform fee on transactions</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Email support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/signup?type=brand&plan=starter" className="w-full">
                        <Button className="w-full bg-brand hover:bg-brand-light text-white">Get Started</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* Professional Plan */}
                  <Card className="flex flex-col relative border-brand">
                    <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-brand px-3 py-1 text-xs font-medium text-white">
                      Most Popular
                    </div>
                    <CardHeader>
                      <CardTitle>Professional</CardTitle>
                      <div className="mt-4 flex items-baseline text-brand">
                        <span className="text-4xl font-extrabold tracking-tight">$149</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                      <CardDescription className="mt-4">
                        Ideal for growing businesses with regular influencer marketing campaigns.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Up to 15 active campaigns</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Advanced search & filtering</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Unlimited influencer messaging</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Detailed analytics & reporting</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>3.5% platform fee on transactions</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Priority email & chat support</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Campaign templates & briefs</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Basic affiliate marketing tools</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>1 featured listing per month</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/signup?type=brand&plan=professional" className="w-full">
                        <Button className="w-full bg-brand hover:bg-brand-light text-white">Get Started</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* Enterprise Plan */}
                  <Card className="flex flex-col border-brand/20">
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <div className="mt-4 flex items-baseline text-brand">
                        <span className="text-4xl font-extrabold tracking-tight">$399</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                      <CardDescription className="mt-4">
                        For established brands with extensive influencer marketing needs.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Unlimited active campaigns</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Premium search with AI matching</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Unlimited influencer messaging</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Advanced analytics & custom reports</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>2% platform fee on transactions</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Dedicated account manager</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>API access & custom integrations</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>White-label options available</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Advanced affiliate marketing tools</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>5 featured listings per month</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>50% discount on Managed Campaigns</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/signup?type=brand&plan=enterprise" className="w-full">
                        <Button className="w-full bg-brand hover:bg-brand-light text-white">Contact Sales</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-12 rounded-lg bg-muted p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold">Need a custom solution?</h3>
                      <p className="text-muted-foreground">
                        We offer tailored enterprise solutions for large brands with specific requirements. Contact our
                        sales team to discuss your needs.
                      </p>
                    </div>
                    <Link href="/contact-sales">
                      <Button variant="outline" className="min-w-[200px]">
                        Contact Sales
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="influencers" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-3">
                  {/* Free Plan */}
                  <Card className="flex flex-col border-brand/20">
                    <CardHeader>
                      <CardTitle>Free</CardTitle>
                      <div className="mt-4 flex items-baseline text-brand">
                        <span className="text-4xl font-extrabold tracking-tight">$0</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                      <CardDescription className="mt-4">
                        Get started with a basic profile and limited features.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Basic profile listing</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Up to 3 portfolio items</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Respond to brand inquiries</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Basic analytics</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>15% platform fee on earnings</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/signup?type=influencer&plan=free" className="w-full">
                        <Button className="w-full bg-brand hover:bg-brand-light text-white">Sign Up Free</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* Pro Plan */}
                  <Card className="flex flex-col relative border-brand">
                    <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-brand px-3 py-1 text-xs font-medium text-white">
                      Most Popular
                    </div>
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <div className="mt-4 flex items-baseline text-brand">
                        <span className="text-4xl font-extrabold tracking-tight">$29</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                      <CardDescription className="mt-4">
                        For growing influencers looking to expand their brand partnerships.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Featured profile listing</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Unlimited portfolio items</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Direct outreach to brands (5/month)</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Advanced analytics dashboard</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>10% platform fee on earnings</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Priority in search results</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Email support</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Affiliate marketing tools</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>1 featured listing per month</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/signup?type=influencer&plan=pro" className="w-full">
                        <Button className="w-full bg-brand hover:bg-brand-light text-white">Get Started</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* Elite Plan */}
                  <Card className="flex flex-col border-brand/20">
                    <CardHeader>
                      <CardTitle>Elite</CardTitle>
                      <div className="mt-4 flex items-baseline text-brand">
                        <span className="text-4xl font-extrabold tracking-tight">$79</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                      <CardDescription className="mt-4">
                        For established influencers with a significant following.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Premium profile with verification badge</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Unlimited portfolio items</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Unlimited direct outreach to brands</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Comprehensive analytics & insights</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>7% platform fee on earnings</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Top placement in search results</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Priority support</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Early access to new features</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>Advanced affiliate marketing tools</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                          <span>3 featured listings per month</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/signup?type=influencer&plan=elite" className="w-full">
                        <Button className="w-full bg-brand hover:bg-brand-light text-white">Get Started</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Premium Services */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-brand/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Premium Services</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Take your influencer marketing to the next level with our premium offerings.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Managed Campaigns */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                      <Users className="h-6 w-6 text-brand" />
                    </div>
                  </div>
                  <CardTitle className="text-center">Managed Campaigns</CardTitle>
                  <CardDescription className="text-center mt-2">
                    Our white-glove service for hands-off campaign management
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Expert campaign strategy development</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Curated influencer selection & vetting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Negotiation and contracting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Content briefing and approval</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Campaign monitoring and optimization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Comprehensive performance reporting</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact-sales" className="w-full">
                    <Button className="w-full bg-brand hover:bg-brand-light text-white">Get Custom Quote</Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Affiliate Marketing */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                      <CreditCard className="h-6 w-6 text-brand" />
                    </div>
                  </div>
                  <CardTitle className="text-center">Affiliate Marketing</CardTitle>
                  <CardDescription className="text-center mt-2">
                    Performance-based marketing with revenue sharing
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Unique tracking links and promo codes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Real-time sales tracking dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Automated commission calculations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>10% commission on sales (customizable)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Integration with major e-commerce platforms</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Monthly commission payouts</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/affiliate-program" className="w-full">
                    <Button className="w-full bg-brand hover:bg-brand-light text-white">Learn More</Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Featured Listings */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                      <TrendingUp className="h-6 w-6 text-brand" />
                    </div>
                  </div>
                  <CardTitle className="text-center">Featured Listings</CardTitle>
                  <CardDescription className="text-center mt-2">
                    Boost visibility and stand out in search results
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Priority placement in search results</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Enhanced profile visibility</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Highlighted profile badge</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Featured in relevant email campaigns</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Performance analytics for your listing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-brand" />
                      <span>Flexible duration options</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/featured-listings" className="w-full">
                    <Button className="w-full bg-brand hover:bg-brand-light text-white">View Pricing</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Compare Features</h2>
              <p className="max-w-[700px] text-muted-foreground">Find the plan that's right for your needs.</p>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Feature
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                          Starter / Free
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider bg-brand/5"
                        >
                          Professional / Pro
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                          Enterprise / Elite
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-background divide-y divide-border">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Profile Visibility</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Standard</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center bg-brand/5">Featured</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Premium</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Search Ranking</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Basic</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center bg-brand/5">Priority</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Top Placement</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Analytics</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Basic</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center bg-brand/5">Advanced</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Comprehensive</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Platform Fee</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">5-15%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center bg-brand/5">3.5-10%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">2-7%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Support</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Email</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center bg-brand/5">
                          Priority Email & Chat
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">Dedicated Manager</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">API Access</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">—</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center bg-brand/5">—</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✓</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pricing FAQ</h2>
              <p className="max-w-[700px] text-muted-foreground">Common questions about our pricing and billing.</p>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Can I change plans later?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the
                    prorated difference for the remainder of your billing cycle. When downgrading, the new rate will
                    apply at the start of your next billing cycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does the platform fee work?</AccordionTrigger>
                  <AccordionContent>
                    The platform fee is a percentage charged on each transaction that occurs through InfluenceConnect.
                    For brands, this fee is added to the campaign cost. For influencers, the fee is deducted from your
                    earnings. The percentage varies based on your subscription plan, with higher-tier plans offering
                    lower fees.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service
                    within the first 14 days, contact our support team for a full refund. After this period, we do not
                    provide refunds for subscription fees, but you can cancel at any time to prevent future charges.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is there a contract or commitment?</AccordionTrigger>
                  <AccordionContent>
                    No, all our plans are month-to-month with no long-term contracts or commitments. You can cancel at
                    any time. We also offer discounted annual billing options if you prefer to commit for a year.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank
                    transfers for annual enterprise plans. All payments are processed securely through our payment
                    providers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Do you offer discounts for nonprofits or educational institutions?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer special pricing for qualified nonprofits, educational institutions, and startups.
                    Please contact our sales team with verification of your status to learn more about our discount
                    programs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>How does the affiliate marketing commission work?</AccordionTrigger>
                  <AccordionContent>
                    Our affiliate marketing program allows brands to set a commission rate (typically 10%) on sales
                    generated through influencer content. When a sale occurs, the commission is split between the
                    influencer and InfluenceConnect. For example, if an influencer drives $10,000 in sales at a 10%
                    commission rate, the total commission would be $1,000, with the influencer receiving the majority
                    share and InfluenceConnect taking a smaller portion as a service fee.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>What's included in the Managed Campaigns service?</AccordionTrigger>
                  <AccordionContent>
                    Our Managed Campaigns service is a comprehensive, white-glove solution where our team handles every
                    aspect of your influencer marketing campaign. This includes strategy development, influencer
                    selection and vetting, contract negotiation, content briefing, campaign management, and detailed
                    performance reporting. Pricing is customized based on campaign scope, budget, and specific
                    requirements. This service is ideal for brands who want professional campaign management without the
                    internal resources or expertise.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>How much do Featured Listings cost?</AccordionTrigger>
                  <AccordionContent>
                    Featured Listings pricing varies based on duration and placement priority. One-time featured
                    listings start at $49 for a 7-day promotion. Monthly subscribers receive a certain number of
                    featured listing credits included in their plan, with the ability to purchase additional listings at
                    a discounted rate. Featured listings significantly increase visibility and engagement, with featured
                    profiles receiving up to 5x more views than standard listings.
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

