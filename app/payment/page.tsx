"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Landmark, CheckCircle, ShieldCheck, AlertCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handlePayment = () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          {!isComplete ? (
            <div className="grid gap-8">
              <div>
                <h1 className="text-3xl font-bold">Complete Your Payment</h1>
                <p className="text-muted-foreground mt-1">Secure payment for your influencer marketing campaign</p>
              </div>

              <Alert className="bg-brand/10 border-brand/20">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <AlertTitle>Secure Escrow Payment</AlertTitle>
                <AlertDescription>
                  Your payment will be held securely in escrow until you approve the influencer's work.
                  <Link href="/payment-flow" className="ml-1 text-brand hover:underline">
                    Learn more about our payment process
                  </Link>
                </AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                      <CardDescription>Select your preferred payment method</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                        <div className="flex items-center space-x-2 rounded-md border p-3">
                          <RadioGroupItem value="momo" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                            <CreditCard className="h-5 w-5 text-muted-foreground" />
                            Mobile Money
                          </Label>
                        </div>
                          <div className="flex items-center space-x-2 rounded-md border p-3">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                            <CreditCard className="h-5 w-5 text-muted-foreground" />
                            Credit or Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 rounded-md border p-3">
                          <RadioGroupItem value="bank" id="bank" />
                          <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer flex-1">
                            <Landmark className="h-5 w-5 text-muted-foreground" />
                            Bank Transfer
                          </Label>
                        </div>
                      </RadioGroup>
                    </CardContent>
                  </Card>

                  {paymentMethod === "card" && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Card Details</CardTitle>
                        <CardDescription>Enter your card information</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-name">Name on Card</Label>
                          <Input id="card-name" placeholder="John Smith" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {paymentMethod === "bank" && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Bank Transfer Details</CardTitle>
                        <CardDescription>Use these details to make your transfer</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-1">
                          <Label className="text-sm text-muted-foreground">Account Name</Label>
                          <p className="font-medium">InfluenceConnect Inc.</p>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-sm text-muted-foreground">Account Number</Label>
                          <p className="font-medium">1234567890</p>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-sm text-muted-foreground">Routing Number</Label>
                          <p className="font-medium">987654321</p>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-sm text-muted-foreground">Reference</Label>
                          <p className="font-medium">INF-12345</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Avatar>

                          <AvatarImage src="/sweetadjeteyPP.jpeg"
                          
                          alt="Alex Morgan" />
                          <AvatarFallback>AM</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Sweet Adjeley</h3>
                          <p className="text-sm text-muted-foreground">Premium Package</p>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Package Price</span>
                          <span>$1,000.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Platform Fee</span>
                          <span>$50.00</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-medium">
                          <span>Total</span>
                          <span>$1,050.00</span>
                        </div>
                      </div>

                      <div className="p-3 bg-muted rounded-lg text-sm">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <p>
                            Your payment will be held in escrow until you approve the influencer's work. The platform
                            fee is non-refundable.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full bg-brand hover:bg-brand-light text-white"
                        onClick={handlePayment}
                        disabled={isProcessing}
                      >
                        {isProcessing ? "Processing..." : "Complete Payment"}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          ) : (
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-brand" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
                <p className="text-muted-foreground mb-6">
                  Your payment has been securely placed in escrow. The influencer has been notified and will begin
                  working on your campaign.
                </p>
                <div className="flex gap-4 w-full">
                  <Link href="/dashboard" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Go to Dashboard
                    </Button>
                  </Link>
                  <Link href="/messages" className="flex-1">
                    <Button className="w-full bg-brand hover:bg-brand-light text-white">Message Influencer</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

