"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, Star, BookOpen, FileText, Video } from "lucide-react"
import { ChapterCard } from "./chapter-card"

interface Chapter {
  id: string
  title: string
  duration: string
  completed: boolean
}

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
  chapters: Chapter[]
}

interface ChapterListProps {
  course: Course
}

export function ChapterList({ course }: ChapterListProps) {
  const [activeChapter, setActiveChapter] = useState<string | null>(null)

  // Calculate progress
  const totalChapters = course.chapters.length
  const completedChapters = course.chapters.filter((chapter) => chapter.completed).length
  const progress = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0

  // Get active chapter details
  const chapterDetails = activeChapter ? course.chapters.find((chapter) => chapter.id === activeChapter) : null

  return (
    <div className="space-y-6">
      {!activeChapter ? (
        <>
          <Card className="overflow-hidden">
            <div className="relative aspect-video w-full overflow-hidden sm:aspect-[2.5/1]">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <Badge className="mb-2 bg-[#6828CE]">{course.level}</Badge>
                <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">{course.title}</h1>
                <p className="mt-2 text-white/90">{course.instructor}</p>
              </div>
            </div>

            <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="mr-1 h-4 w-4 text-muted-foreground" />
                    {course.chapters.length} chapters
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                    {course.enrolled.toLocaleString()} students
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 text-yellow-500" />
                    {course.rating}
                  </div>
                </div>

                <p>{course.description}</p>

                {progress > 0 && (
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Your progress</span>
                      <span>
                        {completedChapters} of {totalChapters} chapters ({progress}%)
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full rounded-full bg-[#6828CE]" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Course Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">Instructor</span>
                        <span className="font-medium">{course.instructor}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">Level</span>
                        <span className="font-medium">{course.level}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">Duration</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">Last Updated</span>
                        <span className="font-medium">March 2025</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center">
                        <Video className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>HD Video Lessons</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Downloadable Resources</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Certificate of Completion</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button
                  className="w-full bg-[#6828CE] hover:bg-[#5620A8]"
                  onClick={() => {
                    // Find the first incomplete chapter, or the first chapter if all are complete
                    const firstIncomplete = course.chapters.find((ch) => !ch.completed)
                    setActiveChapter(firstIncomplete?.id || course.chapters[0]?.id)
                  }}
                >
                  {progress > 0 ? "Continue Learning" : "Start Learning"}
                </Button>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Course Content</h2>
              <div className="text-sm text-muted-foreground">
                {completedChapters} of {totalChapters} chapters completed
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-4">
                <TabsTrigger value="all">All Chapters</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="incomplete">Incomplete</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {course.chapters.map((chapter, index) => (
                  <ChapterCard
                    key={chapter.id}
                    chapter={chapter}
                    index={index}
                    onClick={() => setActiveChapter(chapter.id)}
                  />
                ))}
              </TabsContent>

              <TabsContent value="completed" className="space-y-4">
                {course.chapters
                  .filter((ch) => ch.completed)
                  .map((chapter, index) => (
                    <ChapterCard
                      key={chapter.id}
                      chapter={chapter}
                      index={course.chapters.findIndex((ch) => ch.id === chapter.id)}
                      onClick={() => setActiveChapter(chapter.id)}
                    />
                  ))}

                {course.chapters.filter((ch) => ch.completed).length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="rounded-full bg-muted p-3">
                      <BookOpen className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">No completed chapters</h3>
                    <p className="text-muted-foreground">Start learning to track your progress.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="incomplete" className="space-y-4">
                {course.chapters
                  .filter((ch) => !ch.completed)
                  .map((chapter, index) => (
                    <ChapterCard
                      key={chapter.id}
                      chapter={chapter}
                      index={course.chapters.findIndex((ch) => ch.id === chapter.id)}
                      onClick={() => setActiveChapter(chapter.id)}
                    />
                  ))}

                {course.chapters.filter((ch) => !ch.completed).length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="rounded-full bg-muted p-3">
                      <Star className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">All chapters completed!</h3>
                    <p className="text-muted-foreground">Congratulations on completing this course.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </>
      ) : (
        <div className="space-y-6">
          {chapterDetails && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardDescription>
                      Chapter {course.chapters.findIndex((ch) => ch.id === activeChapter) + 1} of{" "}
                      {course.chapters.length}
                    </CardDescription>
                    <CardTitle className="text-2xl">{chapterDetails.title}</CardTitle>
                  </div>
                  <Badge variant={chapterDetails.completed ? "default" : "outline"}>
                    {chapterDetails.completed ? "Completed" : "Incomplete"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt={chapterDetails.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" className="h-16 w-16 rounded-full bg-[#6828CE]/90 hover:bg-[#6828CE]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8 text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      <span className="sr-only">Play</span>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{chapterDetails.duration}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 h-4 w-4"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        Download Resources
                      </Button>

                      <Button
                        variant={chapterDetails.completed ? "outline" : "default"}
                        size="sm"
                        className={chapterDetails.completed ? "" : "bg-[#6828CE] hover:bg-[#5620A8]"}
                      >
                        {chapterDetails.completed ? "Mark as Incomplete" : "Mark as Complete"}
                      </Button>
                    </div>
                  </div>

                  <div className="prose max-w-none dark:prose-invert">
                    <h3>Chapter Overview</h3>
                    <p>
                      In this chapter, we'll explore the key concepts and practical applications of{" "}
                      {chapterDetails.title.toLowerCase()}. You'll learn the fundamental principles and get hands-on
                      experience through guided exercises.
                    </p>

                    <h3>Learning Objectives</h3>
                    <ul>
                      <li>Understand the core principles of {chapterDetails.title.toLowerCase()}</li>
                      <li>Apply theoretical knowledge to practical scenarios</li>
                      <li>Complete hands-on exercises to reinforce learning</li>
                      <li>Evaluate and analyze real-world examples</li>
                    </ul>

                    <h3>Required Materials</h3>
                    <p>
                      All necessary materials are provided in the downloadable resources section. Make sure to download
                      them before starting the practical exercises.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      const currentIndex = course.chapters.findIndex((ch) => ch.id === activeChapter)
                      if (currentIndex > 0) {
                        setActiveChapter(course.chapters[currentIndex - 1].id)
                      }
                    }}
                    disabled={course.chapters.findIndex((ch) => ch.id === activeChapter) === 0}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    Previous Chapter
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => {
                      const currentIndex = course.chapters.findIndex((ch) => ch.id === activeChapter)
                      if (currentIndex < course.chapters.length - 1) {
                        setActiveChapter(course.chapters[currentIndex + 1].id)
                      }
                    }}
                    disabled={course.chapters.findIndex((ch) => ch.id === activeChapter) === course.chapters.length - 1}
                  >
                    Next Chapter
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Other Chapters</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {course.chapters
                .filter((ch) => ch.id !== activeChapter)
                .slice(0, 3)
                .map((chapter, index) => (
                  <ChapterCard
                    key={chapter.id}
                    chapter={chapter}
                    index={course.chapters.findIndex((ch) => ch.id === chapter.id)}
                    onClick={() => setActiveChapter(chapter.id)}
                    compact
                  />
                ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline" onClick={() => setActiveChapter(null)}>
                View All Chapters
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

