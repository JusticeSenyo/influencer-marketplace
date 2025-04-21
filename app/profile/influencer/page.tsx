"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart3,
  MessageSquare,
  Edit,
  Save,
  Plus,
  CheckCircle,
  Loader2,
  Instagram,
  Youtube,
  Twitter,
  Package,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Follower Growth Chart Component
const FollowerGrowthChart = () => {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const dpr = window.devicePixelRatio || 1

    // Set canvas dimensions accounting for device pixel ratio
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Mock data for follower growth (in thousands)
    const data = [120, 128, 135, 142, 146, 150]
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

    // Chart dimensions
    const chartWidth = rect.width
    const chartHeight = rect.height
    const padding = { top: 20, right: 20, bottom: 30, left: 40 }
    const innerWidth = chartWidth - padding.left - padding.right
    const innerHeight = chartHeight - padding.top - padding.bottom

    // Clear canvas
    ctx.clearRect(0, 0, chartWidth, chartHeight)

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding.left, padding.top)
    ctx.lineTo(padding.left, chartHeight - padding.bottom)
    ctx.lineTo(chartWidth - padding.right, chartHeight - padding.bottom)
    ctx.stroke()

    // Draw y-axis labels
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"
    ctx.fillStyle = "#64748b"
    ctx.font = "12px sans-serif"

    const minValue = Math.min(...data) * 0.9
    const maxValue = Math.max(...data) * 1.1
    const valueRange = maxValue - minValue
    const yStep = innerHeight / 4

    for (let i = 0; i <= 4; i++) {
      const y = chartHeight - padding.bottom - i * yStep
      const value = Math.round(minValue + (valueRange * i) / 4)
      ctx.fillText(`${value}K`, padding.left - 10, y)

      // Draw horizontal grid lines
      ctx.beginPath()
      ctx.strokeStyle = "#e2e8f0"
      ctx.setLineDash([2, 2])
      ctx.moveTo(padding.left, y)
      ctx.lineTo(chartWidth - padding.right, y)
      ctx.stroke()
      ctx.setLineDash([])
    }

    // Draw x-axis labels
    ctx.textAlign = "center"
    ctx.textBaseline = "top"

    const xStep = innerWidth / (labels.length - 1)

    labels.forEach((label, i) => {
      const x = padding.left + i * xStep
      ctx.fillText(label, x, chartHeight - padding.bottom + 10)
    })

    // Draw line chart
    ctx.beginPath()
    ctx.strokeStyle = "#E30045"
    ctx.lineWidth = 3

    data.forEach((value, i) => {
      const x = padding.left + i * xStep
      const y = chartHeight - padding.bottom - ((value - minValue) / valueRange) * innerHeight

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw points
    data.forEach((value, i) => {
      const x = padding.left + i * xStep
      const y = chartHeight - padding.bottom - ((value - minValue) / valueRange) * innerHeight

      ctx.beginPath()
      ctx.fillStyle = "#ffffff"
      ctx.arc(x, y, 6, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.fillStyle = "#E30045"
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()
    })

    // Draw area under the line
    ctx.beginPath()
    ctx.fillStyle = "rgba(227, 0, 69, 0.1)"

    data.forEach((value, i) => {
      const x = padding.left + i * xStep
      const y = chartHeight - padding.bottom - ((value - minValue) / valueRange) * innerHeight

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.lineTo(padding.left + (data.length - 1) * xStep, chartHeight - padding.bottom)
    ctx.lineTo(padding.left, chartHeight - padding.bottom)
    ctx.closePath()
    ctx.fill()
  }, [])

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
}

// Engagement Chart Component
const EngagementChart = () => {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const dpr = window.devicePixelRatio || 1

    // Set canvas dimensions accounting for device pixel ratio
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Mock data for engagement rates by platform
    const data = [3.5, 5.2, 2.8]
    const labels = ["Instagram", "TikTok", "YouTube"]
    const colors = ["#E1306C", "#000000", "#FF0000"]

    // Chart dimensions
    const chartWidth = rect.width
    const chartHeight = rect.height
    const padding = { top: 20, right: 20, bottom: 50, left: 40 }
    const innerWidth = chartWidth - padding.left - padding.right
    const innerHeight = chartHeight - padding.top - padding.bottom

    // Clear canvas
    ctx.clearRect(0, 0, chartWidth, chartHeight)

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding.left, padding.top)
    ctx.lineTo(padding.left, chartHeight - padding.bottom)
    ctx.lineTo(chartWidth - padding.right, chartHeight - padding.bottom)
    ctx.stroke()

    // Draw y-axis labels
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"
    ctx.fillStyle = "#64748b"
    ctx.font = "12px sans-serif"

    const maxValue = Math.max(...data) * 1.2
    const yStep = innerHeight / 5

    for (let i = 0; i <= 5; i++) {
      const y = chartHeight - padding.bottom - i * yStep
      const value = ((maxValue * i) / 5).toFixed(1)
      ctx.fillText(`${value}%`, padding.left - 10, y)

      // Draw horizontal grid lines
      ctx.beginPath()
      ctx.strokeStyle = "#e2e8f0"
      ctx.setLineDash([2, 2])
      ctx.moveTo(padding.left, y)
      ctx.lineTo(chartWidth - padding.right, y)
      ctx.stroke()
      ctx.setLineDash([])
    }

    // Draw bars
    const barWidth = (innerWidth / data.length) * 0.6
    const barSpacing = innerWidth / data.length

    data.forEach((value, i) => {
      const x = padding.left + i * barSpacing + (barSpacing - barWidth) / 2
      const barHeight = (value / maxValue) * innerHeight
      const y = chartHeight - padding.bottom - barHeight

      // Draw bar
      ctx.beginPath()
      ctx.fillStyle = colors[i]
      ctx.rect(x, y, barWidth, barHeight)
      ctx.fill()

      // Draw value on top of bar
      ctx.textAlign = "center"
      ctx.textBaseline = "bottom"
      ctx.fillStyle = "#64748b"
      ctx.fillText(`${value}%`, x + barWidth / 2, y - 5)

      // Draw label below bar
      ctx.textAlign = "center"
      ctx.textBaseline = "top"
      ctx.fillStyle = "#64748b"
      ctx.fillText(labels[i], x + barWidth / 2, chartHeight - padding.bottom + 10)

      // Draw platform icon
      const iconSize = 20
      const iconY = chartHeight - padding.bottom + 30
      const iconX = x + barWidth / 2 - iconSize / 2

      ctx.beginPath()
      ctx.fillStyle = colors[i]
      ctx.arc(iconX + iconSize / 2, iconY + iconSize / 2, iconSize / 2, 0, Math.PI * 2)
      ctx.fill()
    })
  }, [])

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
}

