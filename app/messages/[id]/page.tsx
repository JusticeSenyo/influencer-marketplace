"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Send, Paperclip, Phone, Video, Info, ChevronLeft, MoreHorizontal } from "lucide-react"
import { influencersData } from "@/data/influencers-data"

// Always use influencer ID 1 for the demo
const DEMO_INFLUENCER_ID = 1

// Mock conversation data for influencer ID 1
const mockConversation = {
  id: "1",
  influencerId: DEMO_INFLUENCER_ID,
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
}

// Message templates for quick replies
const messageTemplates = [
  "Hi! I'm interested in working with you for our upcoming campaign.",
  "Could you share your rates for Instagram posts and stories?",
  "What's your availability for a campaign next month?",
  "Do you have experience promoting products in our industry?",
  "Would you be open to an affiliate marketing arrangement?",
]

export default function ChatPage() {
  const [influencer, setInfluencer] = useState(null)
  const [conversation, setConversation] = useState(mockConversation)
  const [newMessage, setNewMessage] = useState("")
  const [showTemplates, setShowTemplates] = useState(false)

  const messagesEndRef = useRef(null)

  // Always use influencer ID 1 for the demo
  useEffect(() => {
    const demoInfluencer = influencersData.find((inf) => inf.id === DEMO_INFLUENCER_ID)
    setInfluencer(demoInfluencer)
  }, [])

  // Scroll to bottom of messages when conversation changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [conversation])

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

  // Send a new message
  const sendMessage = (text = newMessage) => {
    if (!text.trim()) return

    const newMsg = {
      id: `new-${Date.now()}`,
      sender: "brand",
      text,
      timestamp: new Date().toISOString(),
      read: false,
    }

    const updatedConversation = {
      ...conversation,
      messages: [...conversation.messages, newMsg],
    }

    setConversation(updatedConversation)
    setNewMessage("")

    // Simulate influencer reply after a delay
    setTimeout(() => {
      const replyMsg = {
        id: `new-${Date.now()}`,
        sender: "influencer",
        text: "Thanks for your message! I'll get back to you as soon as possible.",
        timestamp: new Date().toISOString(),
        read: false,
      }

      setConversation({
        ...updatedConversation,
        messages: [...updatedConversation.messages, replyMsg],
      })
    }, 2000)
  }

  // Handle template selection
  const handleTemplateSelect = (template) => {
    sendMessage(template)
    setShowTemplates(false)
  }

  if (!influencer) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1 flex items-center justify-center">
          <p>Loading...</p>
        </div>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col h-[calc(100vh-12rem)] md:h-[calc(100vh-14rem)]">
            <div className="mb-4">
              <Link
                href={`/influencer/${influencer.id}`}
                className="flex items-center text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span>Back to profile</span>
              </Link>
            </div>

            <div className="flex flex-col border rounded-lg overflow-hidden h-full">
              {/* Chat header */}
              <div className="flex items-center justify-between p-3 border-b bg-muted/50">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={influencer.image || "/placeholder.svg"} alt={influencer.name} />
                    <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold">{influencer.name}</h2>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-muted-foreground">{influencer.handle}</p>
                      <Badge variant="outline" className="text-xs">
                        {influencer.niche}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" title="Call">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Video call">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Info">
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {conversation.messages.map((message, index) => {
                  const prevMessage = index > 0 ? conversation.messages[index - 1] : null
                  const showDate = !prevMessage || formatDate(prevMessage.timestamp) !== formatDate(message.timestamp)

                  return (
                    <div key={message.id}>
                      {showDate && (
                        <div className="flex justify-center my-4">
                          <Badge variant="outline" className="bg-background">
                            {formatDate(message.timestamp)}
                          </Badge>
                        </div>
                      )}
                      <div className={`flex ${message.sender === "brand" ? "justify-end" : "justify-start"}`}>
                        <div className="flex items-end gap-2 max-w-[80%]">
                          {message.sender === "influencer" && (
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={influencer.image || "/placeholder.svg"} alt={influencer.name} />
                              <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className={`px-4 py-2 rounded-lg ${
                              message.sender === "brand" ? "bg-brand text-white" : "bg-muted"
                            }`}
                          >
                            <p>{message.text}</p>
                            <p className="text-xs mt-1 opacity-70 text-right">{formatTime(message.timestamp)}</p>
                          </div>
                          {message.sender === "brand" && (
                            <div className="w-8 flex justify-center">
                              {message.read ? <span className="text-xs text-muted-foreground">Read</span> : null}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Message input */}
              <div className="p-3 border-t">
                {showTemplates && (
                  <div className="mb-3 p-2 bg-muted rounded-lg">
                    <h4 className="text-sm font-medium mb-2">Quick replies</h4>
                    <div className="space-y-2">
                      {messageTemplates.map((template, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full justify-start h-auto py-2 text-left"
                          onClick={() => handleTemplateSelect(template)}
                        >
                          {template}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowTemplates(!showTemplates)}
                    className={showTemplates ? "text-brand" : ""}
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        sendMessage()
                      }
                    }}
                    className="flex-1"
                  />
                  <Button
                    className="bg-brand hover:bg-brand-light text-white"
                    onClick={() => sendMessage()}
                    disabled={!newMessage.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
