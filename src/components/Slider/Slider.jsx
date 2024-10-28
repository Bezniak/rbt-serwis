import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Parallax } from 'react-parallax';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            speed={2500}
            loop={true}
            modules={[Autoplay]}
            className="h-90vh"
        >
            <SwiperSlide>
                <Parallax
                    bgImage='/service-repairing.jpg'
                    strength={800}
                    bgImageStyle={{ objectFit: 'cover' }} // Устанавливаем стиль для фона
                    className="h-90vh w-full parallax-slide"
                >
                </Parallax>
            </SwiperSlide>

            <SwiperSlide>
                <Parallax
                    bgImage='/circuit-board.jpg'
                    strength={800}
                    bgImageStyle={{ objectFit: 'cover' }} // Устанавливаем стиль для фона
                    className="h-full w-full parallax-slide"
                >
                </Parallax>
            </SwiperSlide>

            <SwiperSlide>
                <Parallax
                    bgImage='/service.jpg'
                    strength={800}
                    bgImageStyle={{ objectFit: 'cover' }} // Устанавливаем стиль для фона
                    className="h-full w-full parallax-slide"
                >
                </Parallax>
            </SwiperSlide>

            <SwiperSlide>
                <Parallax
                    bgImage='/worker-repairing.jpg'
                    strength={800}
                    bgImageStyle={{ objectFit: 'cover' }} // Устанавливаем стиль для фона
                    className="h-full w-full parallax-slide"
                >
                </Parallax>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
