"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Building,
  Users,
  CreditCard,
  MessageSquare,
  Edit,
  Save,
  Trash2,
  Plus,
  CheckCircle,
  Loader2,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Campaign Chart Component
const CampaignChart = () => {
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

    // Mock data for campaign performance
    const data = [3.2, 3.5, 3.8, 4.2, 3.9, 4.5]
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
      const y = chartHeight - padding.bottom - (value / maxValue) * innerHeight

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
      const y = chartHeight - padding.bottom - (value / maxValue) * innerHeight

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
      const y = chartHeight - padding.bottom - (value / maxValue) * innerHeight

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

// Mock brand data
const brandData = {
  name: "TechGadgets Inc.",
  logo: "/placeholder.svg?height=100&width=100",
  industry: "Technology",
  website: "https://techgadgets.example.com",
  location: "San Francisco, CA",
  founded: "2015",
  size: "51-200 employees",
  about:
    "TechGadgets Inc. is a leading technology company specializing in innovative consumer electronics and smart home devices. We're passionate about creating products that seamlessly integrate into people's lives and enhance their daily experiences.",
  socialMedia: {
    instagram: "@techgadgets",
    twitter: "@techgadgets",
    facebook: "techgadgetsinc",
    linkedin: "techgadgets-inc",
  },
  targetAudience: {
    ageRange: "18-45",
    primaryGender: "All genders",
    interests: ["Technology", "Smart Home", "Gadgets", "Innovation"],
    locations: ["United States", "Canada", "Europe"],
  },
  subscription: {
    plan: "Professional",
    renewalDate: "2024-08-15",
    features: [
      "Up to 15 active campaigns",
      "Advanced search & filtering",
      "Unlimited influencer messaging",
      "Detailed analytics & reporting",
    ],
  },
}

// Mock campaign data
const campaignData = [
  {
    id: 1,
    name: "Summer Tech Launch",
    status: "Active",
    influencers: 5,
    budget: "$10,000",
    startDate: "2024-06-01",
    endDate: "2024-07-15",
    engagement: "4.2%",
    reach: "1.2M",
  },
  {
    id: 2,
    name: "Smart Home Awareness",
    status: "Completed",
    influencers: 8,
    budget: "$15,000",
    startDate: "2024-03-10",
    endDate: "2024-04-30",
    engagement: "3.8%",
    reach: "2.5M",
  },
  {
    id: 3,
    name: "Holiday Gift Guide",
    status: "Planning",
    influencers: 0,
    budget: "$20,000",
    startDate: "2024-11-01",
    endDate: "2024-12-25",
    engagement: "-",
    reach: "-",
  },
]

// Mock influencer collaborations
const collaborations = [
  {
    id: 1,
    name: "Alex Morgan",
    handle: "@alexlifestyle",
    avatar: "/placeholder.svg?height=100&width=100",
    campaign: "Summer Tech Launch",
    status: "In Progress",
    deliverables: "2 Instagram posts, 3 Stories",
    dueDate: "2024-06-30",
  },
  {
    id: 2,
    name: "Jamie Tech",
    handle: "@techwithjamie",
    avatar: "/placeholder.svg?height=100&width=100",
    campaign: "Summer Tech Launch",
    status: "Completed",
    deliverables: "1 YouTube video, 2 Instagram posts",
    dueDate: "2024-06-15",
  },
  {
    id: 3,
    name: "Travel with Tom",
    handle: "@tomtravels",
    avatar: "/placeholder.svg?height=100&width=100",
    campaign: "Smart Home Awareness",
    status: "Completed",
    deliverables: "3 Instagram posts, 1 Blog post",
    dueDate: "2024-04-20",
  },
]

export default function BrandProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: brandData.name,
    industry: brandData.industry,
    website: brandData.website,
    location: brandData.location,
    founded: brandData.founded,
    size: brandData.size,
    about: brandData.about,
    instagram: brandData.socialMedia.instagram,
    twitter: brandData.socialMedia.twitter,
    facebook: brandData.socialMedia.facebook,
    linkedin: brandData.socialMedia.linkedin,
    ageRange: brandData.targetAudience.ageRange,
    primaryGender: brandData.targetAudience.primaryGender,
    interests: brandData.targetAudience.interests.join(", "),
    locations: brandData.targetAudience.locations.join(", "),
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

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 md:h-20 md:w-20">
                  <AvatarImage src={brandData.logo} alt={brandData.name} />
                  <AvatarFallback>{brandData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">{brandData.name}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>{brandData.industry}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
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
                <Link href="/discover">
                  <Button className="bg-brand hover:bg-brand-light text-white">
                    <Users className="mr-2 h-4 w-4" />
                    Find Influencers
                  </Button>
                </Link>
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
              <TabsList className="grid grid-cols-4 md:w-fit">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Main Profile Info */}
                  <div className="md:col-span-2 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Brand Information</CardTitle>
                        <CardDescription>Your public brand profile information</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {isEditing ? (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="name">Brand Name</Label>
                                <Input id="name" name="name" value={formData.name} onChange={handleChange} />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="industry">Industry</Label>
                                <Select
                                  value={formData.industry}
                                  onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}
                                >
                                  <SelectTrigger id="industry">
                                    <SelectValue placeholder="Select industry" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Technology">Technology</SelectItem>
                                    <SelectItem value="Fashion">Fashion</SelectItem>
                                    <SelectItem value="Beauty">Beauty</SelectItem>
                                    <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
                                    <SelectItem value="Health & Fitness">Health & Fitness</SelectItem>
                                    <SelectItem value="Travel">Travel</SelectItem>
                                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                                    <SelectItem value="Home & Decor">Home & Decor</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="website">Website</Label>
                                <Input id="website" name="website" value={formData.website} onChange={handleChange} />
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
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="founded">Founded Year</Label>
                                <Input id="founded" name="founded" value={formData.founded} onChange={handleChange} />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="size">Company Size</Label>
                                <Select
                                  value={formData.size}
                                  onValueChange={(value) => setFormData((prev) => ({ ...prev, size: value }))}
                                >
                                  <SelectTrigger id="size">
                                    <SelectValue placeholder="Select size" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1-10 employees">1-10 employees</SelectItem>
                                    <SelectItem value="11-50 employees">11-50 employees</SelectItem>
                                    <SelectItem value="51-200 employees">51-200 employees</SelectItem>
                                    <SelectItem value="201-500 employees">201-500 employees</SelectItem>
                                    <SelectItem value="501+ employees">501+ employees</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="about">About</Label>
                              <Textarea
                                id="about"
                                name="about"
                                value={formData.about}
                                onChange={handleChange}
                                rows={5}
                              />
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
                                <h3 className="text-sm font-medium text-muted-foreground">Industry</h3>
                                <p>{brandData.industry}</p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-muted-foreground">Website</h3>
                                <p className="text-brand hover:underline">
                                  <a href={brandData.website} target="_blank" rel="noopener noreferrer">
                                    {brandData.website.replace(/^https?:\/\//, "")}
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                                <p>{brandData.location}</p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-muted-foreground">Founded</h3>
                                <p>{brandData.founded}</p>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-muted-foreground">Company Size</h3>
                              <p>{brandData.size}</p>
                            </div>
                            <Separator />
                            <div>
                              <h3 className="text-sm font-medium text-muted-foreground mb-2">About</h3>
                              <p className="text-sm">{brandData.about}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Target Audience</CardTitle>
                        <CardDescription>
                          Define your target audience to help us match you with the right influencers
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {isEditing ? (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="ageRange">Age Range</Label>
                                <Input
                                  id="ageRange"
                                  name="ageRange"
                                  value={formData.ageRange}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="primaryGender">Primary Gender</Label>
                                <Select
                                  value={formData.primaryGender}
                                  onValueChange={(value) => setFormData((prev) => ({ ...prev, primaryGender: value }))}
                                >
                                  <SelectTrigger id="primaryGender">
                                    <SelectValue placeholder="Select gender" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="All genders">All genders</SelectItem>
                                    <SelectItem value="Primarily female">Primarily female</SelectItem>
                                    <SelectItem value="Primarily male">Primarily male</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="interests">Interests (comma separated)</Label>
                              <Input
                                id="interests"
                                name="interests"
                                value={formData.interests}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="locations">Target Locations (comma separated)</Label>
                              <Input
                                id="locations"
                                name="locations"
                                value={formData.locations}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h3 className="text-sm font-medium text-muted-foreground">Age Range</h3>
                                <p>{brandData.targetAudience.ageRange}</p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-muted-foreground">Primary Gender</h3>
                                <p>{brandData.targetAudience.primaryGender}</p>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-muted-foreground mb-2">Interests</h3>
                              <div className="flex flex-wrap gap-2">
                                {brandData.targetAudience.interests.map((interest, index) => (
                                  <Badge key={index} variant="secondary">
                                    {interest}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-muted-foreground mb-2">Target Locations</h3>
                              <div className="flex flex-wrap gap-2">
                                {brandData.targetAudience.locations.map((location, index) => (
                                  <Badge key={index} variant="outline">
                                    {location}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
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
                          <span className="font-medium">{brandData.subscription.plan}</span>
                          <Badge className="bg-brand text-white">{brandData.subscription.plan}</Badge>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Renewal Date</p>
                          <p>{new Date(brandData.subscription.renewalDate).toLocaleDateString()}</p>
                        </div>
                        <Separator />
                        <div>
                          <p className="text-sm font-medium mb-2">Plan Features</p>
                          <ul className="space-y-2">
                            {brandData.subscription.features.map((feature, index) => (
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
                              <Label htmlFor="twitter">Twitter</Label>
                              <Input id="twitter" name="twitter" value={formData.twitter} onChange={handleChange} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="facebook">Facebook</Label>
                              <Input id="facebook" name="facebook" value={formData.facebook} onChange={handleChange} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="linkedin">LinkedIn</Label>
                              <Input id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} />
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span>Instagram</span>
                              <span className="text-brand">{brandData.socialMedia.instagram}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Twitter</span>
                              <span className="text-brand">{brandData.socialMedia.twitter}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Facebook</span>
                              <span className="text-brand">{brandData.socialMedia.facebook}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>LinkedIn</span>
                              <span className="text-brand">{brandData.socialMedia.linkedin}</span>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Campaigns Tab */}
              <TabsContent value="campaigns" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Your Campaigns</h2>
                  <Button className="bg-brand hover:bg-brand-light text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    New Campaign
                  </Button>
                </div>

                <div className="grid gap-4">
                  {campaignData.map((campaign) => (
                    <Card key={campaign.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-lg">{campaign.name}</h3>
                              <Badge
                                className={
                                  campaign.status === "Active"
                                    ? "bg-green-100 text-green-800"
                                    : campaign.status === "Completed"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-yellow-100 text-yellow-800"
                                }
                              >
                                {campaign.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {campaign.startDate} to {campaign.endDate}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-4 md:gap-6">
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">Budget</p>
                              <p className="font-medium">{campaign.budget}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">Influencers</p>
                              <p className="font-medium">{campaign.influencers}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">Engagement</p>
                              <p className="font-medium">{campaign.engagement}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">Reach</p>
                              <p className="font-medium">{campaign.reach}</p>
                            </div>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Analytics</CardTitle>
                    <CardDescription>Overview of your campaign performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] rounded-md overflow-hidden">
                      <div className="p-4 h-full">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <h4 className="font-medium">Campaign Performance</h4>
                            <p className="text-sm text-muted-foreground">Last 6 months</p>
                          </div>
                          <Select defaultValue="engagement">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select metric" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="engagement">Engagement Rate</SelectItem>
                              <SelectItem value="reach">Reach</SelectItem>
                              <SelectItem value="conversions">Conversions</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="h-[calc(100%-40px)]">
                          <CampaignChart />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Collaborations Tab */}
              <TabsContent value="collaborations" className="space-y-6">
                <h2 className="text-xl font-bold">Active Collaborations</h2>

                <div className="grid gap-4">
                  {collaborations.map((collab) => (
                    <Card key={collab.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={collab.avatar} alt={collab.name} />
                              <AvatarFallback>{collab.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{collab.name}</h3>
                              <p className="text-sm text-muted-foreground">{collab.handle}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Campaign</p>
                              <p className="font-medium">{collab.campaign}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Status</p>
                              <Badge
                                className={
                                  collab.status === "Completed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-blue-100 text-blue-800"
                                }
                              >
                                {collab.status}
                              </Badge>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Due Date</p>
                              <p className="font-medium">{collab.dueDate}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Message
                              </Button>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <p className="text-sm text-muted-foreground">Deliverables</p>
                          <p>{collab.deliverables}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Button variant="outline">View All Collaborations</Button>
                </div>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences and security settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Email Notifications</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="new-messages">New messages</Label>
                          <Switch id="new-messages" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="campaign-updates">Campaign updates</Label>
                          <Switch id="campaign-updates" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="influencer-applications">Influencer applications</Label>
                          <Switch id="influencer-applications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="billing-notifications">Billing notifications</Label>
                          <Switch id="billing-notifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="marketing-emails">Marketing emails</Label>
                          <Switch id="marketing-emails" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Password</h3>
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        <Button className="w-fit">Update Password</Button>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Billing Information</h3>
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="payment-method">Payment Method</Label>
                          <div className="flex items-center gap-2 p-2 border rounded-md">
                            <CreditCard className="h-5 w-5 text-muted-foreground" />
                            <span>•••• •••• •••• 4242</span>
                            <Badge className="ml-auto">Default</Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline">Update Payment Method</Button>
                          <Button variant="outline">View Billing History</Button>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-destructive">Danger Zone</h3>
                      <div className="grid gap-4">
                        <div className="p-4 border border-destructive/20 rounded-md bg-destructive/5">
                          <h4 className="font-medium mb-2">Delete Account</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            Permanently delete your account and all associated data. This action cannot be undone.
                          </p>
                          <Button variant="destructive" size="sm">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Account
                          </Button>
                        </div>
                      </div>
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

