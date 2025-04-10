import { useState } from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home"
import ProjectCreator from './Pages/ProjectCreator'
import Habilidades from './Pages/Habilidades';
import Projects from './Pages/Projects';

export default function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <AppSidebar setPage={(page) => navigate(`/${page}`)}/>
      <div>
        <SidebarTrigger/>
        {children}
      </div>
    
      <main className="flex-1 w-full overflow-auto dark:bg-black transition duration-700 ease-in-out">
        <div className="min-h-[100vh] w-full mt-15 text-white">
          <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Criador" element={<ProjectCreator />} />
              <Route path="/Habilidades" element={<Habilidades />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="*" element={<Home />} /> 
          </Routes>
        </div>
      </main>
    </SidebarProvider>
    
  )
}
