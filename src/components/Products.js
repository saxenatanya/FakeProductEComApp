import * as React from 'react';
import {useEffect, useState} from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import {NavLink} from "react-router-dom";

const Products = () =>{
    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get("https://fakestoreapi.com/products").then(response => {
            console.log(response.data);
            setData(response.data)
        })
    },[]);


    const ShowCards = () =>{
        
  return (
    <>
    {data.map((val,i) => {
        return (  <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={val.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {val.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {val.description}  
            </Typography>
          </CardContent>
          <CardActions>
            <NavLink to={`/products/${val.id}`}>Open product</NavLink>
          </CardActions>
        </Card>)
    })
    }
</>  
);
    }

    return(
        <>
        <div className="container">
        <h1>My Products</h1>
            <div  className="row">
            <ShowCards/>
            </div>

        </div>
        </>
    )
};

export default Products;