// Mock influencer data
const influencerData = {
  name: "Alex Morgan",
  handle: "@alexlifestyle",
  avatar: "/placeholder.svg?height=100&width=100",
  coverImage: "/placeholder.svg?height=400&width=1200",
  niche: "Lifestyle",
  bio: "Lifestyle content creator sharing daily inspiration, fashion tips, and travel adventures. I work with brands that align with my values of sustainability and authenticity.",
  location: "New York, USA",
  languages: ["English", "Spanish"],
  followers: {
    instagram: 85000,
    tiktok: 40000,
    youtube: 25000,
    total: 150000,
  },
  engagement: 3.2,
  socialMedia: {
    instagram: "alexlifestyle",
    tiktok: "alexlifestyle",
    youtube: "AlexLifestyle",
    twitter: "alexlifestyle",
  },
  demographics: {
    ageRange: "18-34 (75%)",
    gender: "Female (65%), Male (35%)",
    topLocations: ["United States", "Canada", "United Kingdom"],
  },
  subscription: {
    plan: "Pro",
    renewalDate: "2024-08-15",
    features: [
      "Featured profile listing",
      "Unlimited portfolio items",
      "Direct outreach to brands (5/month)",
      "Advanced analytics dashboard",
    ],
  },
}

// Mock portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "Summer Fashion Collection",
    image: "/placeholder.svg?height=300&width=300",
    description: "Fashion campaign for summer collection launch",
    brand: "StyleBrand Co.",
    engagement: "4.5%",
    reach: "95K",
  },
  {
    id: 2,
    title: "Eco-Friendly Skincare",
    image: "/placeholder.svg?height=300&width=300",
    description: "Product review for eco-friendly skincare",
    brand: "EcoBeauty",
    engagement: "3.8%",
    reach: "78K",
  },
  {
    id: 3,
    title: "Sustainable Travel Guide",
    image: "/placeholder.svg?height=300&width=300",
    description: "Travel guide to sustainable destinations",
    brand: "TravelRight",
    engagement: "5.2%",
    reach: "110K",
  },
  {
    id: 4,
    title: "Home Decor Partnership",
    image: "/placeholder.svg?height=300&width=300",
    description: "Home decor partnership featuring sustainable products",
    brand: "EcoHome",
    engagement: "3.9%",
    reach: "82K",
  },
]

