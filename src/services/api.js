import axios from "axios"

export const fetchUsers=()=>{
   return axios.get("https://jsonplaceholder.typicode.com/users");
}

export const fetchProducts=()=>{
    return axios.get("https://fakestoreapi.com/products");
}

export const fetchProductsById=(id)=>{
    return axios.get(`https://fakestoreapi.com/products/${id}`);
}