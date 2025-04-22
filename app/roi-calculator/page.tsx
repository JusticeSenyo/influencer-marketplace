"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Calculator, DollarSign, TrendingUp, BarChart3, Download, Share2, Info } from "lucide-react"

export default function ROICalculatorPage() {
  // Campaign inputs
  const [campaignBudget, setCampaignBudget] = useState(5000)
  const [influencerCount, setInfluencerCount] = useState(3)
  const [averageFollowers, setAverageFollowers] = useState(100000)
  const [engagementRate, setEngagementRate] = useState(3)
  const [conversionRate, setConversionRate] = useState(2)
  const [averageOrderValue, setAverageOrderValue] = useState(50)
  const [campaignType, setCampaignType] = useState("awareness")
  const [industry, setIndustry] = useState("fashion")

  // Calculated results
  const [totalReach, setTotalReach] = useState(0)
  const [totalEngagements, setTotalEngagements] = useState(0)
  const [estimatedConversions, setEstimatedConversions] = useState(0)
  const [estimatedRevenue, setEstimatedRevenue] = useState(0)
  const [estimatedROI, setEstimatedROI] = useState(0)
  const [costPerEngagement, setCostPerEngagement] = useState(0)
  const [costPerAcquisition, setCostPerAcquisition] = useState(0)

  // Industry benchmarks
  const industryBenchmarks = {
    fashion: {
      engagementRate: 3.5,
      conversionRate: 2.1,
      averageOrderValue: 65,
    },
    beauty: {
      engagementRate: 3.8,
      conversionRate: 2.3,
      averageOrderValue: 55,
    },
    food: {
      engagementRate: 4.2,
      conversionRate: 1.8,
      averageOrderValue: 40,
    },
    fitness: {
      engagementRate: 4.5,
      conversionRate: 2.0,
      averageOrderValue: 70,
    },
    technology: {
      engagementRate: 2.8,
      conversionRate: 1.5,
      averageOrderValue: 120,
    },
    travel: {
      engagementRate: 3.9,
      conversionRate: 1.7,
      averageOrderValue: 250,
    },
  }

  // Update benchmarks when industry changes
  useEffect(() => {
    if (industry && industryBenchmarks[industry]) {
      setEngagementRate(industryBenchmarks[industry].engagementRate)
      setConversionRate(industryBenchmarks[industry].conversionRate)
      setAverageOrderValue(industryBenchmarks[industry].averageOrderValue)
    }
  }, [industry])

  // Calculate ROI and other metrics
  useEffect(() => {
    // Calculate total potential reach
    const reach = influencerCount * averageFollowers
    setTotalReach(reach)

    // Calculate total engagements
    const engagements = reach * (engagementRate / 100)
    setTotalEngagements(engagements)

    // Calculate estimated conversions
    const conversions = engagements * (conversionRate / 100)
    setEstimatedConversions(conversions)

    // Calculate estimated revenue
    const revenue = conversions * averageOrderValue
    setEstimatedRevenue(revenue)

    // Calculate ROI
    const roi = ((revenue - campaignBudget) / campaignBudget) * 100
    setEstimatedROI(roi)

    // Calculate cost per engagement
    const cpe = campaignBudget / engagements
    setCostPerEngagement(cpe)

    // Calculate cost per acquisition
    const cpa = campaignBudget / conversions
    setCostPerAcquisition(cpa)
  }, [
    campaignBudget,
    influencerCount,
    averageFollowers,
    engagementRate,
    conversionRate,
    averageOrderValue,
    campaignType,
  ])

  // Format number with commas
  const formatNumber = (num) => {
    return num.toLocaleString("en-US", { maximumFractionDigits: 0 })
  }

  // Format currency
  const formatCurrency = (num) => {
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Influencer Marketing ROI Calculator</h1>
              <p className="text-muted-foreground">
                Estimate the potential return on investment for your influencer marketing campaigns
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Input Card */}
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Details</CardTitle>
                    <CardDescription>Enter your campaign parameters to calculate potential ROI</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Tabs defaultValue="basic" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="basic">Basic</TabsTrigger>
                        <TabsTrigger value="advanced">Advanced</TabsTrigger>
                      </TabsList>
                      <TabsContent value="basic" className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="campaign-budget">Campaign Budget</Label>
                            <span className="text-sm text-muted-foreground">{formatCurrency(campaignBudget)}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <Slider
                              id="campaign-budget"
                              min={1000}
                              max={100000}
                              step={1000}
                              value={[campaignBudget]}
                              onValueChange={(value) => setCampaignBudget(value[0])}
                              className="flex-1"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="influencer-count">Number of Influencers</Label>
                            <span className="text-sm text-muted-foreground">{influencerCount}</span>
                          </div>
                          <Slider
                            id="influencer-count"
                            min={1}
                            max={20}
                            step={1}
                            value={[influencerCount]}
                            onValueChange={(value) => setInfluencerCount(value[0])}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="average-followers">Average Followers per Influencer</Label>
                            <span className="text-sm text-muted-foreground">{formatNumber(averageFollowers)}</span>
                          </div>
                          <Slider
                            id="average-followers"
                            min={10000}
                            max={1000000}
                            step={10000}
                            value={[averageFollowers]}
                            onValueChange={(value) => setAverageFollowers(value[0])}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <Select value={industry} onValueChange={setIndustry}>
                            <SelectTrigger id="industry">
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fashion">Fashion</SelectItem>
                              <SelectItem value="beauty">Beauty</SelectItem>
                              <SelectItem value="food">Food</SelectItem>
                              <SelectItem value="fitness">Fitness</SelectItem>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="travel">Travel</SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-muted-foreground mt-1">
                            Selecting an industry will update the benchmark rates based on industry averages
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="campaign-type">Campaign Type</Label>
                          <Select value={campaignType} onValueChange={setCampaignType}>
                            <SelectTrigger id="campaign-type">
                              <SelectValue placeholder="Select campaign type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="awareness">Brand Awareness</SelectItem>
                              <SelectItem value="engagement">Engagement</SelectItem>
                              <SelectItem value="conversion">Conversion/Sales</SelectItem>
                              <SelectItem value="product-launch">Product Launch</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TabsContent>

                      <TabsContent value="advanced" className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="engagement-rate">
                              Engagement Rate (%)
                              <span className="ml-1 text-xs text-muted-foreground">
                                Industry avg: {industryBenchmarks[industry]?.engagementRate}%
                              </span>
                            </Label>
                            <span className="text-sm text-muted-foreground">{engagementRate}%</span>
                          </div>
                          <Slider
                            id="engagement-rate"
                            min={0.5}
                            max={10}
                            step={0.1}
                            value={[engagementRate]}
                            onValueChange={(value) => setEngagementRate(value[0])}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="conversion-rate">
                              Conversion Rate (%)
                              <span className="ml-1 text-xs text-muted-foreground">
                                Industry avg: {industryBenchmarks[industry]?.conversionRate}%
                              </span>
                            </Label>
                            <span className="text-sm text-muted-foreground">{conversionRate}%</span>
                          </div>
                          <Slider
                            id="conversion-rate"
                            min={0.1}
                            max={5}
                            step={0.1}
                            value={[conversionRate]}
                            onValueChange={(value) => setConversionRate(value[0])}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="average-order-value">
                              Average Order Value
                              <span className="ml-1 text-xs text-muted-foreground">
                                Industry avg: ${industryBenchmarks[industry]?.averageOrderValue}
                              </span>
                            </Label>
                            <span className="text-sm text-muted-foreground">{formatCurrency(averageOrderValue)}</span>
                          </div>
                          <Slider
                            id="average-order-value"
                            min={10}
                            max={500}
                            step={5}
                            value={[averageOrderValue]}
                            onValueChange={(value) => setAverageOrderValue(value[0])}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="custom-budget">Custom Budget</Label>
                            <div className="relative">
                              <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="custom-budget"
                                type="number"
                                className="pl-8"
                                value={campaignBudget}
                                onChange={(e) => setCampaignBudget(Number(e.target.value))}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="custom-followers">Custom Followers</Label>
                            <Input
                              id="custom-followers"
                              type="number"
                              value={averageFollowers}
                              onChange={(e) => setAverageFollowers(Number(e.target.value))}
                            />
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Reset to Defaults</Button>
                    <Button className="bg-brand hover:bg-brand-light text-white">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate ROI
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Results Card */}
              <div>
                <Card className="sticky top-6">
                  <CardHeader className="bg-brand/5">
                    <CardTitle>Estimated Results</CardTitle>
                    <CardDescription>Based on your campaign parameters</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Total Reach</span>
                        <span className="font-bold">{formatNumber(totalReach)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Total Engagements</span>
                        <span className="font-bold">{formatNumber(totalEngagements)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Estimated Conversions</span>
                        <span className="font-bold">{formatNumber(estimatedConversions)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Campaign Cost</span>
                        <span className="font-bold">{formatCurrency(campaignBudget)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Estimated Revenue</span>
                        <span className="font-bold">{formatCurrency(estimatedRevenue)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Cost per Engagement</span>
                        <span className="font-bold">{formatCurrency(costPerEngagement)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Cost per Acquisition</span>
                        <span className="font-bold">{formatCurrency(costPerAcquisition)}</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-muted p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Estimated ROI</span>
                        <span className={`text-xl font-bold ${estimatedROI >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {estimatedROI.toFixed(2)}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${estimatedROI >= 0 ? "bg-green-600" : "bg-red-600"}`}
                          style={{
                            width: `${Math.min(Math.max(estimatedROI, 0), 100)}%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {estimatedROI >= 100
                          ? "Excellent ROI! This campaign is highly profitable."
                          : estimatedROI >= 50
                            ? "Good ROI. This campaign should deliver solid returns."
                            : estimatedROI >= 0
                              ? "Positive ROI, but consider optimizing for better returns."
                              : "Negative ROI. Consider adjusting your campaign parameters."}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Results
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>Based on your campaign parameters and industry benchmarks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full bg-brand/10">
                        <TrendingUp className="h-5 w-5 text-brand" />
                      </div>
                      <h3 className="font-medium">Budget Allocation</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {influencerCount > 0 && (
                        <>
                          With your budget of {formatCurrency(campaignBudget)}, we recommend allocating{" "}
                          {formatCurrency(campaignBudget / influencerCount)} per influencer for maximum impact.
                        </>
                      )}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full bg-brand/10">
                        <BarChart3 className="h-5 w-5 text-brand" />
                      </div>
                      <h3 className="font-medium">Influencer Selection</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {industry && (
                        <>
                          For {industry} campaigns, micro-influencers (10K-50K followers) often deliver better
                          engagement rates than macro-influencers.
                        </>
                      )}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full bg-brand/10">
                        <Info className="h-5 w-5 text-brand" />
                      </div>
                      <h3 className="font-medium">Campaign Optimization</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {estimatedROI < 50 ? (
                        <>
                          To improve your ROI, consider increasing your conversion rate through stronger calls to action
                          and targeted landing pages.
                        </>
                      ) : (
                        <>
                          Your campaign parameters look strong. Consider implementing affiliate tracking to further
                          enhance your ROI measurement.
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="rounded-lg bg-brand/5 border border-brand/20 p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">Ready to Launch Your Campaign?</h2>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Use these ROI projections to plan your influencer marketing strategy. Our platform makes it easy to find
                the right influencers, manage campaigns, and track real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/discover">
                  <Button className="bg-brand hover:bg-brand-light text-white">Find Influencers</Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline">View Pricing Plans</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
