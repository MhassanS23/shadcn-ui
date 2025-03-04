"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn-ui/dropdown-menu"
import { SidebarMenuButton } from "@/components/shadcn-ui/sidebar"
import { ChevronUp, User2 } from "lucide-react"

export function AppDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton>
          <User2 /> Username
          <ChevronUp className="ml-auto" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="top"
        className="w-[--radix-popper-anchor-width]">
        <DropdownMenuItem>
          <span>Account</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Billing</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
