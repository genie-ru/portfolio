import { NextResponse } from 'next/server'

// Mock data function (same as in the component)
const getMockCommitData = () => {
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

export async function GET() {
  // In a real implementation, you would fetch data from GitHub API here
  // Remember to implement proper error handling and rate limiting
  const mockData = getMockCommitData()
  
  return NextResponse.json(mockData)
}

