"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Globe,
  Palette,
  CreditCard,
  Settings,
  HelpCircle,
  PhoneCall,
  User,
} from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Business Owner",
    email: "user@example.com",
    avatar: "",
  },
  navGroups: [
    {
      label: "Main",
      items: [
        {
          title: "Overview",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      label: "Website Builder",
      items: [
        {
          title: "Edit Website",
          url: "/website",
          icon: Globe,
        },
        {
          title: "Template Gallery",
          url: "/templates",
          icon: Palette,
        },
        {
          title: "Domain Setup",
          url: "/domain",
          icon: Settings,
        },
      ],
    },
    {
      label: "Account",
      items: [
        {
          title: "Plans & Billing",
          url: "/billing",
          icon: CreditCard,
        },
        {
          title: "Account Settings",
          url: "/settings/account",
          icon: User,
        },
      ],
    },
    {
      label: "Support",
      items: [
        {
          title: "FAQs",
          url: "/faqs",
          icon: HelpCircle,
        },
        {
          title: "Contact Support",
          url: "/contact",
          icon: PhoneCall,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Logo size={24} className="text-current" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Brandly</span>
                  <span className="truncate text-xs">Customer Dashboard</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {data.navGroups.map((group) => (
          <NavMain key={group.label} label={group.label} items={group.items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
