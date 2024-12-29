"use client";

import styled from "styled-components";
import Image from "next/image";
import { adCat } from "../assets";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Ad = () => {
  return (
    <div id="team" className="w-full items-center overflow-hidden">
      <div
        id="header"
        className={"flex justify-center py-3 border-b border-gray-300"}
      >
        <Header />
      </div>
      <div className="relative w-full">
        <Title className="mt-[100px]">
          광고 문의
          <p className="mt-2">
            하루냥을 통한 광고 또는 제휴를 원하신다면 문의해주세요.
          </p>
          <p>24시간 이내로 답변 드려요!</p>
        </Title>
        <div className="flex justify-center mt-[48px]">
          <button
            className="w-[200px] py-4 px-5 bg-[#FF8D23] rounded-full text-white font-semibold text-base mr-8"
            onClick={() => console.log}
          >
            광고 문의
          </button>
          <button
            className="w-[200px] py-4 px-5 bg-[#FF8D23] rounded-full text-white font-semibold text-base"
            onClick={() => alert("준비중입니다")}
          >
            광고 소개서
          </button>
        </div>
        <div className="flex justify-center my-[170px]">
          <Image src={adCat} width={300} height={312} alt={"ad"} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ad;

const Title = styled.h1`
  width: 100%;
  font-size: 48px;
  font-weight: 700;
  color: #191919;
  text-align: center;
  > p {
    color: #828282;
    font-size: 20px;
    font-weight: 500;
  }
`;
