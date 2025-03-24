"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft, Mail } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Alert, AlertDescription } from "@/components/ui/alert"

const formSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email("Please enter a valid email address"),
})

type FormValues = z.infer<typeof formSchema>

export function ForgotPasswordForm({ className, ...props }: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: FormValues) {
    setIsLoading(true)
    console.log(values)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={cn("flex flex-col", className)} {...props}>
          <Card className="overflow-hidden shadow-xl border-purple-200/20">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Reset password</CardTitle>
              <CardDescription className="text-center">
                Enter your email address and we'll send you a link to reset your password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isSubmitted ? (
                <Alert className="bg-green-500/10 text-green-500 border-green-500/20">
                  <Mail className="h-4 w-4" />
                  <AlertDescription>
                    We've sent you an email with a link to reset your password. Please check your inbox.
                  </AlertDescription>
                </Alert>
              ) : (
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {!isSubmitted && (
                <Button type="submit" className="w-full bg-[#6828CE] hover:bg-[#5620A8]" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send reset link"}
                </Button>
              )}

              {isSubmitted && (
                <Button
                  type="button"
                  className="w-full bg-[#6828CE] hover:bg-[#5620A8]"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send again
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
      </form>
    </Form>
  )
}

