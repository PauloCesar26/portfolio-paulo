import { useState } from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home"
import ProjectCreator from './Pages/ProjectCreator'
import Habilidades from './Pages/Habilidades';

export default function Layout({ children }) {
  const navigate = useNavigate();
  // const [page, setPage] = useState("home");

  // const renderPage = () => {
  //   switch(page){
  //     case "home":
  //       return <Home />;
  //     case "criador":
  //       return <ProjectCreator />;
  //     case "habilidades":
  //       return <Habilidades />;
  //     default:
  //       return <Home />;
  //   }
  // };

  return (
    <SidebarProvider>
      <AppSidebar setPage={(page) => navigate(`/${page}`)}/>
      <div>
        <SidebarTrigger/>
        {children}
      </div>
    
      <main className="flex-1 w-full p-6 overflow-auto dark:bg-black">
        <div className="min-h-[100vh] w-full mt-14 text-white dark:bg-black">
          <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Criador" element={<ProjectCreator />} />
              <Route path="/Habilidades" element={<Habilidades />} />
              <Route path="*" element={<Home />} /> 
          </Routes>
        </div>
      </main>
    </SidebarProvider>
    
  )
}
