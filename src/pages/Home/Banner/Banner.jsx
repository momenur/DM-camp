

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

// Import banner img

import b1 from '../../../assets/banner/b1.jpg'
import b2 from '../../../assets/banner/b2.jpg'
import b3 from '../../../assets/banner/b3.jpg'
import b4 from '../../../assets/banner/b4.jpg'
import b5 from '../../../assets/banner/b5.jpg'
const Banner = () => {
    return (
        <div>
            <Carousel showArrows={true} >
                <div>
                    <img src={b1} />
                </div>
                <div>
                    <img src={b2} />
                </div>
                <div>
                    <img src={b3} />
                </div>
                <div>
                    <img src={b4} />
                </div>
                <div>
                    <img src={b5} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;