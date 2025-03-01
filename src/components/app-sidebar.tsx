import { Calendar, Home, Inbox, Search, ChevronRight, Plus } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
  SidebarMenuBadge,
} from "@/components/ui/sidebar"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  

import { AppDropdownMenu } from "./app-dropdownmenu"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Email",
    url: "#",
    icon: Inbox,
  },
]

const menus = [
    {
        title: "Burger",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Tacos",
        url: "#",
        icon: Search,
    },
]

export function AppSidebar() {
  return (
    <Sidebar>

    {/* SIDEBAR HEADER */}
    <SidebarHeader>
        Humanity
    </SidebarHeader>

    <SidebarSeparator />


        {/* SIDEBAR CONTENT */}

      <SidebarContent>

        <SidebarGroup>

        <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupAction title="Add Project">
                <Plus /> <span className="sr-only">Add Project</span>
            </SidebarGroupAction>
        <SidebarGroupContent />

          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupLabel>Website</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menus.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>

            <SidebarMenuButton>
                Regional
            </SidebarMenuButton>
            <SidebarMenuSub>
                <SidebarMenuSubItem>
                    <SidebarMenuSubButton>
                        Chinnese
                    </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                    <SidebarMenuSubButton>
                        Indonesian
                    </SidebarMenuSubButton>
                </SidebarMenuSubItem>
            </SidebarMenuSub>


            <Collapsible className="group/collapsible">
                <SidebarGroup>
                    <SidebarGroupLabel
                        asChild
                        className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                        <CollapsibleTrigger>
                            Testing{" "}
                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </CollapsibleTrigger>
                    </SidebarGroupLabel>
                </SidebarGroup>
                <CollapsibleContent>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menus.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    {/* <SidebarMenuSkeleton /> */}
                                    <SidebarMenuButton asChild isActive>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                    <SidebarMenuBadge>24</SidebarMenuBadge>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </CollapsibleContent>
            </Collapsible>

        </SidebarGroup>


      </SidebarContent>





        {/* SIDE BAR FOOTER */}
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <AppDropdownMenu/>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>


    </Sidebar>
  )
}
