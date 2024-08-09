import { useState } from "react"
import Slider from "react-slick"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import styles from './Carousel.module.css'
// import { FaBullseye } from "react-icons/fa";

const Carousel = ({images}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    console.log("images carousel", images)
    const displayImages = images.map((image, i) => (
        <img src={image} alt="hhhhhhh" key={i} />
    ))
    return (
        <section className="styles.slickslider">
            <Slider {...settings}>
                {displayImages}
            </Slider>
            
        </section>
    );
}

export default Carousel