import { SidebarHeader, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../../../components/ui/sidebar";

import { Calendar, Home, icons, Inbox, Search, Settings, Gem, TableOfContents } from "lucide-react"
import { title } from "process";
import { url } from "inspector";


const items = [
  {
    title: "Home",
    url: "/pages/auth/generator",
    icon: Home,
  },
  {
    title: "My Letters",
    url: "/pages/letters",
    icon: Inbox,
  },
  {
    title: "Pricing",
    url: "/pages/pricing",
    icon: Gem,
  },
  {
    title: "FAQ",
    url: "/pages/faq",
    icon: TableOfContents,
  }
]


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="pt-0">
      <Sidebar>
        <SidebarHeader className="text-3xl font-poppins font-bold mb-14 pt-16"></SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-xl font-poppins font-semibold">Application</SidebarGroupLabel>
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
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}