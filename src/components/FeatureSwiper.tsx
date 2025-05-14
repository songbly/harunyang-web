import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import styled from 'styled-components';
import './featureSwiperStyles.css';

import 'swiper/css';
import 'swiper/css/pagination';

import {
  step1,
  step2,
  step3,
  step4,
} from "../assets";


export default ({currentIndex}: {currentIndex: number}) => {
  return (
    <Swiper
      modules={[Pagination]}
      rewind={true}
      pagination={{
        clickable: true,
      }}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Title>오늘의 감정 기록</Title>
        <Image
            src={step1}
            width={238}
            height={502}
            alt="step1"
          />
      </SwiperSlide>
      <SwiperSlide>
        <Title>오늘의 날씨 기록</Title>
        <Image
          src={step2}
          width={238}
          height={502}
          alt="step2"
        />
      </SwiperSlide>
      <SwiperSlide>
      <Title>일기쓰기</Title>
        <Image
          src={step3}
          width={238}
          height={502}
          alt="step3"
        />
      </SwiperSlide>
      <SwiperSlide>
      <Title>고양이 하루냥의 편지</Title>
        <Image
          src={step4}
          width={238}
          height={502}
          alt="step4"
        />
      </SwiperSlide>
    </Swiper>
  );
};


const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #3D3D3D;
`;