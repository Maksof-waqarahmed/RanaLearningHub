import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Search } from "lucide-react"
import { SidebarTrigger } from "../ui/sidebar"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-4">
        <div>
          <SidebarTrigger />
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-[200px] pl-8 md:w-[300px]" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New
        </Button>
      </div>
    </header>
  )
}

