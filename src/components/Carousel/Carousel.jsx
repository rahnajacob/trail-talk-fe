import { useState } from "react"
import Slider from "react-slick"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    // const displayImages = images.map((image, i) => (
    //     <img src={image} alt="slickslider" key={i} />
    // ))
    // return (
    //     <section className="slickslider">
    //         <Slider {...settings}>
    //             {displayImages}
    //         </Slider>
    //         <button>btn</button>
    //     </section>
    // );
}

export default Carousel