"use client";

import Image from "next/image";
import { appstore, catLetter, logoBlack, logoWhite } from "./assets";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div
        id="header"
        className={"flex justify-center py-3 border-b border-gray-300"}
      >
        <div className="flex items-center justify-between w-[1440px]">
          <Link href="/">
            <Image src={logoBlack} width={160} height={56} alt="블랙 로고" />
          </Link>

          <div className="flex items-center justify-around w-[380px]">
            <Link href={"#service"}>서비스</Link>
            <Link href={"#team"}>팀</Link>
            <Link href={"#ad"}>광고 문의</Link>
          </div>
        </div>
      </div>
      <div id="service" className="h-dvh">
        <p>고민이 많은 사람들을 위한\n 대화형 일기 서비스</p>
        <p>가볍게 털어놓고 싶은 일상과 고민, 하루냥과 나눠보세요</p>
        <button>
            <Image src={appstore} width={1064} height={1064} alt="블랙 로고" />    
        </button>
        <Image src={catLetter} width={1064} height={1064} alt="블랙 로고" />
      </div>
    </div>
  );
};

export default Home;
