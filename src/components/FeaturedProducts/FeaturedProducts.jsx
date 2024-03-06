import { NavLink } from "react-router-dom";
import "./Featuredproducts.css";

const FeaturedProducts = ({ products }) => {

    if (products.length === 0) {
        return <p>No hay productos</p>
    }

    return <div className="container text-center" id="grid">
        <div className="row">
            <div className="col-4">
                <div className="row h300">
                    <NavLink to={`/product/${products[0].id}`}>
                        <img src={products[0].image} alt={products[0].name} />
                    </NavLink>
                </div>
                <div className="row h300">
                    <NavLink to={`/product/${products[1].id}`}>
                        <img src={products[1].image} alt={products[1].name} />
                    </NavLink>
                </div>
                <div className="row h300">
                    <NavLink to={`/product/${products[2].id}`}>
                        <img src={products[2].image} alt={products[2].name} />
                    </NavLink>
                </div>
            </div>
            <div className="col-8">
                <div className="row h600">
                    <NavLink to={`/product/${products[3].id}`}>
                        <img src={products[3].image} alt={products[3].name} />
                    </NavLink>
                </div>
                <div className="row h600">
                    <div className="h300">
                        <NavLink to={`/product/${products[4].id}`}>
                            <img src={products[4].image} alt={products[4].name} />
                        </NavLink>
                    </div>
                    <div className="h300">
                        <NavLink to={`/product/${products[5].id}`}>
                            <img src={products[5].image} alt={products[5].name} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default FeaturedProducts;