// Mock service packages
const servicePackages = [
  {
    id: 1,
    name: "Basic Post",
    description: "1 Instagram post + 1 Story",
    price: "$500",
    deliveryTime: "3-5 days",
  },
  {
    id: 2,
    name: "Premium Package",
    description: "2 Instagram posts + 3 Stories + 1 TikTok video",
    price: "$1000",
    deliveryTime: "7-10 days",
  },
  {
    id: 3,
    name: "Full Campaign",
    description: "Custom content package across all platforms",
    price: "Custom",
    deliveryTime: "14+ days",
  },
]

// Mock brand collaborations
const collaborations = [
  {
    id: 1,
    brand: "StyleBrand Co.",
    logo: "/placeholder.svg?height=50&width=50",
    campaign: "Summer Fashion Collection",
    status: "Completed",
    payment: "$1,500",
    date: "2024-05-15",
  },
  {
    id: 2,
    brand: "EcoBeauty",
    logo: "/placeholder.svg?height=50&width=50",
    campaign: "Skincare Product Launch",
    status: "In Progress",
    payment: "$1,000",
    date: "2024-06-10",
  },
  {
    id: 3,
    brand: "TravelRight",
    logo: "/placeholder.svg?height=50&width=50",
    campaign: "Sustainable Travel Guide",
    status: "Completed",
    payment: "$2,000",
    date: "2024-04-20",
  },
]

