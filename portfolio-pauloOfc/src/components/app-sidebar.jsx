import { Calendar, Home, Inbox, Search, Settings, UserRound, Menu} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom";

export function AppSidebar({ setPage }) {
  const navigate = useNavigate();
  // Menu items.
const items = [
  {
    title: "Home",
    page: "Home",
    icon: Home,
  },
  {
    title: "Project Creator",
    page: "Criador",
    icon: UserRound,
  },
]

const moreItems = [
  {
    title: "Habilidades",
    page: "Habilidades",
    icon: Inbox,
  },
  {
    title: "Option1",
    page: "#",
    icon: Calendar,
  },
  {
    title: "Option2",
    page: "#",
    icon: Settings,
  },
];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Paulo Cesar</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <button 
                              onClick={() => navigate(item.page)}>
                              <item.icon/>
                              <span>{item.title}</span>
                          </button>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

          <SidebarGroup className={"mt-4 pt-1 border-t border-zinc-500"}>
            <SidebarGroupContent>
              <SidebarMenu>
                {moreItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <button 
                        onClick={() => navigate(item.page)}>
                        <item.icon/>
                        <span>{item.title}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
      </SidebarContent>
      <SidebarFooter/>
    </Sidebar>
  )
}
