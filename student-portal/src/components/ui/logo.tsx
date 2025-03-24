import { GraduationCap } from "lucide-react"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "white"
}

export function Logo({ size = "md", variant = "default" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  }

  const textClasses =
    variant === "white" ? "text-white" : "bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent"

  const iconSize = {
    sm: 16,
    md: 24,
    lg: 32,
  }

  return (
    <div className={`flex items-center gap-2 ${sizeClasses[size]}`}>
      <div className={`relative flex items-center justify-center rounded-full bg-purple-100/10 p-2 backdrop-blur-sm`}>
        <GraduationCap className={`${variant === "white" ? "text-white" : "text-purple-500"}`} size={iconSize[size]} />
      </div>
      <div className={`font-extrabold tracking-tight ${textClasses}`}>RanaLearnHub</div>
    </div>
  )
}

