import Carousel from "../Carousel";
import FeaturedProducts from "../FeaturedProducts";
import "./Home.css";
import { useEffect, useState } from 'react';


const Home = () =>{

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/product/all").
            then(response => response.json()).
            then(data => setProducts(data));
    })

return <>
    <Carousel />
    <FeaturedProducts products={products.slice(5, 11)} />
</>}

export default Home;