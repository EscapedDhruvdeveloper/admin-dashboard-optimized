import { Card, CardContent, Typography, Box } from '@mui/material'
import { People, ShoppingCart, Person } from '@mui/icons-material'
import React from 'react'

const Home = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
        <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' } }}>
            <CardContent className='p-6 text-center'>
                <Box display="flex" justifyContent="center" mb={2}>
                    <People fontSize="large" />
                </Box>
                <Typography variant="h5" component="div">
                    Total Users
                </Typography>
                <Typography variant="h3" component="div">
                    10
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' } }}>
            <CardContent className='p-6 text-center'>
                <Box display="flex" justifyContent="center" mb={2}>
                    <ShoppingCart fontSize="large" />
                </Box>
                <Typography variant="h5" component="div">
                    Total Products
                </Typography>
                <Typography variant="h3" component="div">
                    20
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' } }}>
            <CardContent className='p-6 text-center'>
                <Box display="flex" justifyContent="center" mb={2}>
                    <Person fontSize="large" />
                </Box>
                <Typography variant="h5" component="div">
                    Active Users
                </Typography>
                <Typography variant="h3" component="div">
                    5
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default Home