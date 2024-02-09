import "./Featuredproducts.css";

const FeaturedProducts = ({products}) => {

    if(products.length === 0) {
        return <p>No hay productos</p>
    }

return <div className="container text-center" id="grid">
    <div className="row">
        <div className="col-4">
            <div className="row h300">
                <img src={products[0].image} alt={products[0].name} />
            </div>
            <div className="row h300">
                <img src={products[1].image} alt={products[1].name} />
            </div>
            <div className="row h300">
                <img src={products[2].image} alt={products[2].name} />
            </div>
        </div>
        <div className="col-8">
            <div className="row h600">
                <img src={products[3].image} alt={products[3].name} />
            </div>
            <div className="row h600">
                <div className="h300">
                    <img src={products[4].image} alt={products[4].name} />
                </div>
                <div className="h300">
                    <img src={products[5].image} alt={products[5].name} />
                </div>
            </div>
        </div>
    </div>
</div>}


export default FeaturedProducts;