import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Calendar, Clock, FileText, Mail, MapPin, Phone, Star, Trophy, User, Zap } from 'lucide-react'

export function StudentProfile() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="relative h-32 bg-black -mt-10">
          <div className="absolute -bottom-16 left-6">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-background bg-[#6828CE]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Albart Flores"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <CardContent className="pt-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold">Albart Flores</h2>
                <Badge className="bg-[#6828CE] hover:bg-[#5620A8]">Premium Student</Badge>
              </div>
              <p className="text-muted-foreground">UI/UX Designer & Front-end Developer</p>
              
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div className="text-sm">ID: #10220120</div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div className="text-sm">Joined: 26 Oct, 2024</div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div className="text-sm">Last active: 26 Oct, 12:30 PM</div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div className="text-sm">exampleemail@gmail.com</div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div className="text-sm">+1 (555) 123-4567</div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div className="text-sm">New York, USA</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Card className="w-[140px]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Leaderboard</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <div className="text-2xl font-bold">#3</div>
                  </div>
                  <p className="text-xs text-muted-foreground">Top 5% of students</p>
                </CardContent>
              </Card>
              
              <Card className="w-[140px]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">XP Points</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-[#6828CE]" />
                    <div className="text-2xl font-bold">1,250</div>
                  </div>
                  <div className="mt-2">
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Level 4</span>
                      <span>750 / 2000</span>
                    </div>
                    <Progress value={37.5} className="h-1.5" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="w-[140px]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-500" />
                    <div className="text-2xl font-bold">7</div>
                  </div>
                  <p className="text-xs text-muted-foreground">3 badges this month</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-6">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-4 md:w-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Learning Summary</CardTitle>
                      <CardDescription>Your progress across all courses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span className="flex items-center">
                              <BookOpen className="mr-2 h-4 w-4" />
                              Course Completion
                            </span>
                            <span>50%</span>
                          </div>
                          <Progress value={50} className="h-2" />
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span className="flex items-center">
                              <FileText className="mr-2 h-4 w-4" />
                              Assignments Submitted
                            </span>
                            <span>75%</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span className="flex items-center">
                              <Star className="mr-2 h-4 w-4" />
                              Quiz Performance
                            </span>
                            <span>85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Achievements</CardTitle>
                      <CardDescription>Latest badges and certificates earned</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Course Completion: UI/UX Fundamentals",
                            date: "Oct 24, 2024",
                            icon: Award,
                            color: "text-purple-500"
                          },
                          {
                            title: "Perfect Score: Design Systems Quiz",
                            date: "Oct 20, 2024",
                            icon: Star,
                            color: "text-yellow-500"
                          },
                          {
                            title: "Early Submitter: Final Project",
                            date: "Oct 15, 2024",
                            icon: Clock,
                            color: "text-green-500"
                          }
                        ].map((achievement, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className={`rounded-full bg-muted p-1.5 ${achievement.color}`}>
                              <achievement.icon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium">{achievement.title}</div>
                              <div className="text-xs text-muted-foreground">{achievement.date}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="courses" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Enrolled Courses</CardTitle>
                    <CardDescription>All courses you are currently taking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Course details will appear here</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="achievements" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Achievements</CardTitle>
                    <CardDescription>Badges, certificates and awards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Achievement details will appear here</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="activity" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest actions and progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Activity details will appear here</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
