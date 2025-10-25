"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { QrCode, Sprout, Warehouse, Truck, Store, Leaf, Coins } from "lucide-react"
import { useGetBatchData } from "@/lib/useGetBatchData"

export default function ConsumerDashboard() {
  const [qrCode, setQrCode] = useState("")
  const [showProduct, setShowProduct] = useState(false)
  const [batchData, setBatchData] = useState<any>(null)
  
  const { getBatchData, loading, error } = useGetBatchData()

  const handleScan = async () => {
    if (qrCode) {
      console.log('🔍 Fetching data for batch:', qrCode)
      
      const data = await getBatchData(qrCode)
      
      if (data) {
        console.log('✅ Batch data received:', data)
        setBatchData(data)
        setShowProduct(true)
      } else {
        alert('❌ Batch not found or error occurred. Check console for details.')
      }
    }
  }

  // Use REAL data if available, otherwise show placeholder
  const timeline = batchData ? [
    {
      stage: "Farm",
      icon: Sprout,
      date: batchData.harvestDate,
      location: batchData.location,
      status: "complete",
      details: `Farmer: ${batchData.farmerName}, Crop: ${batchData.cropName}`,
    },
    {
      stage: "Verified on Blockchain",
      icon: Warehouse,
      date: "Today",
      location: "Algorand TestNet",
      status: "complete",
      details: `Batch ID: ${batchData.batchId}`,
    },
    {
      stage: "Distribution",
      icon: Truck,
      date: "Pending",
      location: "Regional Hub",
      status: "current",
    },
    {
      stage: "Retail",
      icon: Store,
      date: "Pending",
      location: "Your Local Store",
      status: "pending",
    },
  ] : []

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
            <CardDescription>Enter the batch ID from your product's QR code</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="qrInput" className="sr-only">
                  Batch ID
                </Label>
                <Input
                  id="qrInput"
                  placeholder="Enter batch ID (e.g., BATCH-1761381515486)"
                  value={qrCode}
                  onChange={(e) => setQrCode(e.target.value)}
                  className="border-[#ECF0F1] h-12"
                />
              </div>
              <Button
                onClick={handleScan}
                disabled={loading}
                className="bg-gradient-to-r from-[#2ECC71] to-[#145A32] hover:opacity-90 text-white font-semibold px-8 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <QrCode className="w-5 h-5 mr-2" />
                {loading ? 'Verifying...' : 'Verify'}
              </Button>
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2">❌ {error}</p>
            )}
          </CardContent>
        </Card>

        {showProduct && batchData && (
          <>
            {/* Batch Details Card */}
            <Card className="mb-8 border-[#ECF0F1] shadow-lg bg-gradient-to-br from-[#2ECC71]/10 to-[#145A32]/10">
              <CardHeader>
                <CardTitle className="text-2xl text-[#145A32]">✅ Verified Batch</CardTitle>
                <CardDescription>Authenticated on Algorand Blockchain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[#145A32]/70">Batch ID</p>
                    <p className="font-semibold text-[#145A32]">{batchData.batchId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#145A32]/70">Farmer</p>
                    <p className="font-semibold text-[#145A32]">{batchData.farmerName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#145A32]/70">Location</p>
                    <p className="font-semibold text-[#145A32]">{batchData.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#145A32]/70">Crop</p>
                    <p className="font-semibold text-[#145A32]">{batchData.cropName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#145A32]/70">Harvest Date</p>
                    <p className="font-semibold text-[#145A32]">{batchData.harvestDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                            {item.details && (
                              <p className="text-xs text-[#145A32]/60 mt-2 bg-[#2ECC71]/10 px-2 py-1 rounded">{item.details}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Rest of your cards (Eco-Rating, Rewards) stay the same... */}
          </>
        )}

        {!showProduct && (
          <div className="text-center py-16">
            <QrCode className="w-24 h-24 mx-auto mb-4 text-[#145A32]/20" />
            <p className="text-lg text-[#145A32]/50">Enter a batch ID above to view product details</p>
          </div>
        )}
      </div>
    </div>
  )
}