export default function InfluencerProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: influencerData.name,
    handle: influencerData.handle,
    niche: influencerData.niche,
    bio: influencerData.bio,
    location: influencerData.location,
    languages: influencerData.languages.join(", "),
    instagram: influencerData.socialMedia.instagram,
    tiktok: influencerData.socialMedia.tiktok,
    youtube: influencerData.socialMedia.youtube,
    twitter: influencerData.socialMedia.twitter,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
      setSaveSuccess(true)
      setTimeout(() => setSaveSuccess(false), 3000)
    }, 1500)
  }

  // Format follower count
  const formatFollowers = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M"
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K"
    }
    return count
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6">
            {/* Profile Header with Cover Image */}
            <div className="relative rounded-xl overflow-hidden">
              <div className="h-48 md:h-64 relative">
                <Image
                  src={influencerData.coverImage || "/placeholder.svg"}
                  alt={`${influencerData.name}'s cover`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex flex-col md:flex-row gap-4 items-start md:items-end">
                <Avatar className="w-20 h-20 md:w-24 md:h-24 border-4 border-background">
                  <AvatarImage src={influencerData.avatar} alt={influencerData.name} />
                  <AvatarFallback>{influencerData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-white">{influencerData.name}</h1>
                  <p className="text-white/80">{influencerData.handle}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? (
                      <>
                        <Edit className="mr-2 h-4 w-4" />
                        Cancel
                      </>
                    ) : (
                      <>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                      </>
                    )}
                  </Button>
                  <Button className="bg-brand hover:bg-brand-light text-white">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Preview Public Profile
                  </Button>
                </div>
              </div>
            </div>

            {saveSuccess && (
              <Alert className="bg-green-50 border-green-200 text-green-800">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription>Profile updated successfully!</AlertDescription>
              </Alert>
            )}

            {/* Tabs */}
            <Tabs defaultValue="profile">
              <TabsList className="grid grid-cols-5 md:w-fit">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="packages">Packages</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Main Profile Info */}
                  <div className="md:col-span-2 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Influencer Information</CardTitle>
                        <CardDescription>Your public profile information</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {isEditing ? (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" name="name" value={formData.name} onChange={handleChange} />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="handle">Handle</Label>
                                <Input id="handle" name="handle" value={formData.handle} onChange={handleChange} />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="niche">Primary Niche</Label>
                                <Select
                                  value={formData.niche}
                                  onValueChange={(value) => setFormData((prev) => ({ ...prev, niche: value }))}
                                >
                                  <SelectTrigger id="niche">
                                    <SelectValue placeholder="Select niche" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                                    <SelectItem value="Fashion">Fashion</SelectItem>
                                    <SelectItem value="Beauty">Beauty</SelectItem>
                                    <SelectItem value="Travel">Travel</SelectItem>
                                    <SelectItem value="Fitness">Fitness</SelectItem>
                                    <SelectItem value="Food">Food</SelectItem>
                                    <SelectItem value="Technology">Technology</SelectItem>
                                    <SelectItem value="Gaming">Gaming</SelectItem>
                                    <SelectItem value="Business">Business</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="location">Location</Label>
                                <Input
                                  id="location"
                                  name="location"
                                  value={formData.location}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="languages">Languages (comma separated)</Label>
                              <Input
                                id="languages"
                                name="languages"
                                value={formData.languages}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="bio">Bio</Label>
                              <Textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} rows={5} />
                            </div>
                            <div className="flex justify-end">
                              <Button
                                className="bg-brand hover:bg-brand-light text-white"
                                onClick={handleSave}
                                disabled={isSaving}
                              >
                                {isSaving ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                  </>
                                ) : (
                                  <>
                                    <Save className="mr-2 h-4 w-4" />
                                    Save Changes
                                  </>
                                )}
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h3 className="text-sm font-medium text-muted-foreground">Primary Niche</h3>
                                <p>{influencerData.niche}</p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                                <p>{influencerData.location}</p>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-muted-foreground">Languages</h3>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {influencerData.languages.map((language, index) => (
                                  <Badge key={index} variant="outline">
                                    {language}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <Separator />
                            <div>
                              <h3 className="text-sm font-medium text-muted-foreground mb-2">Bio</h3>
                              <p className="text-sm">{influencerData.bio}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Audience Demographics</CardTitle>
                        <CardDescription>Information about your audience</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h3 className="text-sm font-medium text-muted-foreground">Age Range</h3>
                              <p>{influencerData.demographics.ageRange}</p>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-muted-foreground">Gender Split</h3>
                              <p>{influencerData.demographics.gender}</p>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Top Locations</h3>
                            <div className="flex flex-wrap gap-2">
                              {influencerData.demographics.topLocations.map((location, index) => (
                                <Badge key={index} variant="secondary">
                                  {location}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="pt-2">
                            <Button variant="outline" size="sm">
                              <BarChart3 className="mr-2 h-4 w-4" />
                              View Detailed Demographics
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Subscription</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{influencerData.subscription.plan}</span>
                          <Badge className="bg-brand text-white">{influencerData.subscription.plan}</Badge>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Renewal Date</p>
                          <p>{new Date(influencerData.subscription.renewalDate).toLocaleDateString()}</p>
                        </div>
                        <Separator />
                        <div>
                          <p className="text-sm font-medium mb-2">Plan Features</p>
                          <ul className="space-y-2">
                            {influencerData.subscription.features.map((feature, index) => (
                              <li key={index} className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-brand mr-2 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full">Manage Subscription</Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Social Media</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {isEditing ? (
                          <div className="space-y-3">
                            <div className="space-y-2">
                              <Label htmlFor="instagram">Instagram</Label>
                              <Input
                                id="instagram"
                                name="instagram"
                                value={formData.instagram}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="tiktok">TikTok</Label>
                              <Input id="tiktok" name="tiktok" value={formData.tiktok} onChange={handleChange} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="youtube">YouTube</Label>
                              <Input id="youtube" name="youtube" value={formData.youtube} onChange={handleChange} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="twitter">Twitter</Label>
                              <Input id="twitter" name="twitter" value={formData.twitter} onChange={handleChange} />
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Instagram className="h-4 w-4 text-pink-600" />
                                <span>Instagram</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-brand">@{influencerData.socialMedia.instagram}</span>
                                <Badge>{formatFollowers(influencerData.followers.instagram)}</Badge>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                                <span>TikTok</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-brand">@{influencerData.socialMedia.tiktok}</span>
                                <Badge>{formatFollowers(influencerData.followers.tiktok)}</Badge>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Youtube className="h-4 w-4 text-red-600" />
                                <span>YouTube</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-brand">{influencerData.socialMedia.youtube}</span>
                                <Badge>{formatFollowers(influencerData.followers.youtube)}</Badge>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Twitter className="h-4 w-4 text-blue-500" />
                                <span>Twitter</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-brand">@{influencerData.socialMedia.twitter}</span>
                                <Badge>-</Badge>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Stats Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Total Followers</span>
                          <span className="font-bold">{formatFollowers(influencerData.followers.total)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Avg. Engagement Rate</span>
                          <span className="font-bold">{influencerData.engagement}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Collaborations</span>
                          <span className="font-bold">{collaborations.length}</span>
                        </div>
                        <Button variant="outline" className="w-full">
                          <BarChart3 className="mr-2 h-4 w-4" />
                          View Full Analytics
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Portfolio Tab */}
              <TabsContent value="portfolio" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Your Portfolio</h2>
                  <Button className="bg-brand hover:bg-brand-light text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Portfolio Item
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {portfolioItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="relative aspect-square">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Brand: {item.brand}</span>
                          <div className="flex gap-3">
                            <Badge variant="outline">{item.engagement}</Badge>
                            <Badge variant="outline">{item.reach}</Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-2 p-4 pt-0">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                          Delete
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio Tips</CardTitle>
                    <CardDescription>Maximize your chances of getting brand deals</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-brand/10 p-2 rounded-full">
                        <CheckCircle className="h-4 w-4 text-brand" />
                      </div>
                      <div>
                        <h3 className="font-medium">Showcase Diverse Content</h3>
                        <p className="text-sm text-muted-foreground">
                          Include a variety of content types and styles to demonstrate your versatility.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-brand/10 p-2 rounded-full">
                        <CheckCircle className="h-4 w-4 text-brand" />
                      </div>
                      <div>
                        <h3 className="font-medium">Highlight Brand Collaborations</h3>
                        <p className="text-sm text-muted-foreground">
                          Prioritize showcasing your best brand partnerships to attract similar opportunities.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-brand/10 p-2 rounded-full">
                        <CheckCircle className="h-4 w-4 text-brand" />
                      </div>
                      <div>
                        <h3 className="font-medium">Include Performance Metrics</h3>
                        <p className="text-sm text-muted-foreground">
                          Add engagement rates and reach numbers to demonstrate your content's effectiveness.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Packages Tab */}
              <TabsContent value="packages" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Your Service Packages</h2>
                  <Button className="bg-brand hover:bg-brand-light text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Package
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {servicePackages.map((pkg) => (
                    <Card key={pkg.id} className="flex flex-col">
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <CardTitle>{pkg.name}</CardTitle>
                          <Badge className="bg-brand text-white">{pkg.price}</Badge>
                        </div>
                        <CardDescription>{pkg.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Package className="h-4 w-4 mr-2" />
                          Delivery Time: {pkg.deliveryTime}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Platform Fee (10%)</span>
                            <span className="text-sm">-${Number.parseInt(pkg.price.replace(/[^0-9]/g, "")) * 0.1}</span>
                          </div>
                          <div className="flex items-center justify-between font-medium">
                            <span>You Receive</span>
                            <span>${Number.parseInt(pkg.price.replace(/[^0-9]/g, "")) * 0.9}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                          Delete
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Custom Packages</CardTitle>
                    <CardDescription>Offer tailored solutions for brands with specific needs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      In addition to your standard packages, you can create custom offers for brands based on their
                      specific requirements. This allows for more flexibility and higher-value collaborations.
                    </p>
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <h3 className="font-medium">Custom Quote Requests</h3>
                        <p className="text-sm text-muted-foreground">You have 2 pending custom quote requests</p>
                      </div>
                      <Button variant="outline">View Requests</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Overview</CardTitle>
                    <CardDescription>Your key metrics at a glance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-4">
                      <div className="p-4 bg-muted rounded-lg text-center">
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Followers</h3>
                        <p className="text-2xl font-bold">{formatFollowers(influencerData.followers.total)}</p>
                        <p className="text-xs text-green-600">+5.2% this month</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg text-center">
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Engagement Rate</h3>
                        <p className="text-2xl font-bold">{influencerData.engagement}%</p>
                        <p className="text-xs text-green-600">+0.3% this month</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg text-center">
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Brand Deals</h3>
                        <p className="text-2xl font-bold">{collaborations.length}</p>
                        <p className="text-xs text-green-600">+1 this month</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg text-center">
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Earnings</h3>
                        <p className="text-2xl font-bold">$4,500</p>
                        <p className="text-xs text-green-600">+$1,000 this month</p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                      <div className="bg-muted rounded-md overflow-hidden p-4">
                        <div className="mb-4">
                          <h4 className="font-medium">Follower Growth</h4>
                          <p className="text-sm text-muted-foreground">Last 6 months</p>
                        </div>
                        <div className="h-[200px]">
                          <FollowerGrowthChart />
                        </div>
                      </div>
                      <div className="bg-muted rounded-md overflow-hidden p-4">
                        <div className="mb-4">
                          <h4 className="font-medium">Engagement by Platform</h4>
                          <p className="text-sm text-muted-foreground">Current month</p>
                        </div>
                        <div className="h-[200px]">
                          <EngagementChart />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>Platform Breakdown</CardTitle>
                          <CardDescription>Followers and engagement by platform</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Instagram className="h-4 w-4 text-pink-600" />
                                <span>Instagram</span>
                              </div>
                              <div>
                                <span className="font-medium">
                                  {formatFollowers(influencerData.followers.instagram)}
                                </span>
                                <span className="text-sm text-muted-foreground ml-2">(3.5% engagement)</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                                <span>TikTok</span>
                              </div>
                              <div>
                                <span className="font-medium">{formatFollowers(influencerData.followers.tiktok)}</span>
                                <span className="text-sm text-muted-foreground ml-2">(5.2% engagement)</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Youtube className="h-4 w-4 text-red-600" />
                                <span>YouTube</span>
                              </div>
                              <div>
                                <span className="font-medium">{formatFollowers(influencerData.followers.youtube)}</span>
                                <span className="text-sm text-muted-foreground ml-2">(2.8% engagement)</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Recent Earnings</CardTitle>
                          <CardDescription>Your recent brand collaborations</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {collaborations.map((collab) => (
                              <div key={collab.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src={collab.logo} alt={collab.brand} />
                                    <AvatarFallback>{collab.brand.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{collab.brand}</p>
                                    <p className="text-xs text-muted-foreground">{collab.date}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge
                                    className={
                                      collab.status === "Completed"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-blue-100 text-blue-800"
                                    }
                                  >
                                    {collab.status}
                                  </Badge>
                                  <span className="font-medium">{collab.payment}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

