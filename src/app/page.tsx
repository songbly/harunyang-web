"use client";

import Image from "next/image";
import {
  appPreviewBackground,
  appstore,
  catGreen,
  catLetter,
  catRed,
  catRedBgBlack,
  catSkyblue,
  catSkyblueBgBlack,
  catYellow,
  catYellowBgBlack,
  playstore,
  step1,
  step2,
  step3,
  step4,
} from "../assets";
import {
  ASISLetter,
  MobileAsIsLetter,
  MobileToBeLetter,
  Review_1_1,
  Review_1_2,
  Review_1_3,
  Review_2_1,
  Review_2_2,
  Review_2_3,
  TOBELetter,
} from "../assets/images";

import useWindowSize from "@/hooks/useWindowSize";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Bubble from "../components/Bubble";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ListInfinityAutoScroll } from "../components/ListInfinityAutoScroll";
import ProgressBar from "../components/ProgressBar";
import StoreButton from "../components/StoreButton";

const stepContents = [
  {
    title: "오늘의 감정 기록",
    text: "매일 내 감정을 체크하고 기록해요. 감정 관리법에서 가장 중요한 것은 스스로 물어보고 자신의 감정을 기록하는 것이에요.",
    img: step1,
  },
  {
    title: "오늘의 날씨 기록",
    text: "감정에 따라 달라보이는 날씨. 오늘의 날씨는 어땠나요?",
    img: step2,
  },
  {
    title: "일기 쓰기",
    text: "오늘 하루 일들을 하루냥에게 가볍게 털어놓으세요. 언제나 당신 이야기를 들어줄 준비가 되어 있어요.",
    img: step3,
  },
  {
    title: "고양이 하루냥의 편지",
    text: "나만의 친구 하루냥의 따스한 위로와 조언으로 하루를 기분 좋게 마무리 해보세요.",
    img: step4,
  },
];

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [sent, setSent] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile } = useWindowSize();

  const [headerTheme, setHeaderTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const allSectionWraps = document.querySelectorAll("[data-theme]");
    allSectionWraps.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => {
          const theme = section.getAttribute("data-theme") as "light" | "dark";
          setHeaderTheme(theme);
        },
        onEnterBack: () => {
          const theme = section.getAttribute("data-theme") as "light" | "dark";
          setHeaderTheme(theme);
        },
      });
    });

    ScrollTrigger.refresh();
  }, []);

  const handleStepClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("#landing-animate-section");
    const delaySectionWraps = document.querySelectorAll(
      "#landing-animate-delay-section"
    );
    const extraDelaySectionWraps = document.querySelectorAll(
      "#landing-animate-extra-delay-section"
    );
    const earlyTriggerSectionWraps = document.querySelectorAll(
      "#landing-animate-early-trigger-section"
    );

    ScrollTrigger.refresh(true);
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
        },
        opacity: 1,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });
    });

    delaySectionWraps.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
        },
        opacity: 1,
        y: 50,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
      });
    });

    extraDelaySectionWraps.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    earlyTriggerSectionWraps.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 110%",
          end: "top 0%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
      });
    });
  }, []);

  return (
    <div
      id="service"
      className="w-full flex flex-col items-center overflow-hidden"
    >
      <Header currentTheme={headerTheme} />
      {/* @ts-ignore */}
      <SectionWrap $sectionTheme="light" $preview={false}>
        <Box width={0} height={100} />
        <MainText color={"#191919"}>고민이 많은 사람들을 위한</MainText>
        <MainText color={"#191919"}>대화형 일기 서비스</MainText>
        <SubText color="#828282">
          가볍게 털어놓고 싶은 일상과 고민, 하루냥과 나눠보세요
        </SubText>

        <ButtonWrapper>
          <StoreButton logo={appstore} text={"App Store"} />
          <StoreButton logo={playstore} text={"Google Play"} />
        </ButtonWrapper>
        <Image src={catLetter} width={990} height={990} alt="블랙 로고" />
      </SectionWrap>
      {/* @ts-ignore */}
      <SectionWrap $sectionTheme="dark" $preview={false}>
        <Box width={0} height={100} />
        <SubText color="#FF8D23">가볍게 털어놓고 위로 받는 일상</SubText>
        <MainText color={"#F5F5F5"}>
          {isMobile
            ? `이야기하듯 일기를 쓰고\n 위로받고 싶다면?`
            : "이야기하듯 일기를 쓰고 위로받고 싶다면?"}
        </MainText>
        <MainText color="#F5F5F5">하루냥과 함께해보세요!</MainText>

        <ContentWrapper>
          <RowFlex flexStart="left">
            <Image
              src={catYellowBgBlack}
              width={isMobile ? 48 : 100}
              height={isMobile ? 48 : 100}
              alt="노랑 하루냥"
            />
            <Bubble
              author="조언"
              text="자신의 가치관을 잃지 않으며, 침착하게 대응하여 문제를 해결할 방법을 찾아보세요!"
              emoji="🐱💪"
              backgroundColor="#FFCE6C"
              textColor="#191919"
              authorColor="#A3864A"
            />
          </RowFlex>
          <RowFlex flexStart="right">
            {isMobile && (
              <Image
                src={catSkyblueBgBlack}
                width={isMobile ? 48 : 100}
                height={isMobile ? 48 : 100}
                alt="파랑 하루냥"
              />
            )}
            <Bubble
              author="위로"
              text="오늘은 힘들었겠죠. 그래도 내일은 더 나은 날이 올 거예요."
              emoji="🍀🐾"
              backgroundColor="#98C0FC"
              textColor="#191919"
              authorColor="#657DA1"
              tailPosition="right"
            />
            {!isMobile && (
              <Image
                src={catSkyblueBgBlack}
                width={100}
                height={100}
                alt="파랑 하루냥"
              />
            )}
          </RowFlex>
          <RowFlex flexStart="left">
            <Image
              src={catRedBgBlack}
              width={isMobile ? 48 : 100}
              height={isMobile ? 48 : 100}
              alt="빨깅 하루냥"
            />
            <Bubble
              author="공감"
              text="화가 날 때는 순간적인 감정에 휩싸이지 말고 한 번 깊게 숨을 들이쉬어보세요!"
              emoji="💨🐾"
              backgroundColor="#F15A5B"
              textColor="#191919"
              authorColor="#9B4041"
            />
          </RowFlex>
        </ContentWrapper>
        <Box width={0} height={100} />
      </SectionWrap>
      {/* @ts-ignore */}
      <SectionWrap $sectionTheme="light" $preview={false}>
        <Box width={0} height={100} />
        <SubText color="#FF8D23">하루냥 미리 경험해보기</SubText>
        {sent ? (
          <>
            <MainText color={"#191919"}>하루냥과 하루를</MainText>
            <MainText color="#191919">돌아보는 시간을 가져요</MainText>
          </>
        ) : (
          <>
            <MainText color={"#191919"}>하루냥과 미리 만나보세요!</MainText>
            <MainText color="#191919">
              {!isMobile && "하루냥에게 "}일기를 쓰고 답장을 받아보세요
            </MainText>
          </>
        )}

        <LetterContainer>
          {sent ? (
            <div>
              <Image
                src={isMobile ? MobileAsIsLetter : TOBELetter}
                alt={""}
                width={466}
                height={440}
              />
            </div>
          ) : (
            <div className={"relative"}>
              <Image
                src={isMobile ? MobileToBeLetter : ASISLetter}
                alt={""}
                width={480}
                height={440}
              />
              <div
                className="absolute bottom-[48px] w-[400px] h-[52px] z-10 cursor-pointer"
                onClick={() => setSent(!sent)}
              ></div>
            </div>
          )}
        </LetterContainer>
        <Box width={0} height={isMobile ? 32 : 100} />
      </SectionWrap>
      {/* @ts-ignore */}
      <SectionWrap $sectionTheme="dark" $preview={true}>
        {!isMobile && <Box width={0} height={100} />}

        <BackgroundImage
          src={appPreviewBackground}
          width={990}
          height={990}
          alt="블랙 로고"
        />
        <StepBox>
          <Image
            src={stepContents[currentIndex].img}
            width={300}
            height={632}
            alt="step1"
          />
          <StepContent>
            <ProgressBar
              currentStep={currentIndex}
              onStepClick={handleStepClick}
            />
            <StepTitle>{stepContents[currentIndex].title}</StepTitle>
            <StepText>{stepContents[currentIndex].text}</StepText>
          </StepContent>
        </StepBox>
        <Box width={0} height={100} />
      </SectionWrap>
      {/* @ts-ignore */}
      <SectionWrap $sectionTheme="dark" $preview={false}>
        <Box width={0} height={100} />
        <SubText color="#FF8D23">사용 리뷰</SubText>
        <MainText color={"#F5F5F5"}>이미 $$명이 하루냥과</MainText>
        <MainText color={"#F5F5F5"}>일상을 함께 하고 있어요</MainText>
        <div id="landing-animate-delay-section" className="w-full relative">
          <div className="absolute w-full h-full z-10 bg-[linear-gradient(90deg,_#191919_0%,_#19191900_10%_90%,_#191919_100%)] pointer-events-none" />
          <ListInfinityAutoScroll
            items={[
              <Image
                key="Review_1_1"
                src={Review_1_1}
                alt={""}
                width={isMobile ? 1816: 2280}
                height={isMobile ? 164 : 240}
              />,
              <Image
                key="Review_1_2"
                src={Review_1_2}
                alt={""}
                width={isMobile ? 1816: 2280}
                height={isMobile ? 164 : 240}
              />,
              <Image
                key="Review_1_3"
                src={Review_1_3}
                alt={""}
                width={isMobile ? 1816: 2280}
                height={isMobile ? 164 : 240}
              />,
            ]}
            speed={80000}
            itemClassName="w-max sm:h-[240px] shrink-0 xl:pr-12 sm:pr-6 pr-4 box-content flex items-center justify-center"
          />
          <ListInfinityAutoScroll
            items={[
              <Image
                key="Review_2_1"
                src={Review_2_1}
                alt={""}
                width={isMobile ? 1816: 2280}
                height={isMobile ? 164 : 240}
              />,
              <Image
                key="Review_2_2"
                src={Review_2_2}
                alt={""}
                width={isMobile ? 1816: 2280}
                height={isMobile ? 164 : 240}
              />,
              <Image
                key="Review_2_3"
                src={Review_2_3}
                alt={""}
                width={isMobile ? 1816: 2280}
                height={isMobile ? 164 : 240}
              />,
            ]}
            speed={80000}
            itemClassName="w-max sm:h-[240px] shrink-0 xl:pr-12 sm:pr-6 pr-4 box-content flex items-center justify-center translate-x-60"
          />
        </div>
        <Box width={0} height={100} />
      </SectionWrap>
      {/* @ts-ignore */}
      <SectionWrap $sectionTheme="light" $preview={false}>
        <Box width={0} height={100} />
        <MainText color={"#191919"}>우리 곧 만나요!</MainText>
        <MainText color={"#191919"}>기다리고 있을게요</MainText>
        <ButtonWrapper>
          <StoreButton logo={appstore} text={"App Store"} />
          <StoreButton logo={playstore} text={"Google Play"} />
        </ButtonWrapper>
        <RowFlexMax>
          <Image
            src={catYellow}
            width={isMobile ? 120 : 320}
            height={isMobile ? 120 : 320}
            alt="노랑 고양이"
          />
          <Image
            src={catRed}
            width={isMobile ? 120 : 320}
            height={isMobile ? 120 : 320}
            alt="빨강 고양이"
          />
          <Image
            src={catSkyblue}
            width={isMobile ? 120 : 320}
            height={isMobile ? 120 : 320}
            alt="하늘 고양이"
          />
          <Image
            src={catGreen}
            width={isMobile ? 120 : 320}
            height={isMobile ? 120 : 320}
            alt="초록 고양이"
          />
        </RowFlexMax>
        <Box width={0} height={100} />
      </SectionWrap>
      <Footer />
    </div>
  );
};

