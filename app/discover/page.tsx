"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Instagram, Twitter, Youtube, Facebook, TwitterIcon as TikTok, Search, Filter, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Replace the mock influencers array with the Ghanaian influencers
const influencers = [
  {
    id: 1,
    name: "Sweet Adjeley",
    handle: "@sweetadjeley",
    avatar: "sweetadjeteyPP.jpeg",
    niche: "Food",
    followers: 520000,
    engagement: 4.8,
    platforms: ["youtube", "instagram", "facebook"],
    rating: 4.9,
    location: "Accra, Ghana",
    bio: "Prominent Ghanaian food influencer sharing healthy eating tips and traditional Ghanaian recipes. Known for practical tutorials and a warm personality that makes cooking accessible to everyone.",
    featuredImage: "SweetadjeteyBP.jpeg",
    priceRange: "$800-1500",
    affiliateProgram: true,
  },
  {
    id: 2,
    name: "Chef Alhaji",
    handle: "@alhaji_theozzy",
    avatar: "chefalhajyPP.jpg",
    niche: "Food",
    followers: 310000,
    engagement: 5.2,
    platforms: ["instagram", "tiktok"],
    rating: 4.7,
    location: "Accra, Ghana",
    bio: "Prominent Ghanaian food influencer and private chef based in Accra. Known for engaging content on food preparation and culinary creativity, specializing in both traditional and modern Ghanaian cuisine.",
    featuredImage: "chefalhajyBP.jpg",
    priceRange: "$700-1200",
    affiliateProgram: true,
  },
  {
    id: 3,
    name: "Stannerking Bash",
    handle: "@kulbilafitness",
    avatar: "Stannerking bashPP.jpg",
    niche: "Fitness",
    followers: 284000,
    engagement: 6.1,
    platforms: ["instagram", "youtube"],
    rating: 4.8,
    location: "Kumasi, Ghana",
    bio: " a prominent figure in Ghana’s fitness scene, known for his rigorous workout routines and motivational content. His social media platforms feature high-intensity training sessions and personal transformation stories that inspire his followers to push their limits. Bash actively engages with his community through fitness challenges and workshops, fostering a supportive environment for fitness enthusiasts of all levels",
    featuredImage: "Stannerking bashBP.webp",
    priceRange: "$600-1000",
  },
  {
    id: 4,
    name: "Afua Rida",
    handle: "@afuarida",
    avatar: "afuaridaPP.jpg",
    niche: "Fashion",
    followers: 195000,
    engagement: 3.9,
    platforms: ["instagram", "tiktok", "youtube"],
    rating: 4.6,
    location: "Accra, Ghana",
    bio: "Fashion stylist and blogger who incorporates natural hair styling into her fashion narratives. Offers insights into maintaining and styling natural hair to complement various outfits.",
    featuredImage: "afuaridaBP.jpg",
    priceRange: "$500-1200",
    affiliateProgram: true,
  },
  {
    id: 5,
    name: "Sika Osei",
    handle: "@sikaosei",
    avatar: "sikaoseiPP.jpg",
    niche: "Beauty",
    followers: 230000,
    engagement: 4.3,
    platforms: ["instagram", "youtube"],
    rating: 4.7,
    location: "Accra, Ghana",
    bio: "Actress and TV Host known for versatile natural hairstyles. Shares her hair journey and tips with her audience, encouraging them to embrace their natural textures.",
    featuredImage: "sikaoseiBP.jpg",
    priceRange: "$800-2000",
  },
  {
    id: 6,
    name: "Akosua Vee",
    handle: "@akosuavee",
    avatar: "akosuaveePP.webp",
    niche: "Fashion",
    followers: 175000,
    engagement: 3.7,
    platforms: ["instagram", "facebook"],
    rating: 4.5,
    location: "Accra, Ghana",
    bio: "Fashion blogger and stylist who has worked with celebrities, blending modern and traditional looks uniquely. Known for her distinctive approach to Ghanaian fashion with a contemporary twist.",
    featuredImage: "akosuaveeBP.jpg",
    priceRange: "$500-1000",
  },
  {
    id: 7,
    name: "Debbie Beeko",
    handle: "@bjuku_diy",
    avatar: "debbiebeekoPP.jpg",
    niche: "Fashion",
    followers: 120000,
    engagement: 4.5,
    platforms: ["instagram", "tiktok"],
    rating: 4.6,
    location: "Tema, Ghana",
    bio: "Founder of BJUKU_DIY clothing brand, sharing chic loungewear and stylish dresses. Inspires fashion enthusiasts with her DIY approach to creating unique and affordable fashion pieces.",
    featuredImage: "debbiebeekoBP.jpEg",
    priceRange: "$400-800",
    affiliateProgram: true,
  },
]

// Platform icon mapping
const platformIcons = {
  instagram: <Instagram className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
  youtube: <Youtube className="h-4 w-4" />,
  facebook: <Facebook className="h-4 w-4" />,
  tiktok: <TikTok className="h-4 w-4" />,
}

