"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff, GraduationCap } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z
  .object({
    name: z.string({ required_error: "Name is required" }).min(3, "Name must be at least 3 characters"),
    email: z.string({ required_error: "Email is required" }).email("Please enter a valid email address"),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password must be at least 6 characters")
      .regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
        "Password must contain at least 1 uppercase letter, 1 number, and 1 special character",
      ),
    confirmPassword: z
      .string({ required_error: "Confirm password is required" })
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type FormValues = z.infer<typeof formSchema>

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: FormValues) {
    console.log(values)
    // In a real application, you would handle the signup process here
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className={cn("flex flex-col", className)} {...props}>
          <Card className="overflow-hidden shadow-xl border-purple-200">
            <CardContent className="grid p-0 md:grid-cols-2">
              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-3xl font-bold text-[#6828CE]">Create Account</h1>
                    <p className="mt-2 text-muted-foreground">Join RanaLearnHub today</p>
                  </div>

                  <div className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} type="text" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input placeholder="••••••••" type={showPassword ? "text" : "password"} {...field} />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                  <Eye className="h-4 w-4 text-muted-foreground" />
                                )}
                                <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                placeholder="••••••••"
                                type={showConfirmPassword ? "text" : "password"}
                                {...field}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              >
                                {showConfirmPassword ? (
                                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                  <Eye className="h-4 w-4 text-muted-foreground" />
                                )}
                                <span className="sr-only">
                                  {showConfirmPassword ? "Hide password" : "Show password"}
                                </span>
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Sign Up
                  </Button>

                  <div className="relative text-center text-sm">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border"></span>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" type="button" className="w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="mr-2 h-4 w-4"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.385.6.111.793-.26.793-.577v-2.233c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.086 1.839 1.237 1.839 1.237 1.07 1.836 2.809 1.305 3.494.997.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.933 0-1.31.469-2.381 1.236-3.22-.123-.303-.536-1.523.117-3.174 0 0 1.008-.322 3.3 1.23a11.533 11.533 0 013.006-.403c1.02.005 2.046.138 3.006.403 2.29-1.552 3.297-1.23 3.297-1.23.656 1.65.243 2.87.12 3.174.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.63-5.478 5.923.429.37.812 1.102.812 2.22v3.293c0 .32.191.693.8.576C20.566 21.797 24 17.303 24 12c0-6.628-5.372-12-12-12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub
                    </Button>
                    <Button variant="outline" type="button" className="w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                        <path
                          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                          fill="currentColor"
                        />
                      </svg>
                      Google
                    </Button>
                  </div>

                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Link href="#" className="font-medium text-[#6828CE] underline-offset-4 hover:underline">
                      Log in
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative hidden bg-gradient-to-br from-purple-600 to-indigo-800 h-full md:flex md:flex-col md:items-center md:justify-center p-4 text-white rounded-2xl mr-4">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=400')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm">
                    <GraduationCap className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Expand Your Knowledge</h2>
                  <p className="max-w-md text-white/80">
                    Join thousands of students learning and growing with RanaLearnHub's expert-led courses.
                  </p>
                  <div className="mt-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                    <blockquote className="italic text-white/90">
                      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
                    </blockquote>
                    <div className="mt-4 font-semibold">— Sir Waqar Rana</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </Form>
  )
}

