import "./Featuredproducts.css";

const FeaturedProducts = () => <div className="container-fluid text-center" id="grid">
    <div className="row">
        <div className="col-4">
            <div className="row border h300">1</div>
            <div className="row border h300">2</div>
            <div className="row border h300">3</div>
        </div>
        <div className="col-8">
            <div className="row border h600">4</div>
            <div className="row">
                <div className="col border h300">5</div>
                <div className="col border h300">6</div>
            </div>
        </div>
    </div>
</div>

export default FeaturedProducts;