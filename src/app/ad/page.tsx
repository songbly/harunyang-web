"use client";

import styled from "styled-components";
import Image from "next/image";
import { adCat } from "../../assets";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Ad = () => {
  return (
    <div id="team" className="h-100dvh">
      <div
        id="header"
        className={"flex justify-center py-3 border-b border-gray-300"}
      >
        <Header />
      </div>
      <div className="relative w-full">
        <Title>
          광고 문의
          <p className="mt-2">
            하루냥을 통한 광고 또는 제휴를 원하신다면 문의해주세요.
          </p>
          <p>24시간 이내로 답변 드려요!</p>
        </Title>
        <ButtonWrap>
          <Button onClick={() => console.log}>광고 문의</Button>
          <Button onClick={() => alert("준비중입니다")}>광고 소개서</Button>
        </ButtonWrap>
        <ImageWrap>
          <Image src={adCat} width={300} height={312} alt={"ad"} />
        </ImageWrap>
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
  margin-top: 100px;
  > p {
    color: #828282;
    font-size: 20px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 64px;
    font-size: 28px;
    text-align: center;
    > p {
      font-size: 16px;
      max-width: 200px;
      text-align: center;
      margin: 0 auto;
    }
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 48px;
  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const Button = styled.button`
  width: 200px;
  padding: 16px 20px;
  border-radius: 9999px;
  background-color: #ff8d23;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 768px) {
    width: 120px;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 500;
  }
`;

const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px auto;
  @media (max-width: 768px) {
    margin: 88px auto;
  }
`;
