import { Button } from '@/components/ui/button'
import { DailyReportForm } from "@/components/daily-report-form"

function page() {
  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Reports Page</h1>
        <Button>Submit Report</Button>
      </div>
      <DailyReportForm />
    </div>
  )
}

export default page