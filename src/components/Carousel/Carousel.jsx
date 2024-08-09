import { useState } from "react"
import Slider from "react-slick"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import './Carousel.module.css'

const Carousel = ({images}) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    const displayImages = images.map((image, i) => (
        <img src={image} alt="hhhhhhh" key={i} />
    ))
    return (
        <section className="styles.slickslider ">
            <Slider {...settings}>
                {displayImages}
            </Slider>
            
        </section>
    );
}

export default Carousel