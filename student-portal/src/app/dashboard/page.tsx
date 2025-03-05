import type { Metadata } from "next"
import { CourseList } from "@/components/dashboard/course-list"
import { DashboardStats } from "@/components/dashboard/stats"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Student dashboard showing course progress and stats",
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your learning progress.</p>
      </div>
      <DashboardStats />
      <CourseList />
    </div>
  )
}

