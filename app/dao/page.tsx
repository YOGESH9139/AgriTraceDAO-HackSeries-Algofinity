"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, ThumbsUp, ThumbsDown, Users, TrendingUp, Clock } from "lucide-react"

export default function DAOGovernance() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [votes, setVotes] = useState<Record<number, "yes" | "no" | null>>({})

  const handleVote = (proposalId: number, vote: "yes" | "no") => {
    if (walletConnected) {
      setVotes({ ...votes, [proposalId]: vote })
    }
  }

  const proposals = [
    {
      id: 1,
      title: "Expand Organic Certification Program",
      description:
        "Proposal to allocate 50,000 ASA tokens to subsidize organic certification costs for small-scale farmers in developing regions.",
      author: "GreenFarmer.algo",
      yesVotes: 12847,
      noVotes: 3421,
      totalVotes: 16268,
      timeLeft: "3 days",
      status: "active",
    },
    {
      id: 2,
      title: "Implement Carbon Credit Rewards",
      description:
        "Introduce a carbon credit system that rewards farmers for sustainable practices with additional ASA tokens based on verified carbon sequestration.",
      author: "EcoWarrior.algo",
      yesVotes: 9234,
      noVotes: 5678,
      totalVotes: 14912,
      timeLeft: "5 days",
      status: "active",
    },
    {
      id: 3,
      title: "Partnership with Regional Food Banks",
      description:
        "Establish partnerships with food banks to donate surplus produce, with DAO covering logistics costs up to 25,000 ASA per quarter.",
      author: "CommunityFirst.algo",
      yesVotes: 15234,
      noVotes: 2156,
      totalVotes: 17390,
      timeLeft: "1 day",
      status: "active",
    },
    {
      id: 4,
      title: "Upgrade Blockchain Infrastructure",
      description:
        "Invest in enhanced blockchain infrastructure to support real-time tracking and reduce transaction costs for all platform users.",
      author: "TechInnovate.algo",
      yesVotes: 8765,
      noVotes: 7234,
      totalVotes: 15999,
      timeLeft: "6 days",
      status: "active",
    },
  ]

  const getVotePercentage = (votes: number, total: number) => {
    return Math.round((votes / total) * 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFEFE] to-[#ECF0F1] py-12">
      <div className="container mx-auto px-4">
        {/* Header with Wallet Connect */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#145A32] mb-4">DAO Governance</h1>
            <p className="text-lg text-[#145A32]/70">Vote on proposals and shape the future of AgriTrace</p>
          </div>
          <Button
            onClick={() => setWalletConnected(!walletConnected)}
            className={`${
              walletConnected
                ? "bg-gradient-to-r from-[#2ECC71] to-[#145A32]"
                : "bg-gradient-to-r from-[#F39C12] to-[#2ECC71]"
            } hover:opacity-90 text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all`}
          >
            <Wallet className="w-5 h-5 mr-2" />
            {walletConnected ? "Wallet Connected" : "Connect Wallet"}
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-[#ECF0F1] shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2ECC71] to-[#145A32] flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#145A32]/70">Active Members</p>
                  <p className="text-2xl font-bold text-[#145A32]">24,567</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#ECF0F1] shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F39C12] to-[#2ECC71] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#145A32]/70">Total Proposals</p>
                  <p className="text-2xl font-bold text-[#145A32]">142</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#ECF0F1] shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#145A32] to-[#2ECC71] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#145A32]/70">Active Votes</p>
                  <p className="text-2xl font-bold text-[#145A32]">{proposals.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Proposals */}
        <div className="space-y-6">
          {proposals.map((proposal) => {
            const yesPercentage = getVotePercentage(proposal.yesVotes, proposal.totalVotes)
            const noPercentage = getVotePercentage(proposal.noVotes, proposal.totalVotes)
            const userVote = votes[proposal.id]

            return (
              <Card key={proposal.id} className="border-[#ECF0F1] shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-[#145A32] mb-2">{proposal.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{proposal.description}</CardDescription>
                    </div>
                    <div className="flex-shrink-0 px-4 py-2 bg-[#F39C12]/10 rounded-lg border border-[#F39C12]/20">
                      <p className="text-xs font-semibold text-[#F39C12] whitespace-nowrap">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {proposal.timeLeft}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#145A32]/60 mt-2">
                    <span>Proposed by</span>
                    <span className="font-mono font-semibold text-[#145A32]">{proposal.author}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Voting Progress */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4 text-[#2ECC71]" />
                        <span className="font-semibold text-[#145A32]">Yes</span>
                        <span className="text-[#145A32]/60">
                          {proposal.yesVotes.toLocaleString()} ({yesPercentage}%)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#145A32]/60">
                          ({noPercentage}%) {proposal.noVotes.toLocaleString()}
                        </span>
                        <span className="font-semibold text-[#145A32]">No</span>
                        <ThumbsDown className="w-4 h-4 text-[#145A32]/50" />
                      </div>
                    </div>
                    <div className="relative h-3 bg-[#ECF0F1] rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#2ECC71] to-[#145A32] transition-all"
                        style={{ width: `${yesPercentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-center text-[#145A32]/60">
                      {proposal.totalVotes.toLocaleString()} total votes
                    </p>
                  </div>

                  {/* Vote Buttons */}
                  <div className="flex gap-4">
                    <Button
                      onClick={() => handleVote(proposal.id, "yes")}
                      disabled={!walletConnected || userVote !== null}
                      className={`flex-1 ${
                        userVote === "yes"
                          ? "bg-gradient-to-r from-[#2ECC71] to-[#145A32]"
                          : "bg-white hover:bg-[#2ECC71]/10 text-[#145A32] border-2 border-[#2ECC71]"
                      } font-semibold py-6 rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      <ThumbsUp className="w-5 h-5 mr-2" />
                      {userVote === "yes" ? "Voted Yes" : "Vote Yes"}
                    </Button>
                    <Button
                      onClick={() => handleVote(proposal.id, "no")}
                      disabled={!walletConnected || userVote !== null}
                      className={`flex-1 ${
                        userVote === "no"
                          ? "bg-gradient-to-r from-[#145A32] to-[#ECF0F1] text-white"
                          : "bg-white hover:bg-[#ECF0F1] text-[#145A32] border-2 border-[#ECF0F1]"
                      } font-semibold py-6 rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      <ThumbsDown className="w-5 h-5 mr-2" />
                      {userVote === "no" ? "Voted No" : "Vote No"}
                    </Button>
                  </div>

                  {!walletConnected && (
                    <p className="text-sm text-center text-[#F39C12] font-medium">
                      Connect your wallet to participate in voting
                    </p>
                  )}

                  {userVote && (
                    <div className="bg-[#2ECC71]/10 rounded-lg p-4 border border-[#2ECC71]/20">
                      <p className="text-sm text-[#145A32] text-center font-medium">
                        Thank you for voting! Your vote has been recorded on the blockchain.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
