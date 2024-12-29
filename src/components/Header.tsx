import Link from "next/link";
import Image from "next/image";
import { logoBlack } from "../assets";
const Header = () => {
  const headers = [
    { path: "/#service", label: "서비스" },
    { path: "/team", label: "팀" },
    { path: "/ad", label: "광고 문의" },
  ];
  return (
    <div className="flex items-center justify-between sticky top-0 left-0 z-50 w-full">
      <Link href="/">
        <Image src={logoBlack} width={160} height={56} alt="블랙 로고" />
      </Link>

      <div className="flex items-center justify-around w-[380px]">
        {headers.map((item) => (
          <Link href={item.path}>{item.label}</Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
