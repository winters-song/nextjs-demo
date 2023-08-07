"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import Link from 'next/link'

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ISlider } from '@/models/home';


interface IProps {
    data: ISlider[]
}

const Carousel = (props: IProps) => {
    const {data} = props

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
       { data.map((item, idx) => 
        <SwiperSlide key={idx}>
            <Link href={item.url} key={idx} >
                <Image src={item.img} alt="" width={977} height={550} />
            </Link>
            <div className="carousel-mask" style={{ backgroundColor: item.color }} />
            <Link href={item.url}>
                <div className="slide-title">{item.title}</div>
            </Link>
        </SwiperSlide>
       )}
    </Swiper>
}

export default Carousel;