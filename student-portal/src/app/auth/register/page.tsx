import { SignupForm } from "@/components/auth/register-form"
import { GraduationCap } from "lucide-react"

export default function SignupPage() {
  return (
    <div className="min-h-svh">
      <div className="container mx-auto flex flex-col items-center justify-center p-6 md:p-10">
        <div className="mb-8 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <GraduationCap className="h-8 w-8 text-purple-300" />
            </div>
            <div className="text-4xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                RanaLearnHub
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-sm font-medium text-purple-200/80 uppercase tracking-widest">Presented by</div>
            <div className="mt-1 text-xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">
              SIR WAQAR RANA
            </div>
            <div className="mt-4 max-w-md text-center text-purple-200/70">
              Unlock your potential with our comprehensive learning platform designed for students of all levels
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm md:max-w-3xl">
          <SignupForm />
        </div>

        <div className="mt-8 text-center text-sm text-purple-200/60">
          © {new Date().getFullYear()} RanaLearnHub. All rights reserved.
        </div>
      </div>
    </div>
  )
}

