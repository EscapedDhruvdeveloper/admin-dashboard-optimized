import React, { useCallback, useMemo, useState } from 'react';
import { 
    Button, 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableRow, 
    TableContainer, 
    Paper, 
    Box,
    Typography,
    Card,           // Added for mobile view
    CardContent,    // Added for mobile view
    Grid            // Added for mobile view
} from '@mui/material';
import { useQuery } from '@tanstack/react-query'; // Assuming you kept the react-query logic
import { fetchUsers } from '../services/api';

const items = 5;

const Users = () => {
    
    const [page, setPage] = useState(1);
   
    const { data: users = [], isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: () => fetchUsers().then(res => res.data),
        refetchOnWindowFocus: false,
    });

    const start = useMemo(() => (page - 1) * items, [page]);
    const paginated = useMemo(() => users.slice(start, start + items), [users, start]);
    const handlePrev = useCallback(() => setPage(p => p - 1), []);
    const handleNext = useCallback(() => setPage(p => p + 1), []);

    return (
      
        <Box className="p-4 md:p-8 bg-gray-50 min-h-screen">
            <Typography variant="h5" className="mb-4 font-bold text-gray-700 pb-4">
                User's List
            </Typography>

            <div className="hidden md:block">
                <TableContainer component={Paper} elevation={4} className="rounded-lg overflow-hidden">
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#f3f4f6' }}>
                                <TableCell sx={{ fontWeight: 'bold', color: '#374151' }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: '#374151' }}>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginated.map((user) => (
                                <TableRow key={user.id} hover>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

    
            <div className="block md:hidden space-y-4">
                {paginated.map((user) => (
                    <Card key={user.id} elevation={3} className="rounded-lg">
                        <CardContent>
                            <Typography variant="subtitle2" className="text-gray-500 uppercase text-xs font-bold text-gray-900">
                                Name
                            </Typography>
                            <Typography variant="body1" className="mb-3 font-medium text-gray-500">
                                {user.name}
                            </Typography>
                            
                            <Typography variant="subtitle2" className="text-gray-500 uppercase text-xs font-bold text-gray-900">
                                Email
                            </Typography>
                            <Typography variant="body1" className="text-gray-600">
                                {user.email}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>

         
            <div className='mt-6 flex justify-between md:justify-start gap-3'>
                <Button 
                    variant="outlined" 
                    onClick={handlePrev} 
                    disabled={page === 1}
                   
                    className="md:w-auto" 
                >
                    Previous
                </Button>
                <Button 
                    variant="contained" 
                    onClick={handleNext} 
                    disabled={start + items >= users.length}
                    
                    className="md:w-auto"
                >
                    Next
                </Button>
            </div>
        </Box>
    );
};

export default Users;
