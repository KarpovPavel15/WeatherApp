import './slider.scss';
import React from 'react';
import Slider from "react-slick";

export const SliderComponent = ({children}) => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
};
