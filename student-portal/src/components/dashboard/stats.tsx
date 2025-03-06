import type React from "react"
import { Award, BookOpen, ClipboardList, HelpCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string
  icon: React.ReactNode
}

function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard title="Enrolled Courses" value="04" icon={<BookOpen className="h-4 w-4 text-[#6828CE]" />} />
      <StatsCard title="Completed Courses" value="02" icon={<Award className="h-4 w-4 text-[#6828CE]" />} />
      <StatsCard title="Assignments" value="01" icon={<ClipboardList className="h-4 w-4 text-[#6828CE]" />} />
      <StatsCard title="Questions" value="01" icon={<HelpCircle className="h-4 w-4 text-[#6828CE]" />} />
    </div>
  )
}

