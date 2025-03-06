"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Mail } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function VerifyEmailForm({ className, ...props }: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [code, setCode] = useState(["", "", "", "", "", ""])

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(0, 1)
    }

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      if (prevInput) {
        prevInput.focus()
      }
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").trim()
    if (pastedData.length <= 6 && /^\d+$/.test(pastedData)) {
      const newCode = [...code]
      for (let i = 0; i < Math.min(pastedData.length, 6); i++) {
        newCode[i] = pastedData[i]
      }
      setCode(newCode)

      // Focus the appropriate input after paste
      const focusIndex = Math.min(pastedData.length, 5)
      const inputToFocus = document.getElementById(`code-${focusIndex}`)
      if (inputToFocus) {
        inputToFocus.focus()
      }
    }
  }

  const handleVerify = () => {
    const fullCode = code.join("")
    if (fullCode.length === 6) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
        setIsVerified(true)
      }, 1500)
    }
  }

  const handleResend = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Reset code
      setCode(["", "", "", "", "", ""])
    }, 1500)
  }

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <Card className="overflow-hidden shadow-xl border-purple-200/20">
        <CardHeader className="space-y-1">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#6828CE]/10">
            {isVerified ? (
              <CheckCircle className="h-6 w-6 text-green-500" />
            ) : (
              <Mail className="h-6 w-6 text-[#6828CE]" />
            )}
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            {isVerified ? "Email Verified!" : "Verify your email"}
          </CardTitle>
          <CardDescription className="text-center">
            {isVerified
              ? "Your email has been successfully verified. You can now access your account."
              : "We've sent a verification code to your email. Enter the code below to verify your account."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isVerified ? (
            <>
              <div className="flex justify-center gap-2">
                {code.map((digit, index) => (
                  <Input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    className="h-12 w-12 text-center text-lg font-semibold"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    autoFocus={index === 0}
                  />
                ))}
              </div>

              <Button
                type="button"
                className="w-full bg-[#6828CE] hover:bg-[#5620A8]"
                disabled={isLoading || code.join("").length !== 6}
                onClick={handleVerify}
              >
                {isLoading ? "Verifying..." : "Verify Email"}
              </Button>

              <div className="text-center text-sm">
                Didn't receive the code?{" "}
                <button
                  type="button"
                  className="font-medium text-[#6828CE] underline-offset-4 hover:underline"
                  onClick={handleResend}
                  disabled={isLoading}
                >
                  Resend
                </button>
              </div>
            </>
          ) : (
            <Button
              type="button"
              className="w-full bg-[#6828CE] hover:bg-[#5620A8]"
              onClick={() => (window.location.href = "/dashboard")}
            >
              Continue to Dashboard
            </Button>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            <Link
              href="/login"
              className="inline-flex items-center font-medium text-[#6828CE] underline-offset-4 hover:underline"
            >
              <ArrowLeft className="mr-1 h-3 w-3" />
              Back to login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

