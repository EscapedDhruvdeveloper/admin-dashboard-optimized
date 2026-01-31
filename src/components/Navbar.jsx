import { AppBar, Button, Toolbar, IconButton } from '@mui/material';
import { Menu, Logout } from '@mui/icons-material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.removeItem("token");
        navigate("/login");
    }
  return (
    <AppBar position='sticky' sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Toolbar className='flex justify-between'>
            <div className='flex items-center'>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleSidebar}
                    sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <Menu />
                </IconButton>
                <h1 className="font-bold text-xl">Admin Dashboard</h1>
            </div>
            <Button color="inherit" startIcon={<Logout />} onClick={logout}>Logout</Button>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar