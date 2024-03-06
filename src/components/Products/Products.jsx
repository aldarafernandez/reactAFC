import { NavLink } from "react-router-dom";
import "./Products.css";
import { useState, useEffect } from 'react';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);

    const [zapatos, setZapatos] = useState(false);
    const [bolsos, setBolsos] = useState(false);
    const [joyas, setJoyas] = useState(false);
    const [relojes, setRelojes] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/api/product/all")
            .then(response => response.json())
            .then(data => {
                setAllProducts(data);
                setDisplayedProducts(data.slice(0, 20));
            });
    }, []);

    useEffect(() => {
        let filteredProducts = allProducts.filter(product =>
            (zapatos && product.category === "ZAPATOS") ||
            (bolsos && product.category === "BOLSOS") ||
            (joyas && product.category === "JOYAS") ||
            (relojes && product.category === "RELOJES")
        );
        if (zapatos || bolsos || joyas || relojes) {
            setProducts(filteredProducts);
            setDisplayedProducts(filteredProducts.slice(0, 20));
        } else {
            setProducts(allProducts);
            setDisplayedProducts(allProducts.slice(0, 20));
        }
    }, [zapatos, bolsos, joyas, relojes, allProducts]);

    useEffect(() => {
        const handleScroll = () => {

            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

            if (scrollHeight - scrollTop === clientHeight) {

                const nextProducts = products.slice(displayedProducts.length, displayedProducts.length + 20);

                setDisplayedProducts(prevProducts => [...prevProducts, ...nextProducts]);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [products, displayedProducts]);


    return <main className="container mt-5 mb-5">
        <input type="checkbox" className="btn-check" id="zapatos" autoComplete="off" onChange={() => setZapatos(!zapatos)} />
        <label className="btn btn-outline-dark me-1" htmlFor="zapatos">Zapatos</label>

        <input type="checkbox" className="btn-check" id="bolsos" autoComplete="off" onChange={() => setBolsos(!bolsos)} />
        <label className="btn btn-outline-dark me-1" htmlFor="bolsos">Bolsos</label>

        <input type="checkbox" className="btn-check" id="joyas" autoComplete="off" onChange={() => setJoyas(!joyas)} />
        <label className="btn btn-outline-dark me-1" htmlFor="joyas">Joyas</label>

        <input type="checkbox" className="btn-check" id="relojes" autoComplete="off" onChange={() => setRelojes(!relojes)} />
        <label className="btn btn-outline-dark me-1" htmlFor="relojes">Relojes</label>

        <div className="mt-5 d-flex flex-wrap mb-5">{displayedProducts.map(product =>
            <div className="col-4" key={product.id}>
                <div className="card">
                    <NavLink to={`/product/${product.id}`}>
                        <img src={product.image} className="card-img-top product-img" alt={product.name} />
                    </NavLink>
                    <div className="card-body d-flex justify-content-between">
                        <NavLink to={`/product/${product.id}`}>
                            <h2 className="card-title font-title-products">{product.name}</h2>
                        </NavLink>
                        <p className="card-text text-end pe-3">{product.price} €</p>
                    </div>
                </div>
            </div>)}
        </div></main>;

}

export default Products;