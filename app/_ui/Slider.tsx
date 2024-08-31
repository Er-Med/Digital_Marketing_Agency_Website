import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import slideimag from "@/public/images/projImg.png"

export default function Slider() {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    // reverseDirection: true
                }}
                // pagination={true}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper h-full  w-[310px] sm:w-[610px] md:w-[610px] lg:w-[850px] "
            >
                <SwiperSlide >
                    <Image src={slideimag} alt="image" className="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slideimag} alt="image" className="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slideimag} alt="image" className="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slideimag} alt="image" className="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slideimag} alt="image" className="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slideimag} alt="image" className="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slideimag} alt="image" className="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slideimag} alt="image" className="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slideimag} alt="image" className="w-full h-full" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}