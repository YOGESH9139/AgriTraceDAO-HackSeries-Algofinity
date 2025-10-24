import { Card, CardContent } from "@/components/ui/card"
import { Shield, Leaf, Users, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFEFE] to-[#ECF0F1] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#145A32] mb-6 text-center">About AgriTrace DAO</h1>
          <p className="text-xl text-[#145A32]/70 text-center mb-12 leading-relaxed">
            Building trust in the global food supply chain through blockchain technology
          </p>

          <div className="prose prose-lg max-w-none mb-12">
            <Card className="border-[#ECF0F1] shadow-lg mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-[#145A32] mb-4">Our Mission</h2>
                <p className="text-[#145A32]/70 leading-relaxed">
                  AgriTrace DAO is revolutionizing food traceability by leveraging Algorand's carbon-negative blockchain
                  to create transparent, verifiable records of every product's journey from farm to fork. We empower
                  farmers, protect consumers, and promote sustainable agriculture through decentralized governance.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-[#ECF0F1] shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2ECC71] to-[#145A32] flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#145A32] mb-2">Transparency</h3>
                  <p className="text-[#145A32]/70 leading-relaxed">
                    Immutable blockchain records ensure complete visibility of product origins and handling.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#ECF0F1] shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2ECC71] to-[#F39C12] flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#145A32] mb-2">Sustainability</h3>
                  <p className="text-[#145A32]/70 leading-relaxed">
                    Carbon-negative technology supporting eco-friendly farming practices worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#ECF0F1] shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F39C12] to-[#2ECC71] flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#145A32] mb-2">Community</h3>
                  <p className="text-[#145A32]/70 leading-relaxed">
                    Decentralized governance where every stakeholder has a voice in platform decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#ECF0F1] shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#145A32] to-[#2ECC71] flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#145A32] mb-2">Global Impact</h3>
                  <p className="text-[#145A32]/70 leading-relaxed">
                    Connecting farmers and consumers across borders to build a better food system.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-[#ECF0F1] shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-[#145A32] mb-4">Why Algorand?</h2>
                <p className="text-[#145A32]/70 leading-relaxed mb-4">
                  We chose Algorand as our blockchain foundation because it's the world's first carbon-negative
                  blockchain, perfectly aligned with our sustainability mission. Algorand offers:
                </p>
                <ul className="space-y-2 text-[#145A32]/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2ECC71] mt-1">•</span>
                    <span>Instant transaction finality for real-time product tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2ECC71] mt-1">•</span>
                    <span>Low transaction costs making it accessible for small-scale farmers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2ECC71] mt-1">•</span>
                    <span>Carbon-negative operations supporting environmental sustainability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2ECC71] mt-1">•</span>
                    <span>Robust smart contract capabilities for complex supply chain logic</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
