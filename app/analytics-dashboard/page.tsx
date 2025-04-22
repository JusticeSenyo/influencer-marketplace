"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  BarChart3,
  DollarSign,
  Calendar,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  ShoppingBag,
  CreditCard,
  Lock,
  CheckCircle,
} from "lucide-react"

// Mock data for charts
const EngagementChart = () => {
  return (
    <div className="w-full h-[200px] relative">
      <div className="absolute inset-0 flex items-end">
        <div className="flex-1 flex items-end space-x-2">
          <div className="bg-brand h-[30%] w-full rounded-t-md"></div>
          <div className="bg-brand h-[45%] w-full rounded-t-md"></div>
          <div className="bg-brand h-[60%] w-full rounded-t-md"></div>
          <div className="bg-brand h-[40%] w-full rounded-t-md"></div>
          <div className="bg-brand h-[70%] w-full rounded-t-md"></div>
          <div className="bg-brand h-[90%] w-full rounded-t-md"></div>
          <div className="bg-brand h-[75%] w-full rounded-t-md"></div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full border-t border-border"></div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground pt-2">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  )
}

const ReachChart = () => {
  return (
    <div className="w-full h-[200px] relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-[120px]">
          <svg viewBox="0 0 100 20" className="w-full h-full">
            <path
              d="M0,10 Q10,5 20,10 T40,10 T60,10 T80,10 T100,5"
              fill="none"
              stroke="hsl(var(--brand))"
              strokeWidth="0.5"
            />
            <path
              d="M0,10 Q10,5 20,10 T40,10 T60,10 T80,10 T100,5"
              fill="url(#gradient)"
              strokeWidth="0"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--brand))" />
                <stop offset="100%" stopColor="hsl(var(--background))" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 w-full border-t border-border"></div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground pt-2">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
      </div>
    </div>
  )
}

const ConversionChart = () => {
  return (
    <div className="w-full h-[200px] relative">
      <div className="absolute inset-0 flex items-end">
        <div className="flex-1 flex items-end space-x-6 px-4">
          <div className="flex flex-col items-center gap-1 w-full">
            <div className="bg-brand h-[40%] w-4 rounded-t-md"></div>
            <div className="bg-muted h-[20%] w-4 rounded-t-md"></div>
          </div>
          <div className="flex flex-col items-center gap-1 w-full">
            <div className="bg-brand h-[60%] w-4 rounded-t-md"></div>
            <div className="bg-muted h-[25%] w-4 rounded-t-md"></div>
          </div>
          <div className="flex flex-col items-center gap-1 w-full">
            <div className="bg-brand h-[80%] w-4 rounded-t-md"></div>
            <div className="bg-muted h-[35%] w-4 rounded-t-md"></div>
          </div>
          <div className="flex flex-col items-center gap-1 w-full">
            <div className="bg-brand h-[50%] w-4 rounded-t-md"></div>
            <div className="bg-muted h-[20%] w-4 rounded-t-md"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full border-t border-border"></div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground pt-2">
        <span>Q1</span>
        <span>Q2</span>
        <span>Q3</span>
        <span>Q4</span>
      </div>
    </div>
  )
}

