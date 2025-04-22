"use client"

import { AvatarFallback } from "@/components/ui/avatar"

import { AvatarImage } from "@/components/ui/avatar"

import { Avatar } from "@/components/ui/avatar"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CheckCircle, TrendingUp, Search, ArrowRight, Star, Calendar, Zap } from "lucide-react"

export default function FeaturedListingsPage() {
  const [selectedPlan, setSelectedPlan] = useState("weekly")
  const [autoRenew, setAutoRenew] = useState(true)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Featured Listings
              </h1>
              <p className="max-w-[700px] text-white/80 md:text-xl">
                Boost your visibility and stand out from the crowd with premium placement in search results
              </p>
              <Button size="lg" className="bg-white text-brand hover:bg-white/90">
                Get Featured Now
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Get Featured?</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Featured listings help you stand out and get discovered by more brands
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-brand/10">
                      <TrendingUp className="h-8 w-8 text-brand" />
                    </div>
                    <h3 className="text-xl font-bold">5x More Visibility</h3>
                    <p className="text-muted-foreground">
                      Featured profiles receive up to 5 times more views than standard listings, significantly
                      increasing your chances of being discovered.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-brand/10">
                      <Search className="h-8 w-8 text-brand" />
                    </div>
                    <h3 className="text-xl font-bold">Top Search Placement</h3>
                    <p className="text-muted-foreground">
                      Your profile appears at the top of search results when brands are looking for influencers in your
                      niche, ensuring maximum exposure.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-brand/10">
                      <Star className="h-8 w-8 text-brand" />
                    </div>
                    <h3 className="text-xl font-bold">Featured Badge</h3>
                    <p className="text-muted-foreground">
                      A special "Featured" badge appears on your profile, highlighting your premium status and
                      increasing credibility with potential clients.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Example Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="max-w-[700px] text-muted-foreground">
                See the difference a featured listing makes in search results
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Standard Listing</CardTitle>
                  <CardDescription>How your profile appears without featuring</CardDescription>
                </CardHeader>
                <div className="relative h-[400px] border-y">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Standard listing example"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-background/80 backdrop-blur-sm rounded-lg text-center">
                      <p className="text-lg font-medium">Standard Search Placement</p>
                      <p className="text-sm text-muted-foreground">Appears in normal search order</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Regular position in search results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Standard profile visibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>No special highlighting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-brand">
                <CardHeader className="bg-brand/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Featured Listing</CardTitle>
                      <CardDescription>How your profile appears when featured</CardDescription>
                    </div>
                    <Badge className="bg-brand text-white">Featured</Badge>
                  </div>
                </CardHeader>
                <div className="relative h-[400px] border-y border-brand/20">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Featured listing example"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-brand text-white text-xs font-medium px-2 py-1 rounded-bl-lg">
                    Featured
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-background/80 backdrop-blur-sm rounded-lg text-center border border-brand/20">
                      <p className="text-lg font-medium">Premium Top Placement</p>
                      <p className="text-sm text-muted-foreground">Appears at the top of search results</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand mr-2 shrink-0" />
                      <span>Priority placement at the top of search results</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand mr-2 shrink-0" />
                      <span>Featured badge highlighting your profile</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand mr-2 shrink-0" />
                      <span>Increased profile views and engagement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Listing Plans</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Choose the duration that works best for your promotional needs
              </p>
            </div>

            <Tabs defaultValue="oneTime" className="w-full max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="oneTime">One-Time Feature</TabsTrigger>
                  <TabsTrigger value="subscription">Subscription Plans</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="oneTime" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Choose Your Featured Duration</CardTitle>
                    <CardDescription>Select how long you want your profile to be featured</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="space-y-4">
                      <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="weekly" id="weekly" />
                          <Label htmlFor="weekly" className="flex flex-col">
                            <span className="font-medium">7 Days</span>
                            <span className="text-sm text-muted-foreground">Best for quick promotions</span>
                          </Label>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">$49</div>
                          <div className="text-sm text-muted-foreground">$7/day</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between space-x-2 rounded-md border p-4 border-brand bg-brand/5">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly" className="flex flex-col">
                            <div className="flex items-center">
                              <span className="font-medium">30 Days</span>
                              <Badge className="ml-2 bg-brand text-white">Most Popular</Badge>
                            </div>
                            <span className="text-sm text-muted-foreground">Best value for serious promotion</span>
                          </Label>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">$149</div>
                          <div className="text-sm text-muted-foreground">$4.97/day</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="quarterly" id="quarterly" />
                          <Label htmlFor="quarterly" className="flex flex-col">
                            <span className="font-medium">90 Days</span>
                            <span className="text-sm text-muted-foreground">Best for long-term visibility</span>
                          </Label>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">$349</div>
                          <div className="text-sm text-muted-foreground">$3.88/day</div>
                        </div>
                      </div>
                    </RadioGroup>

                    <div className="mt-6 flex items-center justify-between rounded-md border p-4">
                      <div className="flex flex-col">
                        <span className="font-medium">Auto-renew</span>
                        <span className="text-sm text-muted-foreground">
                          Automatically renew your featured listing when it expires
                        </span>
                      </div>
                      <Switch checked={autoRenew} onCheckedChange={setAutoRenew} />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-brand hover:bg-brand-light text-white">
                      Get Featured Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="subscription" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pro Plan</CardTitle>
                      <div className="mt-4 flex items-baseline text-brand">
                        <span className="text-4xl font-extrabold tracking-tight">$29</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">Included in your Pro subscription:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand mr-2 shrink-0" />
                          <span>1 featured listing per month</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand mr-2 shrink-0" />
                          <span>7 days of premium visibility</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand mr-2 shrink-0" />
                          <span>Featured badge on your profile</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand mr-2 shrink-0" />
                          <span>Performance analytics</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/pricing" className="w-full">
                        <Button className="w-full">View Pro Plan</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="border-brand">
                    <CardHeader className="bg-brand/5">
                      <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-brand px-3 py-1 text-xs font-medium text-white">
                        Best Value
                      </div>
                      <CardTitle>Elite Plan</CardTitle>
                      <div className="mt-4 flex items-baseline text-brand">
                        <span className="text-4xl font-extrabold tracking-tight">$79</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">Included in your Elite subscription:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand mr-2 shrink-0" />
                          <span>3 featured listings per month</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand mr-2 shrink-0" />
                          <span>10 days of premium visibility each</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand mr-2 shrink-0" />
                          <span>Featured badge on your profile</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand mr-2 shrink-0" />
                          <span>Advanced performance analytics</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand mr-2 shrink-0" />
                          <span>Priority in email campaigns</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/pricing" className="w-full">
                        <Button className="w-full bg-brand hover:bg-brand-light text-white">View Elite Plan</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Additional Features</CardTitle>
                      <CardDescription>Add more featured listings to any plan</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Single Featured Listing</span>
                          <span className="font-bold">$39</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Add an extra 7-day featured listing to your subscription
                        </p>
                      </div>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Featured Listing Pack</span>
                          <span className="font-bold">$99</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Get 3 additional 7-day featured listings (save $18)
                        </p>
                      </div>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Extended Duration</span>
                          <span className="font-bold">+$15</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Add 3 extra days to any featured listing</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Purchase Add-ons</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Success Stories */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Success Stories</h2>
              <p className="max-w-[700px] text-muted-foreground">
                See how featured listings have helped influencers grow their business
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Sarah J." />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">Sarah J.</h3>
                      <p className="text-sm text-muted-foreground">Fashion Influencer, 120K followers</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-brand text-brand" />
                      <Star className="h-5 w-5 fill-brand text-brand" />
                      <Star className="h-5 w-5 fill-brand text-brand" />
                      <Star className="h-5 w-5 fill-brand text-brand" />
                      <Star className="h-5 w-5 fill-brand text-brand" />
                    </div>
                    <p className="text-muted-foreground">
                      "After using the featured listing for just one week, I received 3 new collaboration requests from
                      major brands. The ROI was incredible!"
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="outline">200% more profile views</Badge>
                      <Badge variant="outline">3 new brand deals</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Marcus T." />
                      <AvatarFallback>MT</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">Marcus T.</h3>
                      <p className="text-sm text-muted-foreground">Fitness Influencer, 85K followers</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-brand text-brand" />
                      <Star className="h-5 w-5 fill-brand text-brand" />
                      <Star className="h-5 w-5 fill-brand text-brand" />
                      <Star className="h-5 w-5 fill-brand text-brand" />
                      <Star className="h-5 w-5 fill-brand text-brand" />
                    </div>
                    <p className="text-muted-foreground">
                      "The featured listing helped me stand out in a crowded fitness niche. I secured a 6-month
                      partnership with a supplement brand within days!"
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="outline">350% more messages</Badge>
                      <Badge variant="outline">$5,000 contract</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Priya K." />
                      <AvatarFallback>PK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">Priya K.</h3>
                      <p className="text-sm text-muted-foreground">Food Influencer, 150K followers</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-brand text-brand" />
                      <Star className="h-5 w-5 fill-brand text-brand" />
                      <Star className="h-5 w-5 fill-brand text-brand" />
                      <Star className="h-5 w-5 fill-brand text-brand" />
                      <Star className="h-5 w-5 fill-brand text-brand" />
                    </div>
                    <p className="text-muted-foreground">
                      "I subscribe to the Elite plan for consistent visibility. It's paid for itself many times over
                      with the quality of brand partnerships I've secured."
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="outline">5 premium partnerships</Badge>
                      <Badge variant="outline">400% ROI</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground">Everything you need to know about featured listings</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>When does my featured listing start?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your featured listing begins immediately after purchase. You can also schedule it to start at a
                    future date if you prefer to align with specific campaigns or events.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I customize when my listing appears?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can schedule your featured listing to run during specific dates. This is especially useful
                    if you want to align your promotion with seasonal campaigns or product launches.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How many more views will I get?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    On average, featured listings receive 3-5 times more views than standard listings. The exact
                    increase depends on your niche, the quality of your profile, and current platform traffic.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I cancel my featured listing?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    One-time featured listings cannot be canceled once activated. For subscription plans, you can cancel
                    auto-renewal at any time, but your current featured period will continue until its scheduled end
                    date.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do I get analytics for my featured listing?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you'll receive detailed analytics showing how your featured listing is performing, including
                    views, clicks, messages received, and comparison to your regular profile performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-brand text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Stand Out?</h2>
              <p className="max-w-[700px] text-white/80 md:text-xl">
                Get featured today and start attracting more high-quality brand partnerships
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-white text-brand hover:bg-white/90">
                  <Zap className="mr-2 h-5 w-5" />
                  Get Featured Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white bg-white/20 hover:bg-white/30">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule for Later
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
