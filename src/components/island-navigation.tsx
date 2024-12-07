"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Book, Github, Home, Layout } from 'lucide-react'
import { cn } from "@/lib/utils"

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Reports",
    icon: Book,
    href: "/reports",
    color: "text-violet-500",
  },
  {
    label: "Portfolio",
    icon: Layout,
    color: "text-pink-700",
    href: "/portfolio",
  },
  {
    label: "GitHub",
    icon: Github,
    color: "text-emerald-500",
    href: "/github",
  },
]

export function IslandNavigation() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 md:hidden">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
              pathname === route.href && "bg-gray-50 dark:bg-gray-800"
            )}
          >
            <route.icon className={cn("w-5 h-5 mb-1", route.color, 
              pathname === route.href ? "text-primary" : "text-gray-500 dark:text-gray-400"
            )} />
            <span className={cn("text-xs", 
              pathname === route.href ? "text-primary" : "text-gray-500 dark:text-gray-400"
            )}>
              {route.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

