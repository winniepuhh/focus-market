import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import image1 from '../../assets/img/Group 32.png';
import image2 from '../../assets/img/Group 29.png';
import image3 from '../../assets/img/Group 39.png';

const ImageSlider: React.FC = () => {
    const swiperRef = useRef<any>(null);

    return (
        <div>
            <h1 className='text-lime-400 text-3xl font-bold mt-[50px] ml-[20%]'>Основа для конструкції</h1>
            <div className="my-10 flex flex-col items-center">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={false}
                    className="w-[25%] h-[30%]"
                >
                    <SwiperSlide>
                        <img src={image1} alt="Image 1" className="h-[500px] object-cover ml-[10px] md:ml-[90px]" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt="Image 2" className="h-[500px] object-cover ml-[25px] md:ml-[115px]" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image3} alt="Image 3" className="h-[500px] object-cover ml-[10px] md:ml-[115px]" />
                    </SwiperSlide>
                </Swiper>

                <div className="flex justify-center justify-between w-full mt-4 mb-8">
                    <button onClick={() => swiperRef.current.swiper.slidePrev()} className="border-2 rounded-full hover:bg-lime-500 p-3 rounded-full ml-[25%]">
                        ◀
                    </button>
                    <button onClick={() => swiperRef.current.swiper.slideNext()} className="border-2 rounded-full hover:bg-lime-500 p-3 rounded-full mr-[25%]">
                        ▶
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
