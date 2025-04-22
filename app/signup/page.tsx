"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SignupPage() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get("type")
  const [activeTab, setActiveTab] = useState<string>(typeParam === "influencer" ? "influencer" : "brand")

     const style = {
    "width" : "150px",
    "border-radius" : "100%",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1 w-full items-center justify-center py-12">
        <div className="flex w-full max-w-md flex-col space-y-6 px-4 md:px-0">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link href="/" className="flex items-center gap-2">
              <img style={style} src="influencer connect.png" alt="" />
            </Link>
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your information to create an account</p>
          </div>
          <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="brand">Brand</TabsTrigger>
              <TabsTrigger value="influencer">Influencer</TabsTrigger>
            </TabsList>
            <TabsContent value="brand">
              <Card>
                <CardHeader>
                  <CardTitle>Brand Account</CardTitle>
                  <CardDescription>Create an account to find and hire influencers for your campaigns</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand-name">Brand Name</Label>
                    <Input id="brand-name" placeholder="Your brand name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand-email">Email</Label>
                    <Input id="brand-email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand-password">Password</Label>
                    <Input id="brand-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand-industry">Industry</Label>
                    <Input id="brand-industry" placeholder="e.g. Fashion, Tech, Beauty" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand hover:bg-brand-light text-white">Create Brand Account</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="influencer">
              <Card>
                <CardHeader>
                  <CardTitle>Influencer Account</CardTitle>
                  <CardDescription>Create an account to showcase your profile to potential brands</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="influencer-name">Full Name</Label>
                    <Input id="influencer-name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="influencer-email">Email</Label>
                    <Input id="influencer-email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="influencer-password">Password</Label>
                    <Input id="influencer-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="influencer-niche">Primary Niche</Label>
                    <Input id="influencer-niche" placeholder="e.g. Fashion, Gaming, Fitness" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand hover:bg-brand-light text-white">Create Influencer Account</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-brand hover:underline underline-offset-4">
              Log in
            </Link>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}

