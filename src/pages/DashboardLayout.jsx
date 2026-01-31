import React, { useState } from 'react'
import Slidebar from "../components/Sidebar"
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { useUIStore } from '../store/uiStore'


const DashboardLayout = () => {
  

const sidebarOpen=useUIStore((state)=>state.sidebarOpen);
const open=useUIStore((state)=>state.open);
const close=useUIStore((state)=>state.close);

const toggleSidebar = () => sidebarOpen ? close() : open();

  return (
    <div className='flex'>
        <Slidebar sidebarOpen={sidebarOpen} setSidebarOpen={close} />
          <div className="flex-1 min-[900px]:ml-56">
            
            <Navbar toggleSidebar={toggleSidebar} />
            <div className='p-6'>
            <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout