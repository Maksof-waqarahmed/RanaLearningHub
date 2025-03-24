import { Metadata } from "next"
import { LoginForm } from "@/components/auth/login-form"
import { GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: "Login | RanaLearnHub",
  description: "Login to your RanaLearnHub account",
}

export default function LoginPage() {
  return (
    <div className="min-h-svh bg-gradient-to-br from-[#1a0b2e] to-[#2d1b4e]">
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
            <div className="text-sm font-medium text-purple-200/80 uppercase tracking-widest">
              Presented by
            </div>
            <div className="mt-1 text-xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">
              SIR WAQAR RANA
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
        
        <div className="mt-8 text-center text-sm text-purple-200/60">
          © {new Date().getFullYear()} RanaLearnHub. All rights reserved.
        </div>
      </div>
    </div>
  )
}
