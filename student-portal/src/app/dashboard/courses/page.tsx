import { Metadata } from "next"
import { CourseSelection } from "@/components/courses/course-selection"

export const metadata: Metadata = {
  title: "Courses | RanaLearnHub",
  description: "Browse and access your enrolled courses",
}

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
        <p className="text-muted-foreground">
          Browse all available courses and access your learning materials
        </p>
      </div>
      
      <CourseSelection />
    </div>
  )
}
