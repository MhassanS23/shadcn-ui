import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toogle"
import { SidebarProvider, SidebarTrigger } from "@/components/shadcn-ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <ModeToggle />
        {children}
      </main>
    </SidebarProvider>
  )
}
