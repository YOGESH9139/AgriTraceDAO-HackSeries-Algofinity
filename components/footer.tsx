import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-40 bg-secondary text-secondary-foreground border-t border-secondary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-2 text-sm">
          <Leaf className="w-4 h-4" />
          <span>Powered by Algorand – Carbon Negative Blockchain</span>
        </div>
      </div>
    </footer>
  )
}
