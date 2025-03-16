// Header.tsx
import Link from "next/link";
import Image from "next/image";
import {
  hamburgerBlack,
  hamburgerWhite,
  harunyangCatLogo,
  harunyangCatLogoBlack,
  harunyangCatLogoWhite,
  logoBlack,
} from "../assets";
import useWindowSize from "@/hooks/useWindowSize";
import styled from "styled-components";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface HeaderProps {
  currentTheme: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({ currentTheme = "light" }) => {
  const pathname = usePathname();
  const headers = [
    { path: "/#service", label: "서비스" },
    { path: "/team", label: "팀" },
    { path: "/ad", label: "광고 문의" },
  ];

  console.log("currentTheme", currentTheme);
  const { width, height, isMobile } = useWindowSize();
  const [opened, setOpenNav] = useState(false);

  if (width === undefined || height === undefined) {
    return <div>Loading...</div>;
  }

  const isActiveRoute = (itemPath: string, currentPath: string) => {
    const basePath = itemPath.split("#")[0] || "/";
    return basePath === currentPath;
  };

  const pcHeader = () => {
    return (
      <HeaderWrapper themeStyle={currentTheme} height={80}>
        <div className="flex items-center justify-between max-w-[1440px] w-full">
          <Link href="/">
            <Image
              src={
                currentTheme === "dark"
                  ? harunyangCatLogoWhite
                  : harunyangCatLogoBlack
              }
              width={160}
              height={56}
              alt="블랙 로고"
            />
          </Link>

          <div className="flex items-center justify-around w-[380px]">
            {headers.map((item) => (
              <NavLink
                key={item.label}
                href={item.path}
                active={isActiveRoute(item.path, pathname)}
                themeStyle={currentTheme}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </HeaderWrapper>
    );
  };

  const mobileHeader = () => {
    return (
      <HeaderWrapper themeStyle={currentTheme} height={52} className="px-5">
        <div className="flex items-center justify-between max-w-[1440px] w-full">
          <NavLink href="/">
            <Image
              src={harunyangCatLogo}
              width={36}
              height={36}
              alt="블랙 로고"
            />
          </NavLink>

          <Image
            src={currentTheme === "dark" ? hamburgerWhite : hamburgerBlack}
            width={28}
            height={28}
            alt="블랙 로고"
            onClick={() => setOpenNav(!opened)}
          />
          {opened && (
            <NavWrap themeStyle={currentTheme}>
              {headers.map((item) => (
                <NavLink
                  key={item.label}
                  href={item.path}
                  active={isActiveRoute(item.path, pathname)}
                  themeStyle={currentTheme}
                >
                  {item.label}
                </NavLink>
              ))}
            </NavWrap>
          )}
        </div>
      </HeaderWrapper>
    );
  };

  return <>{isMobile ? mobileHeader() : pcHeader()}</>;
};

export default Header;

const HeaderWrapper = styled.div<{
  themeStyle: "light" | "dark";
  height: number;
}>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.height}px;
  background-color: ${(props) =>
    props.themeStyle === "light" ? "#fff" : "#191919"};
  transition: background-color 0.3s ease;
`;

const NavWrap = styled.div<{ themeStyle?: "light" | "dark" }>`
  width: 100%;
  height: auto;
  background-color: ${(props) =>
    props.themeStyle === "dark" ? "#191919" : "#fff"};
  position: fixed;
  top: 52px;
  left: 0;
  padding: 20px;
`;

const NavLink = styled(Link)<{
  active?: boolean;
  themeStyle?: "light" | "dark";
}>`
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  color: ${(props) =>
    props.active
      ? "#FC8212"
      : props.themeStyle === "dark"
      ? "#ffffff"
      : "#000000"};
`;
