"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import Link from 'next/link'

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Carousel = () => {

    return <Swiper
        loop={true}
        autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true
        }}
        pagination={{
            clickable: true
        }}
        navigation={{

        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Link href={'/'}>
                <Image src={'/img/home/NationalGeographic.png'} alt="" width={977} height={550} />
            </Link>
            <div className="carousel-mask" />
            <Link href={'/'}>
                <div className="slide-title">Call for courses 2023!</div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href={'/'}>
                <Image src={'/img/home/NationalGeographic.png'} alt="" width={977} height={550} />
            </Link>
            <div className="carousel-mask" />
            <Link href={'/'}>
                <div className="slide-title">Call for courses 2023!</div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href={'/'}>
                <Image src={'/img/home/NationalGeographic.png'} alt="" width={977} height={550} />
            </Link>
            <div className="carousel-mask" />
            <Link href={'/'}>
                <div className="slide-title">Call for courses 2023!</div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href={'/'}>
                <Image src={'/img/home/NationalGeographic.png'} alt="" width={977} height={550} />
            </Link>
            <div className="carousel-mask" />
            <Link href={'/'}>
                <div className="slide-title">Call for courses 2023!</div>
            </Link>
        </SwiperSlide>
    </Swiper>
}

export default Carousel;