export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedNiche, setSelectedNiche] = useState("all")
  const [followerRange, setFollowerRange] = useState([0, 1000000])
  const [showFilters, setShowFilters] = useState(false)
  const [selectedAffiliateProgram, setSelectedAffiliateProgram] = useState("all")

  // Filter influencers based on search and filters
  const filteredInfluencers = influencers.filter((influencer) => {
    const matchesSearch =
      influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.niche.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesNiche = selectedNiche === "all" || influencer.niche === selectedNiche

    const matchesFollowers = influencer.followers >= followerRange[0] && influencer.followers <= followerRange[1]

    const matchesAffiliate =
      selectedAffiliateProgram === "all" || (selectedAffiliateProgram === "affiliate" && influencer.affiliateProgram) // Assuming an 'affiliateProgram' property exists

    return matchesSearch && matchesNiche && matchesFollowers && matchesAffiliate
  })

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
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Discover Influencers</h1>
              <p className="text-muted-foreground">
                Find the perfect influencers for your brand based on niche, audience size, and engagement rates
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name, niche, or keywords..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" className="md:w-auto w-full" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <div className="grid gap-4 p-4 border rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Niche</label>
                    <Select value={selectedNiche} onValueChange={setSelectedNiche}>
                      <SelectTrigger>
                        <SelectValue placeholder="All niches" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All niches</SelectItem>
                        <SelectItem value="Food">Food</SelectItem>
                        <SelectItem value="Fitness">Fitness</SelectItem>
                        <SelectItem value="Fashion">Fashion</SelectItem>
                        <SelectItem value="Beauty">Beauty</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium">Followers</label>
                      <span className="text-sm text-muted-foreground">
                        {formatFollowers(followerRange[0])} - {formatFollowers(followerRange[1])}
                      </span>
                    </div>
                    <Slider
                      defaultValue={[0, 1000000]}
                      max={1000000}
                      step={10000}
                      value={followerRange}
                      onValueChange={setFollowerRange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Affiliate Program</label>
                    <Select value={selectedAffiliateProgram} onValueChange={setSelectedAffiliateProgram}>
                      <SelectTrigger>
                        <SelectValue placeholder="All influencers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All influencers</SelectItem>
                        <SelectItem value="affiliate">Affiliate program participants</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedNiche("all")
                      setFollowerRange([0, 1000000])
                      setSelectedAffiliateProgram("all")
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            )}

            {/* Featured Influencers Section */}
            {showFilters && filteredInfluencers.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Featured Influencers</h2>
                  <Link href="/featured-listings" className="text-sm text-brand hover:underline">
                    Learn about featured listings
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredInfluencers.slice(0, 3).map((influencer) => (
                    <Card key={`featured-${influencer.id}`} className="overflow-hidden border-brand">
                      <div className="absolute top-0 right-0 bg-brand text-white text-xs font-medium px-2 py-1 rounded-bl-lg">
                        Featured
                      </div>
                      <div className="relative h-48">
                        <Image
                          src={influencer.featuredImage || "/placeholder.svg"}
                          alt={`${influencer.name}'s content`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar>
                            <AvatarImage src={influencer.avatar} alt={influencer.name} />
                            <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{influencer.name}</h3>
                            <p className="text-sm text-muted-foreground">{influencer.handle}</p>
                          </div>
                          <div className="flex items-center ml-auto">
                            <Star className="h-4 w-4 fill-brand text-brand mr-1" />
                            <span className="text-sm font-medium">{influencer.rating}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-1.5">
                            <Badge variant="secondary" className="bg-brand/10 text-brand hover:bg-brand/20">
                              {influencer.niche}
                            </Badge>
                            <Badge variant="outline">{formatFollowers(influencer.followers)} followers</Badge>
                            <Badge variant="outline">{influencer.engagement}% engagement</Badge>
                          </div>
                          <div className="flex gap-1">
                            {influencer.platforms.map((platform) => (
                              <div key={platform} className="p-1.5 rounded-md bg-muted">
                                {platformIcons[platform]}
                              </div>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{influencer.bio}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between p-4 pt-0">
                        <div className="text-sm">
                          <span className="font-medium">{influencer.priceRange}</span>
                          <span className="text-muted-foreground"> per post</span>
                        </div>
                        <Link href={`/influencer/${influencer.id}`}>
                          <Button size="sm" className="bg-brand hover:bg-brand-light text-white">
                            View Profile
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInfluencers.map((influencer) => (
                <Card key={influencer.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={influencer.featuredImage || "/placeholder.svg"}
                      alt={`${influencer.name}'s content`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarImage src={influencer.avatar} alt={influencer.name} />
                        <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{influencer.name}</h3>
                        <p className="text-sm text-muted-foreground">{influencer.handle}</p>
                      </div>
                      <div className="flex items-center ml-auto">
                        <Star className="h-4 w-4 fill-brand text-brand mr-1" />
                        <span className="text-sm font-medium">{influencer.rating}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="secondary" className="bg-brand/10 text-brand hover:bg-brand/20">
                          {influencer.niche}
                        </Badge>
                        <Badge variant="outline">{formatFollowers(influencer.followers)} followers</Badge>
                        <Badge variant="outline">{influencer.engagement}% engagement</Badge>
                      </div>
                      <div className="flex gap-1">
                        {influencer.platforms.map((platform) => (
                          <div key={platform} className="p-1.5 rounded-md bg-muted">
                            {platformIcons[platform]}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{influencer.bio}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <div className="text-sm">
                      <span className="font-medium">{influencer.priceRange}</span>
                      <span className="text-muted-foreground"> per post</span>
                    </div>
                    <Link href={`/influencer/${influencer.id}`}>
                      <Button size="sm" className="bg-brand hover:bg-brand-light text-white">
                        View Profile
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredInfluencers.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No influencers found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

