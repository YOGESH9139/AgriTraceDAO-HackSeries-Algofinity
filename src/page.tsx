import Link from "next/link"
import { Button } from "@/components/ui/button"
import { QrCode, Users, Shield, Sprout, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="relative">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1E3A34] via-[#3FA34D] to-[#1E3A34]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight">
              Decentralizing trust from farm to fork
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty leading-relaxed">
              Blockchain-powered traceability for transparent, sustainable food supply chains
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/consumers">
                <Button
                  size="lg"
                  className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-[#1E3A34] font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <QrCode className="w-5 h-5 mr-2" />
                  Scan Product
                </Button>
              </Link>
              <Link href="/dao">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join DAO
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1E3A34]">Why AgriTrace DAO?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#f0f0f0]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3FA34D] to-[#1E3A34] flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1E3A34]">Blockchain Trust</h3>
              <p className="text-[#1E3A34]/70 leading-relaxed">
                Immutable records on Algorand ensure every step from farm to fork is verified and transparent.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#f0f0f0]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3FA34D] to-[#00BFFF] flex items-center justify-center mb-6">
                <Sprout className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1E3A34]">Eco-Friendly</h3>
              <p className="text-[#1E3A34]/70 leading-relaxed">
                Carbon-negative blockchain technology supporting sustainable farming practices worldwide.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#f0f0f0]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00BFFF] to-[#3FA34D] flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1E3A34]">Rewards System</h3>
              <p className="text-[#1E3A34]/70 leading-relaxed">
                Earn ASA tokens for participating in the ecosystem and making sustainable choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-[#f9f9f9] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1E3A34]">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Farmers Register Products",
                  description:
                    "Farmers upload crop details, certifications, and generate unique QR codes for each product batch.",
                },
                {
                  step: "02",
                  title: "Blockchain Verification",
                  description:
                    "All data is stored on Algorand blockchain, creating an immutable record of the product journey.",
                },
                {
                  step: "03",
                  title: "Consumers Scan & Verify",
                  description:
                    "Scan QR codes to see complete product history, eco-ratings, and earn rewards for sustainable choices.",
                },
                {
                  step: "04",
                  title: "DAO Governance",
                  description:
                    "Community members vote on platform improvements, farmer certifications, and sustainability initiatives.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#3FA34D] to-[#1E3A34] flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold mb-2 text-[#1E3A34]">{item.title}</h3>
                    <p className="text-[#1E3A34]/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#3FA34D] to-[#1E3A34] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Transform Food Supply?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed">
            Join thousands of farmers and consumers building a transparent, sustainable food ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/farmers">
              <Button
                size="lg"
                className="bg-white text-[#1E3A34] hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Sprout className="w-5 h-5 mr-2" />
                I'm a Farmer
              </Button>
            </Link>
            <Link href="/consumers">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all"
              >
                <QrCode className="w-5 h-5 mr-2" />
                I'm a Consumer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
