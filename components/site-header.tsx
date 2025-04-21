"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const style = {
    "width" : "150px",
    "border-radius" : "100%",
  }

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
      <Link href="/" className="flex items-center gap-2">
        {/* <TrendingUp className="h-6 w-6 text-brand" /> */}
        <img style={style} src="influencer connect.png" alt="" />
        {/* <span className="font-bold">InfluenceConnect</span> */}
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/discover"
          className="text-sm font-medium text-menu hover:text-foreground hover:underline decoration-link decoration-2 underline-offset-4"
        >
          Discover
        </Link>
        <Link
          href="/how-it-works"
          className="text-sm font-medium text-menu hover:text-foreground hover:underline decoration-link decoration-2 underline-offset-4"
        >
          How It Works
        </Link>
        <Link
          href="/pricing"
          className="text-sm font-medium text-menu hover:text-foreground hover:underline decoration-link decoration-2 underline-offset-4"
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium text-menu hover:text-foreground hover:underline decoration-link decoration-2 underline-offset-4"
        >
          Contact
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" className="border-brand text-foreground">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-brand hover:bg-brand-light text-white">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b py-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <TrendingUp className="h-6 w-6 text-brand" />
                  <span className="font-bold">InfluenceConnect</span>
                </Link>
              </div>
              <nav className="flex flex-col gap-4 py-6">
                <Link href="/discover" className="text-lg font-medium hover:text-brand">
                  Discover
                </Link>
                <Link href="/how-it-works" className="text-lg font-medium hover:text-brand">
                  How It Works
                </Link>
                <Link href="/pricing" className="text-lg font-medium hover:text-brand">
                  Pricing
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:text-brand">
                  Contact
                </Link>
              </nav>
              <div className="mt-auto border-t py-4 flex flex-col gap-4">
                <Link href="/login" className="w-full">
                  <Button variant="outline" className="w-full border-brand text-foreground">
                    Log In
                  </Button>
                </Link>
                <Link href="/signup" className="w-full">
                  <Button className="w-full bg-brand hover:bg-brand-light text-white">Sign Up</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

