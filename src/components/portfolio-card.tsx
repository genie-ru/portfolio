import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from 'lucide-react'
import Link from "next/link"

interface PortfolioCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  id: string
}

export function PortfolioCard({
  title,
  description,
  technologies,
  githubUrl,
  id,
}: PortfolioCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
      <CardHeader className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Github className="h-6 w-6" />
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <Link
          href={`/portfolio/${id}`}
          className="text-sm text-primary hover:underline mt-4 inline-block"
        >
          View Details →
        </Link>
      </CardContent>
    </Card>
  )
}

