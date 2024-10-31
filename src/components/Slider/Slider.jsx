import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import {Parallax} from 'react-parallax';
import {FaPhone} from "react-icons/fa";
import {PiMedalLight} from "react-icons/pi";

const Slider = () => {
    return (
        <div className="w-full">
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
                className=""
            >
                <SwiperSlide>
                    <Parallax
                        bgImage='/service-repairing.jpg'
                        strength={800}
                        bgImageStyle={{objectFit: 'cover'}}
                        className="h-screen w-full parallax-slide"
                    >
                        <div className="parallax-content"></div>
                    </Parallax>
                </SwiperSlide>

                <SwiperSlide>
                    <Parallax
                        bgImage='/circuit-board.jpg'
                        strength={800}
                        bgImageStyle={{objectFit: 'cover'}}
                        className="h-screen w-full parallax-slide"
                    >
                        <div className="parallax-content"></div>
                    </Parallax>
                </SwiperSlide>

                <SwiperSlide>
                    <Parallax
                        bgImage='/service.jpg'
                        strength={800}
                        bgImageStyle={{objectFit: 'cover'}}
                        className="h-screen w-full parallax-slide"
                    >
                        <div className="parallax-content"></div>
                    </Parallax>
                </SwiperSlide>

                <SwiperSlide>
                    <Parallax
                        bgImage='/worker-repairing.jpg'
                        strength={800}
                        bgImageStyle={{objectFit: 'cover'}}
                        className="h-screen w-full parallax-slide"
                    >
                        <div className="parallax-content"></div>
                    </Parallax>
                </SwiperSlide>
            </Swiper>

            <div
                className="absolute z-50 inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <div
                    className="flex justify-center items-center gap-3 bg-[var(--white)] text-xs py-2 px-5 rounded-2xl mb-8">
                    <PiMedalLight className='text-[var(--oringe)] text-3xl'/>
                    <span className="font-semibold text-[var(--blue)] text-base">
                        Ваше удовлетворение — наш главный приоритет
                    </span>
                </div>
                <h1 className="font-bold mb-2 text-[var(--yellow)]">
                    Сломалась бытовая техника?
                </h1>
                <h2 className="md:text-4xl xs:text-lg font-bold mb-10">
                    У нас есть решение
                </h2>
                <p className="text-lg mb-6 md:w-1/3">
                    Мы предоставляем первоклассное обслуживание бытовой техники с прозрачными ценами и гарантией
                    удовлетворенности.
                </p>
                <div className='mt-8 flex justify-center items-center gap-12 flex-wrap'>
                    <button
                        className="bg-[var(--oringe)] hover:bg-[var(--yellow)] hover:text-black text-white font-semibold py-2 px-6 transition">
                        Забронировать сервис
                    </button>
                    <a
                        href="tel:+375333549000"
                        className="text-lg font-semibold flex justify-center items-center gap-3 group transition-colors duration-200"
                    >
                        <FaPhone className='text-[var(--oringe)] text-2xl group-hover:text-[var(--yellow)] transition'/>
                        <span className="text-[var(--white)] group-hover:text-[var(--yellow)] transition">
                            +375 33 354-90-00
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Slider;