export default Home;

const Box = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

interface SectionWrapProps extends React.HTMLAttributes<HTMLDivElement> {
  $sectionTheme: "light" | "dark";
  $preview: boolean;
}

// @ts-ignore
const SectionWrap = styled.div.attrs<SectionWrapProps>((props) => ({
  "data-theme": props.$sectionTheme,
}))<SectionWrapProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${(props) =>
    props.$sectionTheme === "light" ? "#FFF" : "#191919"};

  ${(props) =>
    props.$preview &&
    css`
      position: relative;
      @media (max-width: 768px) {
        height: 1200px;
      }
    `}
`;

const MainText = styled.p<{ color: string }>`
  font-size: 48px;
  font-weight: 700;
  line-height: 67.2px;
  color: ${(props) => props.color};
  white-space: pre-wrap;
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 1.4;
    text-align: center;
  }
`;

const SubText = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-top: 8px;
  color: ${(props) => props.color};
  @media (max-width: 768px) {
    max-width: 216px;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 356px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 288px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 132px;
  @media (max-width: 768px) {
    gap: 8px;
    margin-top: 60px;
  }
`;

const RowFlex = styled.div<{ flexStart: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) =>
    props.flexStart === "left" ? "flex-start" : "flex-end"};
  max-width: 1069px;
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
    padding: 16px;
    margin: 0 auto;
    background-color: #292929;
    border-radius: 12px;
    gap: 12px;
  }
`;

const RowFlexMax = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 60px;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

const LetterContainer = styled.div`
  margin: 132px 0;
  @media (max-width: 768px) {
    margin: 60px 0;
    padding: 20px;
  }
`;

const BackgroundImage = styled(Image)`
  position: relative;
  width: 1000px;
  height: 1000px;
  object-fit: cover;
  @media (max-width: 768px) {
    position: absolute;
    width: 150%;
    height: 150%;
    top: 150%;
  }
`;

const StepBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    padding: 20px;
  }
`;

const StepContent = styled.div`
  position: absolute;
  top: 0;
  right: -400px;
  max-width: 400px;
  width: 100%;
  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    right: 0;
  }
`;

const StepTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #ff8d23;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-top: 40px;
  }
`;

const StepText = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #f5f5f5;
  margin-top: 12px;
  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;
    max-width: 218px;
    text-align: center;
    margin-bottom: 60px;
  }
`;
