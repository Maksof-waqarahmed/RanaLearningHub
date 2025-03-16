"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { CourseCard } from "./course-card"
import { ChapterList } from "./chapter-list"

// Sample course data
const courses = [
  {
    id: "course-1",
    title: "UI/UX Design Masterclass",
    instructor: "Sir Waqar Rana",
    level: "Intermediate",
    duration: "8 weeks",
    enrolled: 1240,
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=600",
    category: "design",
    description: "Master the fundamentals of UI/UX design with practical projects and industry insights.",
    chapters: [
      { id: "c1-ch1", title: "Introduction to UI/UX Design", duration: "45 min", completed: true },
      { id: "c1-ch2", title: "User Research Fundamentals", duration: "1 hr 15 min", completed: true },
      { id: "c1-ch3", title: "Wireframing and Prototyping", duration: "2 hr", completed: false },
      { id: "c1-ch4", title: "Visual Design Principles", duration: "1 hr 30 min", completed: false },
      { id: "c1-ch5", title: "Usability Testing", duration: "1 hr 45 min", completed: false },
      { id: "c1-ch6", title: "Design Systems", duration: "2 hr 15 min", completed: false },
      { id: "c1-ch7", title: "Responsive Design", duration: "1 hr 30 min", completed: false },
      { id: "c1-ch8", title: "Final Project", duration: "3 hr", completed: false },
    ],
  },
  {
    id: "course-2",
    title: "Web Development with React",
    instructor: "Sir Waqar Rana",
    level: "Advanced",
    duration: "10 weeks",
    enrolled: 980,
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=600",
    category: "development",
    description: "Build modern web applications with React, Redux, and Next.js.",
    chapters: [
      { id: "c2-ch1", title: "JavaScript Fundamentals Review", duration: "1 hr", completed: true },
      { id: "c2-ch2", title: "React Basics", duration: "2 hr", completed: true },
      { id: "c2-ch3", title: "Components and Props", duration: "1 hr 30 min", completed: true },
      { id: "c2-ch4", title: "State and Lifecycle", duration: "2 hr", completed: false },
      { id: "c2-ch5", title: "Hooks in Depth", duration: "2 hr 30 min", completed: false },
      { id: "c2-ch6", title: "Routing with React Router", duration: "1 hr 45 min", completed: false },
      { id: "c2-ch7", title: "State Management with Redux", duration: "3 hr", completed: false },
      { id: "c2-ch8", title: "Server-Side Rendering with Next.js", duration: "2 hr 15 min", completed: false },
      { id: "c2-ch9", title: "Testing React Applications", duration: "1 hr 30 min", completed: false },
      { id: "c2-ch10", title: "Deployment and Performance", duration: "1 hr 45 min", completed: false },
    ],
  },
  {
    id: "course-3",
    title: "Data Science Fundamentals",
    instructor: "Sir Waqar Rana",
    level: "Beginner",
    duration: "12 weeks",
    enrolled: 1560,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    category: "data",
    description: "Learn the basics of data science, including statistics, Python, and machine learning.",
    chapters: [
      { id: "c3-ch1", title: "Introduction to Data Science", duration: "1 hr", completed: false },
      { id: "c3-ch2", title: "Python for Data Science", duration: "2 hr 30 min", completed: false },
      { id: "c3-ch3", title: "Data Manipulation with Pandas", duration: "2 hr", completed: false },
      { id: "c3-ch4", title: "Data Visualization", duration: "1 hr 45 min", completed: false },
      { id: "c3-ch5", title: "Statistical Analysis", duration: "2 hr 15 min", completed: false },
      { id: "c3-ch6", title: "Introduction to Machine Learning", duration: "3 hr", completed: false },
      { id: "c3-ch7", title: "Supervised Learning", duration: "2 hr 30 min", completed: false },
      { id: "c3-ch8", title: "Unsupervised Learning", duration: "2 hr", completed: false },
      { id: "c3-ch9", title: "Deep Learning Basics", duration: "2 hr 45 min", completed: false },
      { id: "c3-ch10", title: "Model Deployment", duration: "1 hr 30 min", completed: false },
      { id: "c3-ch11", title: "Real-world Case Studies", duration: "2 hr", completed: false },
      { id: "c3-ch12", title: "Final Project", duration: "3 hr", completed: false },
    ],
  },
  {
    id: "course-4",
    title: "Mobile App Development",
    instructor: "Sir Waqar Rana",
    level: "Intermediate",
    duration: "9 weeks",
    enrolled: 870,
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=600",
    category: "development",
    description: "Create cross-platform mobile applications using React Native and Firebase.",
    chapters: [
      { id: "c4-ch1", title: "Introduction to Mobile Development", duration: "1 hr", completed: false },
      { id: "c4-ch2", title: "React Native Basics", duration: "2 hr", completed: false },
      { id: "c4-ch3", title: "Components and Navigation", duration: "1 hr 45 min", completed: false },
      { id: "c4-ch4", title: "Styling and Layouts", duration: "1 hr 30 min", completed: false },
      { id: "c4-ch5", title: "Working with APIs", duration: "2 hr", completed: false },
      { id: "c4-ch6", title: "State Management", duration: "2 hr 15 min", completed: false },
      { id: "c4-ch7", title: "Firebase Integration", duration: "2 hr 30 min", completed: false },
      { id: "c4-ch8", title: "Authentication and Storage", duration: "1 hr 45 min", completed: false },
      { id: "c4-ch9", title: "Publishing Your App", duration: "1 hr 30 min", completed: false },
    ],
  },
  {
    id: "course-5",
    title: "Digital Marketing Essentials",
    instructor: "Sir Waqar Rana",
    level: "Beginner",
    duration: "6 weeks",
    enrolled: 1320,
    rating: 4.5,
    image: "/placeholder.svg?height=400&width=600",
    category: "marketing",
    description: "Learn the fundamentals of digital marketing, including SEO, social media, and content strategy.",
    chapters: [
      { id: "c5-ch1", title: "Digital Marketing Overview", duration: "1 hr", completed: false },
      { id: "c5-ch2", title: "Search Engine Optimization", duration: "2 hr", completed: false },
      { id: "c5-ch3", title: "Content Marketing", duration: "1 hr 30 min", completed: false },
      { id: "c5-ch4", title: "Social Media Marketing", duration: "2 hr 15 min", completed: false },
      { id: "c5-ch5", title: "Email Marketing", duration: "1 hr 45 min", completed: false },
      { id: "c5-ch6", title: "Digital Advertising", duration: "2 hr", completed: false },
    ],
  },
  {
    id: "course-6",
    title: "Graphic Design for Beginners",
    instructor: "Sir Waqar Rana",
    level: "Beginner",
    duration: "7 weeks",
    enrolled: 1050,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    category: "design",
    description: "Master the fundamentals of graphic design, including typography, color theory, and composition.",
    chapters: [
      { id: "c6-ch1", title: "Introduction to Graphic Design", duration: "1 hr", completed: false },
      { id: "c6-ch2", title: "Typography Fundamentals", duration: "1 hr 30 min", completed: false },
      { id: "c6-ch3", title: "Color Theory", duration: "1 hr 45 min", completed: false },
      { id: "c6-ch4", title: "Composition and Layout", duration: "2 hr", completed: false },
      { id: "c6-ch5", title: "Working with Adobe Photoshop", duration: "2 hr 30 min", completed: false },
      { id: "c6-ch6", title: "Working with Adobe Illustrator", duration: "2 hr 15 min", completed: false },
      { id: "c6-ch7", title: "Final Project", duration: "3 hr", completed: false },
    ],
  },
]

// Categories for filtering
const categories = [
  { value: "all", label: "All Courses" },
  { value: "design", label: "Design" },
  { value: "development", label: "Development" },
  { value: "data", label: "Data Science" },
  { value: "marketing", label: "Marketing" },
]

export function CourseSelection() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter courses based on search query and category
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || course.category === activeCategory

    return matchesSearch && matchesCategory
  })

  // Get the selected course details
  const courseDetails = selectedCourse ? courses.find((course) => course.id === selectedCourse) : null

  return (
    <div className="space-y-6">
      {!selectedCourse ? (
        <>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Tabs
              defaultValue="all"
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full sm:w-auto"
            >
              <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:flex-row gap-2">
                {categories.map((category) => (
                  <TabsTrigger key={category.value} value={category.value}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} onClick={() => setSelectedCourse(course.id)} />
            ))}

            {filteredCourses.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-3">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No courses found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedCourse(null)}
            className="inline-flex items-center text-sm font-medium text-[#6828CE] hover:underline"
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
              className="mr-1 h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to all courses
          </button>

          {courseDetails && <ChapterList course={courseDetails} />}
        </div>
      )}
    </div>
  )
}

