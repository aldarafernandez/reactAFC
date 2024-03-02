import "./Carousel.css";
import carousel1 from "../../assets/img/carousel1.jpg";
import carousel2 from "../../assets/img/carousel2.jpg";
import carousel3 from "../../assets/img/carousel3.jpg";


const Carousel = () => <div id="carousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="..." />
        </div>
    </div>
</div>

export default Carousel;