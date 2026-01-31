// // import React, { useCallback, useEffect,useMemo,useState } from 'react'
// // import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
// // import axios from "axios";
// // import { useQuery } from '@tanstack/react-query';
// // import { fetchUsers } from '../services/api';

// // const items=5;
// // const Users = () => {
// //     // const [users,setUsers]=useState([]);
// //     const [page,setPage]=useState(1);

// //     // useEffect(()=>{
// //     //     axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setUsers(res.data));
// //     // },[]);

// //     const {data : users=[],isLoading}=useQuery({
// //         queryKey:["users"],
// //         queryFn:()=>fetchUsers().then(res=>res.data),
// //         refetchOnWindowFocus: false,
// //     });

// //     const start = useMemo(() => {
// //   return (page - 1) * items; 
// // }, [page]); 

// //     const paginated = useMemo(()=>{
// //         return  users.slice(start,start+items);
// //     },[users,start]);

// //     const handlePrev=useCallback(()=>{
// //         setPage(p=>p-1);
// //     },[]);
// //     const handleNext=useCallback(()=>{
// //         setPage(p=>p+1);
// //     },[]);

// //   return (
// //     <>
// //     <Table sx={{ border: '1px solid black'}}>
// //         <TableHead>
// //             <TableRow sx={{ border: '1px solid black'}}>
// //                 <TableCell>Name</TableCell>
// //                 <TableCell>Email</TableCell>
// //             </TableRow>
// //         </TableHead>
// //         <TableBody>
// //             {
// //                 paginated.map(user => (
// //                     <TableRow key={user.id}>
// //                         <TableCell >{user.name}</TableCell>
// //                         <TableCell>{user.email}</TableCell>
// //                     </TableRow>
// //                 ))
// //             }
// //         </TableBody>
// //     </Table>
// //     <div className='mt-4 flex gap-2'>
// //         <Button onClick={handlePrev} disabled={page===1}> Prev </Button>
// //         <Button onClick={handleNext} disabled={start+ items >= users.length }> Next </Button>
// //     </div>
// //     </>
// //   )
// // }

// // export default Users
// import React, { useCallback, useMemo, useState } from 'react';
// import { 
//     Button, 
//     Table, 
//     TableBody, 
//     TableCell, 
//     TableHead, 
//     TableRow, 
//     TableContainer, 
//     Paper, 
//     Box,
//     Typography,
//     CircularProgress // Added for loading state
// } from '@mui/material';
// import { useQuery } from '@tanstack/react-query';
// import { fetchUsers } from '../services/api';

// const items = 5;

// const Users = () => {
//     // --- LOGIC: From Snippet 2 (React Query) ---
//     const [page, setPage] = useState(1);

//     const { data: users = [], isLoading } = useQuery({
//         queryKey: ["users"],
//         queryFn: () => fetchUsers().then(res => res.data),
//         refetchOnWindowFocus: false,
//     });

//     const start = useMemo(() => {
//         return (page - 1) * items; 
//     }, [page]); 

//     const paginated = useMemo(() => {
//         return users.slice(start, start + items);
//     }, [users, start]);

//     const handlePrev = useCallback(() => {
//         setPage(p => p - 1);
//     }, []);

//     const handleNext = useCallback(() => {
//         setPage(p => p + 1);
//     }, []);


//     // --- DESIGN: From Snippet 1 (Polished MUI) ---
//     return (
//         <Box className="p-8 bg-gray-50 min-h-screen">
//             <Typography variant="h5" className="mb-4 font-bold text-gray-700 pb-4">
//                 User's List
//             </Typography>

//             <TableContainer component={Paper} elevation={4} className="rounded-lg overflow-hidden">
//                 <Table sx={{ minWidth: 650 }}>
//                     <TableHead>
//                         <TableRow sx={{ backgroundColor: '#f3f4f6' }}>
//                             <TableCell sx={{ fontWeight: 'bold', color: '#374151' }}>Name</TableCell>
//                             <TableCell sx={{ fontWeight: 'bold', color: '#374151' }}>Email</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {/* Loading State Handling */}
//                         {isLoading ? (
//                             <TableRow>
//                                 <TableCell colSpan={2} align="center" className="py-8">
//                                     <CircularProgress size={24} />
//                                 </TableCell>
//                             </TableRow>
//                         ) : (
//                             // Data Mapping
//                             paginated.map((user) => (
//                                 <TableRow 
//                                     key={user.id} 
//                                     hover 
//                                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                 >
//                                     <TableCell>{user.name}</TableCell>
//                                     <TableCell>{user.email}</TableCell>
//                                 </TableRow>
//                             ))
//                         )}

//                         {/* Empty State Handling */}
//                         {!isLoading && users.length > 0 && paginated.length === 0 && (
//                              <TableRow>
//                                 <TableCell colSpan={2} align="center">No users found on this page</TableCell>
//                              </TableRow>
//                         )}
//                     </TableBody>
//                 </Table>
//             </TableContainer>

//             {/* Pagination Controls */}
//             <div className='mt-4 flex justify-start gap-3'>
//                 <Button 
//                     variant="outlined" 
//                     onClick={handlePrev} 
//                     disabled={page === 1 || isLoading}
//                 >
//                     Previous
//                 </Button>
//                 <Button 
//                     variant="contained" 
//                     onClick={handleNext} 
//                     disabled={start + items >= users.length || isLoading}
//                 >
//                     Next
//                 </Button>
//             </div>
//         </Box>
//     );
// };

// export default Users;
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
    // --- Logic from previous steps ---
    const [page, setPage] = useState(1);
    
    // Using simple fetch logic for this example (replace with useQuery if preferred)
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
        // Changed p-8 to p-4 for mobile, p-8 for desktop
        <Box className="p-4 md:p-8 bg-gray-50 min-h-screen">
            <Typography variant="h5" className="mb-4 font-bold text-gray-700 pb-4">
                User's List
            </Typography>

            {/* --- DESKTOP VIEW: Table (Hidden on small screens) --- */}
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

            {/* --- MOBILE VIEW: Cards (Visible only on small screens) --- */}
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

            {/* Pagination Controls */}
            <div className='mt-6 flex justify-between md:justify-start gap-3'>
                <Button 
                    variant="outlined" 
                    onClick={handlePrev} 
                    disabled={page === 1}
                     // Full width buttons on mobile
                    className="md:w-auto" // Auto width on desktop
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