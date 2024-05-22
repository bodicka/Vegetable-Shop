import { slids } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function HomeSlider () {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-fluid py-5 mb-5 hero-header">
      <div className="container py-5 ">
        <div className="row g-5 alingn-item-center">
          <div className="col-md-12 col-lg-7">
            <h4 className="mb-3 text-secondary ">100% Organic Foods</h4>
            <h1 className="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
            <div className="position-relative mx-auto">
              <input placeholder="Search..." type="number" className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"/>
              <button type="btn" 
                className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100 "
                style={{top: "0", right: "25px", }}>
                Submit Now 
              </button>
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <div className="carousel slide position-relative" data-bs-ride="carousel" id="carouselId">
              <Slider {...settings}>
              {
                slids.map((el, index) => (
                  <div className="carousel-item rounded" key={index}>
                    <img src={el.slide_img} alt={el.slide_img} className="img-fluid w-100 h-100 bg-secondary rounded" />
                    <a href="" className="btn px-4 py-2 text-white rounded">{el.category}</a>
                  </div>
                ))
              }
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}