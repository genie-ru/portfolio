"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(10, {
    message: "Content must be at least 10 characters.",
  }),
  tasks: z.string().min(2, {
    message: "Tasks must be at least 2 characters.",
  }),
})

export function DailyReportForm() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      tasks: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Here you would typically send the data to Supabase
      console.log(values);
      toast({
        title: "Report submitted!",
        description: `Your daily report titled "${values.title}" has been saved successfully.`,
      })
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Daily Report - Dec 6" {...field} className="w-full" />
              </FormControl>
              <FormDescription>
                Enter a title for your daily report.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What did you accomplish today?"
                  className="resize-none w-full h-32 md:h-48"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tasks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tasks</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="List your tasks for tomorrow"
                  className="resize-none w-full h-24 md:h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full sm:w-auto">Submit Report</Button>
      </form>
    </Form>
  )
}

