"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star } from "lucide-react"

interface Course {
  id: string
  title: string
  instructor: string
  level: string
  duration: string
  enrolled: number
  rating: number
  image: string
  category: string
  description: string
  chapters: {
    id: string
    title: string
    duration: string
    completed: boolean
  }[]
}

interface CourseCardProps {
  course: Course
  onClick: () => void
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  // Calculate progress
  const totalChapters = course.chapters.length
  const completedChapters = course.chapters.filter((chapter) => chapter.completed).length
  const progress = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Badge className="absolute bottom-3 left-3 bg-[#6828CE]">{course.level}</Badge>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-bold line-clamp-2 text-xl">{course.title}</h3>
          <p className="text-sm text-muted-foreground">{course.instructor}</p>

          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {course.duration}
            </div>
            <div className="flex items-center">
              <Users className="mr-1 h-4 w-4" />
              {course.enrolled.toLocaleString()} students
            </div>
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 text-yellow-500" />
              {course.rating}
            </div>
          </div>

          <p className="line-clamp-2 text-sm">{course.description}</p>

          {progress > 0 && (
            <div className="mt-2">
              <div className="mb-1 flex justify-between text-xs">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted">
                <div className="h-full rounded-full bg-[#6828CE]" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button onClick={onClick} className="w-full bg-[#6828CE] hover:bg-[#5620A8]">
          {progress > 0 ? "Continue Learning" : "Start Learning"}
        </Button>
      </CardFooter>
    </Card>
  )
}

