import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function StudentProfile() {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Albart Flores"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Albart Flores</h2>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
                <div>
                  <div className="text-sm text-muted-foreground">Student ID</div>
                  <div>#10220120</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Registration Date</div>
                  <div>26 Oct, 2024</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Last Activity</div>
                  <div>26 Oct, 2024 at 12:30 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Email</div>
              <div>exampleemail@gmail.com</div>
            </div>
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

