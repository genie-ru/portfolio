import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { IslandNavigation } from "@/components/island-navigation"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Personal Dashboard",
  description: "Track your daily activities and portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col md:flex-row h-screen">
            <Sidebar />
            <main className="flex-1 overflow-auto p-4 md:p-8 pb-20 md:pb-8">
              {children}
            </main>
            <IslandNavigation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

