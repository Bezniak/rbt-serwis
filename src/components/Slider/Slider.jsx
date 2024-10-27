import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';


const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={2500}
                loop={true}
                modules={[Autoplay]}
                className="h-screen"
            >

                <SwiperSlide>
                    <div>
                        <img
                            src='/service-repairing.jpg'
                            alt="service-repairing"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img
                            src='/circuit-board.jpg'
                            alt="circuit-board"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img
                            src='/service.jpg'
                            alt="service"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img
                            src='/worker-repairing.jpg'
                            alt="worker-repairing"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;