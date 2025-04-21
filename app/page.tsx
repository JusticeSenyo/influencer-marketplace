import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SearchIcon, Users, CreditCard } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect Brands with Perfect Influencers
                  </h1>
                  <p className="max-w-[600px] text-white/80 md:text-xl">
                    Find the right influencers for your brand or showcase your influence to potential clients.
                    InfluenceConnect makes collaboration simple.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup?type=brand">
                    <Button size="lg" className="w-full bg-white text-black hover:bg-white/90">
                      I'm a Brand
                    </Button>
                  </Link>
                  <Link href="/signup?type=influencer">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-white text-white bg-white/20 hover:bg-white/30"
                    >
                      I'm an Influencer
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden border bg-white/10 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid gap-4 p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <SearchIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium">Discover Influencers</h3>
                          <p className="text-sm text-white/80">Find by niche, audience, and engagement</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium">Connect Directly</h3>
                          <p className="text-sm text-white/80">Message and collaborate seamlessly</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <CreditCard className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium">Secure Payments</h3>
                          <p className="text-sm text-white/80">Manage campaigns and payments in one place</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to connect brands with influencers for successful marketing campaigns.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <Users className="h-6 w-6 text-brand" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Create Your Profile</h3>
                  <p className="text-muted-foreground">
                    Sign up as a brand or influencer and create your detailed profile with all relevant information.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <SearchIcon className="h-6 w-6 text-brand" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Connect & Collaborate</h3>
                  <p className="text-muted-foreground">
                    Brands discover influencers by niche, audience size, and engagement rates. Influencers showcase
                    their work.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <CreditCard className="h-6 w-6 text-brand" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Secure Payments</h3>
                  <p className="text-muted-foreground">
                    Manage campaigns, track performance, and handle payments securely through our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Thousands of Successful Collaborations
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform has facilitated partnerships between brands and influencers across various industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-brand/10 px-3 py-1 text-sm text-brand">Fashion</div>
                  <p className="text-xl font-medium">
                    "Found the perfect fashion influencers for our summer collection launch."
                  </p>
                  <p className="text-muted-foreground">- StyleBrand Co.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-brand/10 px-3 py-1 text-sm text-brand">Tech</div>
                  <p className="text-xl font-medium">
                    "Increased our product awareness by 200% through targeted tech influencer campaigns."
                  </p>
                  <p className="text-muted-foreground">- TechGadgets Inc.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-brand/10 px-3 py-1 text-sm text-brand">Lifestyle</div>
                  <p className="text-xl font-medium">
                    "As an influencer, I've connected with amazing brands that align with my values."
                  </p>
                  <p className="text-muted-foreground">- @lifestyleblogger</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join InfluenceConnect today and start connecting with brands or influencers.
                  </p>
                </div>
                <div className="flex gap-4 mt-6">
                  <Link href="/signup?type=brand">
                    <Button size="lg" className="bg-brand text-white hover:bg-brand/90">
                      I'm a Brand
                    </Button>
                  </Link>
                  <Link href="/signup?type=influencer">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white bg-white/20 hover:bg-white/30"
                    >
                      I'm an Influencer
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

