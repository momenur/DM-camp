
// import Slider from "react-slick";
// Import banner img
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import b1 from '../../../assets/banner/b1.jpg'
import b2 from '../../../assets/banner/b2.jpg'
import b3 from '../../../assets/banner/b3.jpg'
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="">
            <Slider {...settings}>
                <div>
                    <img src={b1} alt="" />
                </div>
                <div>
                    <img src={b2} alt="" />
                </div>
                <div>
                    <img src={b3} alt="" />
                </div>

            </Slider>
        </div>
    );
};

export default Banner;