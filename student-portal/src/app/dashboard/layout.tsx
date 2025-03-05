import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/side-bar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="relative flex min-h-screen">
        <DashboardSidebar />
        <div className="flex-1">
          <DashboardHeader />
          <main className="flex-1 space-y-4 p-4 md:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

