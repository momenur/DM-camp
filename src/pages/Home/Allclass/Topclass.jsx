import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import DanceCard from "../../../components/DanceCard";
import SectionTitle from "../../../components/SectionTitle";

// import { Pagination } from "swiper";
const Topclass = ({ topclass }) => {
    return (
        <div>
            <SectionTitle
             subtitle="Our Class"
             title='top classes'
            >
            </SectionTitle>
            <div className="ms-4">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        topclass.slice(0, 6).map(item => <>
                            <SwiperSlide key={item._id}><DanceCard key={item._id} item={item}></DanceCard></SwiperSlide>
                        </>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Topclass;