export default function AnalyticsDashboardPage() {
  const [timeRange, setTimeRange] = useState("7d")
  const [campaignFilter, setCampaignFilter] = useState("all")

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
                <p className="text-muted-foreground">Track and analyze your influencer marketing performance</p>
              </div>
              <div className="flex items-center gap-2">
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Last 7 days</SelectItem>
                    <SelectItem value="30d">Last 30 days</SelectItem>
                    <SelectItem value="90d">Last 90 days</SelectItem>
                    <SelectItem value="1y">Last year</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Custom Range
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4" />
                  <span className="sr-only md:not-sr-only md:ml-2">Export</span>
                </Button>
              </div>
            </div>

            {/* Overview Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between space-y-0 pb-2">
                    <p className="text-sm font-medium">Total Reach</p>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold">1.2M</h3>
                    <div className="flex items-center text-sm text-green-600">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      12.5%
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground pt-1">+145K from last period</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between space-y-0 pb-2">
                    <p className="text-sm font-medium">Engagement Rate</p>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold">4.2%</h3>
                    <div className="flex items-center text-sm text-green-600">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      0.8%
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground pt-1">Industry avg: 3.1%</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between space-y-0 pb-2">
                    <p className="text-sm font-medium">Conversions</p>
                    <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold">3,842</h3>
                    <div className="flex items-center text-sm text-red-600">
                      <ArrowDownRight className="mr-1 h-4 w-4" />
                      3.2%
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground pt-1">-128 from last period</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between space-y-0 pb-2">
                    <p className="text-sm font-medium">Revenue</p>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold">$42,580</h3>
                    <div className="flex items-center text-sm text-green-600">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      18.3%
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground pt-1">+$6,582 from last period</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="grid gap-6 md:grid-cols-7">
              {/* Charts Section */}
              <div className="md:col-span-5 space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="space-y-0">
                      <CardTitle>Performance Overview</CardTitle>
                      <CardDescription>Track key metrics across your campaigns</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select value={campaignFilter} onValueChange={setCampaignFilter}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Filter by campaign" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Campaigns</SelectItem>
                          <SelectItem value="summer">Summer Collection</SelectItem>
                          <SelectItem value="fall">Fall Launch</SelectItem>
                          <SelectItem value="holiday">Holiday Special</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="engagement" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="engagement">Engagement</TabsTrigger>
                        <TabsTrigger value="reach">Reach</TabsTrigger>
                        <TabsTrigger value="conversions">Conversions</TabsTrigger>
                      </TabsList>
                      <TabsContent value="engagement" className="pt-4">
                        <EngagementChart />
                      </TabsContent>
                      <TabsContent value="reach" className="pt-4">
                        <ReachChart />
                      </TabsContent>
                      <TabsContent value="conversions" className="pt-4">
                        <ConversionChart />
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Performance</CardTitle>
                    <CardDescription>Compare metrics across your active campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-5 text-xs font-medium text-muted-foreground">
                        <div className="col-span-2">Campaign</div>
                        <div className="text-right">Reach</div>
                        <div className="text-right">Engagement</div>
                        <div className="text-right">Conversions</div>
                      </div>
                      <div className="space-y-2">
                        <div className="grid grid-cols-5 items-center">
                          <div className="col-span-2 flex items-center gap-2">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                            <span className="font-medium">Summer Collection</span>
                          </div>
                          <div className="text-right">458K</div>
                          <div className="text-right">4.8%</div>
                          <div className="text-right">1,245</div>
                        </div>
                        <div className="grid grid-cols-5 items-center">
                          <div className="col-span-2 flex items-center gap-2">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                            <span className="font-medium">Fall Launch</span>
                          </div>
                          <div className="text-right">325K</div>
                          <div className="text-right">3.9%</div>
                          <div className="text-right">982</div>
                        </div>
                        <div className="grid grid-cols-5 items-center">
                          <div className="col-span-2 flex items-center gap-2">
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Planned</Badge>
                            <span className="font-medium">Holiday Special</span>
                          </div>
                          <div className="text-right">-</div>
                          <div className="text-right">-</div>
                          <div className="text-right">-</div>
                        </div>
                        <div className="grid grid-cols-5 items-center">
                          <div className="col-span-2 flex items-center gap-2">
                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Completed</Badge>
                            <span className="font-medium">Spring Collection</span>
                          </div>
                          <div className="text-right">512K</div>
                          <div className="text-right">4.2%</div>
                          <div className="text-right">1,615</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Campaigns
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Influencers</CardTitle>
                    <CardDescription>Based on engagement rate</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Alex Morgan" />
                          <AvatarFallback>AM</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">Alex Morgan</p>
                          <p className="text-xs text-muted-foreground">@alexlifestyle</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">5.8%</p>
                          <p className="text-xs text-green-600">+0.7%</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jamie Tech" />
                          <AvatarFallback>JT</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">Jamie Tech</p>
                          <p className="text-xs text-muted-foreground">@techwithjamie</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">5.2%</p>
                          <p className="text-xs text-green-600">+0.3%</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Travel with Tom" />
                          <AvatarFallback>TT</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">Travel with Tom</p>
                          <p className="text-xs text-muted-foreground">@tomtravels</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">4.9%</p>
                          <p className="text-xs text-red-600">-0.2%</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Influencers
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Content Performance</CardTitle>
                    <CardDescription>By content type</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Instagram Posts</span>
                        <span className="font-medium">4.7%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-brand h-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Instagram Stories</span>
                        <span className="font-medium">3.9%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-brand h-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">TikTok Videos</span>
                        <span className="font-medium">5.2%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-brand h-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">YouTube Videos</span>
                        <span className="font-medium">3.1%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-brand h-full" style={{ width: "55%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-brand/50 bg-brand/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Premium Analytics
                    </CardTitle>
                    <CardDescription>Unlock advanced insights</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-brand" />
                        <span className="text-sm">Audience demographics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-brand" />
                        <span className="text-sm">Competitor benchmarking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-brand" />
                        <span className="text-sm">ROI attribution modeling</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-brand" />
                        <span className="text-sm">Custom reporting</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-brand hover:bg-brand-light text-white">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Upgrade to Pro
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Audience Insights - Premium Feature Teaser */}
            <Card className="border-brand/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Audience Insights</CardTitle>
                    <CardDescription>Understand who your campaigns are reaching</CardDescription>
                  </div>
                  <Badge className="bg-brand text-white">Premium</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <div className="mb-4 w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center">
                    <Lock className="h-8 w-8 text-brand" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Unlock Audience Insights</h3>
                  <p className="text-muted-foreground max-w-md mb-6">
                    Gain deeper understanding of your audience demographics, interests, and behaviors with our premium
                    analytics package.
                  </p>
                  <Button className="bg-brand hover:bg-brand-light text-white">Upgrade to Access</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
