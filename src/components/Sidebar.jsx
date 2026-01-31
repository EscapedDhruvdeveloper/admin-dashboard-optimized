import { Drawer, List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { Home, People, ShoppingCart } from '@mui/icons-material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        setSidebarOpen(false); 
    };

    const drawerContent = (
        <List className="mt-16">
            <ListItemButton onClick={() => handleNavigation("/dashboard/home")} sx={{ '&:hover': { backgroundColor: '#f3f4f6' } }}>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNavigation("/dashboard/users")} sx={{ '&:hover': { backgroundColor: '#f3f4f6' } }}>
                <ListItemIcon>
                    <People />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNavigation("/dashboard/products")} sx={{ '&:hover': { backgroundColor: '#f3f4f6' } }}>
                <ListItemIcon>
                    <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Products" />
            </ListItemButton>
        </List>
    );

  return (
    <>
       
        <Drawer
            variant='permanent'
            sx={{
                display: { xs: 'none', md: 'block' },
                '& .MuiDrawer-paper': { width: 224, boxSizing: 'border-box' },
            }}
        >
            {drawerContent}
        </Drawer>

       
        <Drawer
            variant='temporary'
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { width: 224, boxSizing: 'border-box' },
            }}
        >
            {drawerContent}
        </Drawer>
    </>
  )
}

export default Sidebar