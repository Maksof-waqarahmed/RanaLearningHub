"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle } from "lucide-react"

interface ChapterProps {
  chapter: {
    id: string
    title: string
    duration: string
    completed: boolean
  }
  index: number
  onClick: () => void
  compact?: boolean
}

export function ChapterCard({ chapter, index, onClick, compact = false }: ChapterProps) {
  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-md cursor-pointer ${compact ? "h-full" : ""}`}
      onClick={onClick}
    >
      <CardContent className={compact ? "p-4" : "p-4 sm:p-6"}>
        <div className="flex items-start gap-4">
          <div
            className={`flex ${compact ? "h-8 w-8" : "h-10 w-10"} shrink-0 items-center justify-center rounded-full ${
              chapter.completed ? "bg-[#6828CE]/10 text-[#6828CE]" : "bg-muted text-muted-foreground"
            }`}
          >
            {chapter.completed ? (
              <CheckCircle className={compact ? "h-4 w-4" : "h-5 w-5"} />
            ) : (
              <span className="text-sm font-medium">{index + 1}</span>
            )}
          </div>

          <div className="flex-1 space-y-1">
            <div className="flex items-start justify-between">
              <h3 className={`font-medium ${compact ? "text-sm" : "text-base"}`}>{chapter.title}</h3>

              {!compact && (
                <Badge
                  variant={chapter.completed ? "default" : "outline"}
                  className={chapter.completed ? "bg-[#6828CE]" : ""}
                >
                  {chapter.completed ? "Completed" : "Incomplete"}
                </Badge>
              )}
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              {chapter.duration}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

