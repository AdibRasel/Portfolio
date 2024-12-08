import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SliderOne from "Assets/Image/SliderOne.jpg"
import SliderTwo from "Assets/Image/SliderTwo.jpg"
import SliderThree from "Assets/Image/SliderThree.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';





const PublicUserSlider = () => {

  




    const SliderOneUrl = localStorage.getItem('SliderOne');
    const SliderTwoUrl = localStorage.getItem('SliderTwo');
    const SliderThreeUrl = localStorage.getItem('SliderThree');





    return <>


        {/* Slider Start  */}
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >


            <SwiperSlide>
                <img className='img-fluid rounded' src={SliderOneUrl || SliderOne} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img className='img-fluid rounded' src={SliderTwoUrl || SliderTwo} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img className='img-fluid rounded' src={SliderThreeUrl || SliderThree} alt="" />
            </SwiperSlide>


        </Swiper>
        {/* Slider End  */}

    </>
}
export default PublicUserSlider;