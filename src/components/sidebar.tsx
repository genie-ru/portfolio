"use client"

import Link from "next/link"
import { Book, Github, Home, Layout, Menu } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"

//サイドバーのリンクを定義
const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Daily Reports",
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
    label: "GitHub Activity",
    icon: Github,
    color: "text-emerald-500",
    href: "/github",
  },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-[#111827] text-white transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="space-y-4 py-4 flex flex-col h-full">
          <div className="px-3 py-2 flex-1">
            <Link href="/" className="flex items-center pl-3 mb-14">
              <h1 className="text-2xl font-bold">
                Dashboard
              </h1>
            </Link>
            <div className="space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center flex-1">
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                    {route.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

