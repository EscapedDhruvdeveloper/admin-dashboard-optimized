import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/api';

const Products = () => {
    // const[products,setProducts]=useState([]);
    const navigate = useNavigate();
    // useEffect(()=>{
    //     axios.get("https://fakestoreapi.com/products")
    //     .then(res => setProducts(res.data));
    // },[]);
    const {data: products =[],isLoading}=useQuery({
        queryKey:["products"],
        queryFn:()=>fetchProducts().then(res=>res.data),
        refetchOnWindowFocus: false,
    });

    if(isLoading) return "Loading...";

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
        {
            products.map(p=>(
                <Card key={p.id} className='p-4' >
                    <img src={p.image} className='h-40 mx-auto'/>
                    <h2 className='font-bold'>{p.title}</h2>
                    <Button onClick={()=> navigate(`/dashboard/products/${p.id}`)}>
                        View Details
                    </Button>

                </Card>
            ))
        }
    </div>
  )
}

export default Products