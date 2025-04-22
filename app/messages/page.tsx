"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Search, MessageSquare, Star, Filter } from "lucide-react"
import { influencersData } from "@/data/influencers-data"

// Mock conversation data
const mockConversations = [
  {
    id: "1",
    influencerId: 1,
    messages: [
      {
        id: "1",
        sender: "influencer",
        text: "Hi there! Thanks for reaching out. How can I help you with your campaign?",
        timestamp: "2024-06-15T10:30:00Z",
        read: true,
      },
      {
        id: "2",
        sender: "brand",
        text: "Hello! We're launching a new product line next month and we're interested in working with you for the promotion.",
        timestamp: "2024-06-15T10:35:00Z",
        read: true,
      },
      {
        id: "3",
        sender: "influencer",
        text: "That sounds exciting! I'd love to hear more about your product line. What kind of content are you looking for?",
        timestamp: "2024-06-15T10:40:00Z",
        read: true,
      },
      {
        id: "4",
        sender: "brand",
        text: "We're thinking about a series of Instagram posts and stories showcasing the products in use. Would that work with your content style?",
        timestamp: "2024-06-15T10:45:00Z",
        read: true,
      },
      {
        id: "5",
        sender: "influencer",
        text: "That aligns perfectly with my content. I typically create lifestyle content that naturally incorporates products. Would you like to see some examples of previous brand collaborations?",
        timestamp: "2024-06-15T10:50:00Z",
        read: true,
      },
    ],
  },
  {
    id: "2",
    influencerId: 2,
    messages: [
      {
        id: "1",
        sender: "influencer",
        text: "Hello! I saw you viewed my profile. Let me know if you have any questions about potential collaborations.",
        timestamp: "2024-06-14T14:20:00Z",
        read: true,
      },
    ],
  },
  {
    id: "3",
    influencerId: 3,
    messages: [
      {
        id: "1",
        sender: "brand",
        text: "Hi there! We're interested in your fitness content for our new protein shake line. Would you be available for a collaboration next month?",
        timestamp: "2024-06-13T09:15:00Z",
        read: true,
      },
      {
        id: "2",
        sender: "influencer",
        text: "Hi! Thanks for reaching out. I'd definitely be interested in learning more about your protein shake line. Could you share some details about the product and your campaign goals?",
        timestamp: "2024-06-13T11:30:00Z",
        read: true,
      },
    ],
  },
]

export default function MessagesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Format timestamp to readable time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  // Format timestamp to date if it's a different day
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return "Today"
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday"
    } else {
      return date.toLocaleDateString()
    }
  }

  // Filter conversations based on search and active tab
  const filteredConversations = mockConversations.filter((conv) => {
    const influencer = influencersData.find((inf) => inf.id === conv.influencerId)
    if (!influencer) return false

    const matchesSearch =
      influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.handle.toLowerCase().includes(searchTerm.toLowerCase())

    // For demo purposes, we'll consider conversations with id 1 and 2 as "active"
    // and conversation with id 3 as "archived"
    const isActive = conv.id === "1" || conv.id === "2"
    const isArchived = conv.id === "3"

    if (activeTab === "all") return matchesSearch
    if (activeTab === "active") return matchesSearch && isActive
    if (activeTab === "archived") return matchesSearch && isArchived

    return matchesSearch
  })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Messages</h1>
              <p className="text-muted-foreground">Manage your conversations with influencers</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search conversations..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="archived">Archived</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button variant="outline" className="md:w-auto w-full">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Conversations</CardTitle>
              </CardHeader>
              <CardContent>
                {filteredConversations.length > 0 ? (
                  <div className="space-y-1">
                    {filteredConversations.map((conv) => {
                      const influencer = influencersData.find((inf) => inf.id === conv.influencerId)
                      if (!influencer) return null

                      const lastMessage = conv.messages[conv.messages.length - 1]

                      return (
                        <Link
                          key={conv.id}
                          href={`/messages/${conv.influencerId}`}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted"
                        >
                          <Avatar>
                            <AvatarImage src={influencer.image || "/placeholder.svg"} alt={influencer.name} />
                            <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline">
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{influencer.name}</h3>
                                <Badge variant="outline" className="text-xs">
                                  {influencer.niche}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2">
                                {lastMessage && (
                                  <span className="text-xs text-muted-foreground">
                                    {formatDate(lastMessage.timestamp)} at {formatTime(lastMessage.timestamp)}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                              <span>{influencer.handle}</span>
                              <span>•</span>
                              <div className="flex items-center">
                                <Star className="h-3 w-3 fill-brand text-brand mr-1" />
                                <span>{influencer.rating}</span>
                              </div>
                            </div>
                            {lastMessage && (
                              <p className="text-sm text-muted-foreground mt-2 line-clamp-1">
                                {lastMessage.sender === "brand" ? "You: " : ""}
                                {lastMessage.text}
                              </p>
                            )}
                          </div>
                          <Button variant="ghost" size="sm" className="shrink-0">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </Link>
                      )
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center mb-4">
                      <MessageSquare className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No conversations found</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                      {searchTerm
                        ? "Try adjusting your search terms"
                        : "Start a conversation with an influencer by visiting their profile"}
                    </p>
                    <Link href="/discover">
                      <Button className="bg-brand hover:bg-brand-light text-white">Discover Influencers</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
