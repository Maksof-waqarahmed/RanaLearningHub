import { ChevronDown } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const courses = [
  {
    name: "Transform Your UX/UI Skills",
    date: "28 Oct, 2024",
    lessons: "04",
    quizzes: "04",
    assignments: "01",
    progress: 100,
  },
  {
    name: "Learn The Human-Centered Design",
    date: "27 Oct, 2024",
    lessons: "04",
    quizzes: "03",
    assignments: "01",
    progress: 60,
  },
  {
    name: "Design Systems Bootcamp",
    date: "26 Oct, 2024",
    lessons: "04",
    quizzes: "02",
    assignments: "01",
    progress: 100,
  },
  {
    name: "Articulating Design Bootcamp",
    date: "25 Oct, 2024",
    lessons: "04",
    quizzes: "02",
    assignments: "01",
    progress: 50,
  },
]

export function CourseList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course List</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>COURSE NAME</TableHead>
              <TableHead>LESSON</TableHead>
              <TableHead>QUIZ</TableHead>
              <TableHead>ASSIGNMENT</TableHead>
              <TableHead>PROGRESS</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.name}>
                <TableCell className="font-medium">
                  <div>
                    <div>{course.name}</div>
                    <div className="text-sm text-muted-foreground">{course.date}</div>
                  </div>
                </TableCell>
                <TableCell>{course.lessons}</TableCell>
                <TableCell>{course.quizzes}</TableCell>
                <TableCell>{course.assignments}</TableCell>
                <TableCell>
                  <div className="flex w-[100px] items-center gap-2">
                    <Progress value={course.progress} className="h-2" />
                    <span className="w-9 text-sm text-muted-foreground">{course.progress}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

