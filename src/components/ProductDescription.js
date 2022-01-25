import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Button } from "@mui/material";

const ProductDescription = () =>{
    const [product, setProduct] = useState([]);

    const {id} = useParams();
    

    useEffect(()=>{
        // const res = fetch(`https://fakestoreapi.com/products/${id}`)
        // .then((response)=> setProduct(res.data));
        axios.get(`https://fakestoreapi.com/products/${id}`).then(response => {
            console.log(response.data);
            setProduct(response.data)
        });
    },[]);

    const handleAddToCart =()=>{
        
    }

return (
    <>
    <div>
       <img src={product.image} alt="" className="imagesize" />
    </div>
    <div>{product.price}</div>
    <div>{product.description}</div>
    <Button onClick={()=> handleAddToCart()}>Add To Cart</Button>
    </>
)

};

export default ProductDescription;