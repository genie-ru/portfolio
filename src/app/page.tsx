import { PortfolioCard } from "@/components/portfolio-card"

const portfolioItems = [
  {
    id: "1",
    title: "Personal Dashboard",
    description: "A dashboard for tracking daily activities and portfolio projects",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/genie-ru",
  },
  // Add more portfolio items as needed
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-full">
          <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

