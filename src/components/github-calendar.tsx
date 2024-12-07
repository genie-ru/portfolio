"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'

interface CommitData {
  date: string
  count: number
}

// Mock data function for demonstration
const getMockCommitData = (): CommitData[] => {
  const today = new Date()
  return Array.from({ length: 35 }, (_, i) => {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    return {
      date: date.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 10)
    }
  }).reverse()
}

export function GitHubCalendar() {
  const [commits, setCommits] = useState<CommitData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        // Uncomment the following lines when your API is ready
        // const response = await fetch('/api/github-commits')
        // if (!response.ok) throw new Error('Failed to fetch commits')
        // const data = await response.json()
        // setCommits(data)

        // For now, use mock data
        setCommits(getMockCommitData())
      } catch (error) {
        console.error('Failed to fetch commits:', error)
        setError('Failed to load GitHub activity. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchCommits()
  }, [])

  const getColorIntensity = (count: number) => {
    const maxCount = Math.max(...commits.map(c => c.count))
    return Math.max(0.1, Math.min(1, count / maxCount))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>GitHub Activity</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-8" />
            ))}
          </div>
        ) : error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <div className="grid grid-cols-7 gap-2">
            {commits.map((commit, index) => (
              <div
                key={index}
                className="h-8 w-8 rounded-sm"
                style={{
                  backgroundColor: `rgba(22, 27, 34, ${getColorIntensity(commit.count)})`,
                }}
                title={`${commit.count} commits on ${commit.date}`}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

