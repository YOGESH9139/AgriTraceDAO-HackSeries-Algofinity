"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { QrCode, Sprout, Warehouse, Truck, Store, Leaf, Coins } from "lucide-react"

export default function ConsumerDashboard() {
  const [qrCode, setQrCode] = useState("")
  const [showProduct, setShowProduct] = useState(false)

  const handleScan = () => {
    if (qrCode) {
      setShowProduct(true)
    }
  }

  const timeline = [
    {
      stage: "Farm",
      icon: Sprout,
      date: "Jan 15, 2025",
      location: "Green Valley Farm, CA",
      status: "complete",
    },
    {
      stage: "Storage",
      icon: Warehouse,
      date: "Jan 18, 2025",
      location: "FreshKeep Facility",
      status: "complete",
    },
    {
      stage: "Distribution",
      icon: Truck,
      date: "Jan 20, 2025",
      location: "Regional Hub",
      status: "complete",
    },
    {
      stage: "Retail",
      icon: Store,
      date: "Jan 22, 2025",
      location: "Your Local Store",
      status: "current",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFEFE] to-[#ECF0F1] py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#145A32] mb-4">Consumer Dashboard</h1>
          <p className="text-lg text-[#145A32]/70">Scan QR codes to verify product authenticity and journey</p>
        </div>

        {/* QR Code Scanner */}
        <Card className="mb-8 border-[#ECF0F1] shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-[#145A32]">Scan Product QR Code</CardTitle>
            <CardDescription>Enter or scan the QR code from your product</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="qrInput" className="sr-only">
                  QR Code
                </Label>
                <Input
                  id="qrInput"
                  placeholder="Enter QR code (e.g., QR-ABC123)"
                  value={qrCode}
                  onChange={(e) => setQrCode(e.target.value)}
                  className="border-[#ECF0F1] h-12"
                />
              </div>
              <Button
                onClick={handleScan}
                className="bg-gradient-to-r from-[#2ECC71] to-[#145A32] hover:opacity-90 text-white font-semibold px-8 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <QrCode className="w-5 h-5 mr-2" />
                Verify
              </Button>
            </div>
          </CardContent>
        </Card>

        {showProduct && (
          <>
            {/* Product Timeline */}
            <Card className="mb-8 border-[#ECF0F1] shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#145A32]">Product Journey</CardTitle>
                <CardDescription>Track your product from farm to fork</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((item, index) => {
                    const Icon = item.icon
                    const isComplete = item.status === "complete"
                    const isCurrent = item.status === "current"

                    return (
                      <div key={index} className="relative">
                        {index < timeline.length - 1 && (
                          <div
                            className={`absolute left-6 top-14 w-0.5 h-12 ${
                              isComplete ? "bg-[#2ECC71]" : "bg-[#ECF0F1]"
                            }`}
                          />
                        )}
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                              isComplete
                                ? "bg-gradient-to-br from-[#2ECC71] to-[#145A32]"
                                : isCurrent
                                  ? "bg-gradient-to-br from-[#F39C12] to-[#2ECC71]"
                                  : "bg-[#ECF0F1]"
                            }`}
                          >
                            <Icon
                              className={`w-6 h-6 ${isComplete || isCurrent ? "text-white" : "text-[#145A32]/50"}`}
                            />
                          </div>
                          <div className="flex-1 pt-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-bold text-lg text-[#145A32]">{item.stage}</h3>
                              {isCurrent && (
                                <span className="text-xs font-semibold px-3 py-1 bg-[#F39C12]/20 text-[#F39C12] rounded-full">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-[#145A32]/70">{item.location}</p>
                            <p className="text-xs text-[#145A32]/50 mt-1">{item.date}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Green Score Card */}
              <Card className="border-[#ECF0F1] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#145A32] flex items-center gap-2">
                    <Leaf className="w-6 h-6 text-[#2ECC71]" />
                    Eco-Rating
                  </CardTitle>
                  <CardDescription>Environmental impact score</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#145A32]">Overall Score</span>
                      <span className="text-2xl font-bold text-[#2ECC71]">92/100</span>
                    </div>
                    <Progress value={92} className="h-3 bg-[#ECF0F1]" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#145A32]/70">Carbon Footprint</span>
                        <span className="text-sm font-semibold text-[#2ECC71]">Low</span>
                      </div>
                      <Progress value={88} className="h-2 bg-[#ECF0F1]" />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#145A32]/70">Water Usage</span>
                        <span className="text-sm font-semibold text-[#2ECC71]">Efficient</span>
                      </div>
                      <Progress value={95} className="h-2 bg-[#ECF0F1]" />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#145A32]/70">Organic Practices</span>
                        <span className="text-sm font-semibold text-[#2ECC71]">Certified</span>
                      </div>
                      <Progress value={100} className="h-2 bg-[#ECF0F1]" />
                    </div>
                  </div>

                  <div className="bg-[#2ECC71]/10 rounded-lg p-4 border border-[#2ECC71]/20">
                    <p className="text-sm text-[#145A32] leading-relaxed">
                      This product meets the highest sustainability standards with organic certification and minimal
                      environmental impact.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Rewards Wallet */}
              <Card className="border-[#ECF0F1] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#145A32] flex items-center gap-2">
                    <Coins className="w-6 h-6 text-[#F39C12]" />
                    Rewards Wallet
                  </CardTitle>
                  <CardDescription>Your ASA token balance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-br from-[#2ECC71] to-[#145A32] rounded-2xl p-6 text-white">
                    <p className="text-sm opacity-90 mb-2">Total Balance</p>
                    <p className="text-4xl font-bold mb-4">1,247 ASA</p>
                    <p className="text-sm opacity-75">≈ $124.70 USD</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#145A32]">Recent Rewards</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#ECF0F1]">
                        <div>
                          <p className="text-sm font-medium text-[#145A32]">Product Scan</p>
                          <p className="text-xs text-[#145A32]/60">2 hours ago</p>
                        </div>
                        <span className="text-sm font-bold text-[#2ECC71]">+10 ASA</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#ECF0F1]">
                        <div>
                          <p className="text-sm font-medium text-[#145A32]">Eco Choice Bonus</p>
                          <p className="text-xs text-[#145A32]/60">1 day ago</p>
                        </div>
                        <span className="text-sm font-bold text-[#2ECC71]">+25 ASA</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#ECF0F1]">
                        <div>
                          <p className="text-sm font-medium text-[#145A32]">DAO Vote</p>
                          <p className="text-xs text-[#145A32]/60">3 days ago</p>
                        </div>
                        <span className="text-sm font-bold text-[#2ECC71]">+15 ASA</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#F39C12] to-[#2ECC71] hover:opacity-90 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Redeem Rewards
                  </Button>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {!showProduct && (
          <div className="text-center py-16">
            <QrCode className="w-24 h-24 mx-auto mb-4 text-[#145A32]/20" />
            <p className="text-lg text-[#145A32]/50">Enter a QR code above to view product details</p>
          </div>
        )}
      </div>
    </div>
  )
}
