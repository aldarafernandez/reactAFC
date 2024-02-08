import "./Featuredproducts.css";

const FeaturedProducts = ({products}) => {

return <div className="container-fluid text-center" id="grid">
    <div className="row">
        <div className="col-4">
            <img className="row border h300" src={products[0].image}></img>
            <img className="row border h300" src={products[1].image}></img>
            <img className="row border h300" src={products[2].image}></img>
        </div>
        <div className="col-8">
            <img className="row border h600" src={products[3].image}></img>
            <div className="row">
                <img className="col border h300" src={products[4].image}></img>
                <img className="col border h300" src={products[5].image}></img>
            </div>
        </div>
    </div>
</div>}


export default FeaturedProducts;