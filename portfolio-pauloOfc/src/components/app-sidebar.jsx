import { Calendar, Home, Inbox, Search, Settings, UserRound, Menu, CodeXml} from "lucide-react"
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
import { useNavigate, useLocation } from "react-router-dom";

export function AppSidebar({ setPage }) {
  const navigate = useNavigate();
  const location = useLocation();
  
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
  ];

  const moreItems = [
    {
      title: "Habilidades",
      page: "Habilidades",
      icon: Inbox,
    },
    {
      title: "Projects",
      page: "AllProjects",
      icon: CodeXml,
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
                              onClick={() => navigate(item.page)}
                              className={`${location.pathname === `/${item.page}` ? "bg-zinc-400/40 dark:bg-zinc-800" : ""}`}>
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
                        onClick={() => navigate(item.page)}
                        className={`${location.pathname === `/${item.page}` ? "bg-zinc-400/40 dark:bg-zinc-800" : ""}`}>
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
    </Sidebar>
  )
}
