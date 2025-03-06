"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  Inbox,
  LayoutDashboard,
  ClipboardList,
  Bell,
  Users,
  HelpCircle,
  Award,
  DollarSign,
  BarChart2,
  PlusCircle,
  Settings,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavUser } from "./user-nav"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Inbox",
    icon: Inbox,
    href: "/dashboard/inbox",
    badge: "12",
  },
  {
    title: "Courses",
    icon: BookOpen,
    href: "/dashboard/courses",
  },
  {
    title: "Quizzes",
    icon: ClipboardList,
    href: "/dashboard/quizzes",
  },
  {
    title: "Assignments",
    icon: ClipboardList,
    href: "/dashboard/assignments",
  },
  {
    title: "Announcements",
    icon: Bell,
    href: "/dashboard/announcements",
  },
  {
    title: "Students",
    icon: Users,
    href: "/dashboard/students",
  },
  {
    title: "Questions",
    icon: HelpCircle,
    href: "/dashboard/questions",
  },
  {
    title: "Certificates",
    icon: Award,
    href: "/dashboard/certificates",
  },
  {
    title: "Earnings",
    icon: DollarSign,
    href: "/dashboard/earnings",
  },
  {
    title: "Reports",
    icon: BarChart2,
    href: "/dashboard/reports",
  },
  {
    title: "Add-ons",
    icon: PlusCircle,
    href: "/dashboard/add-ons",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
]

const user = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
}

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo size="lg" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href} className="flex items-center">
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}

