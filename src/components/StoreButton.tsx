import styled from "styled-components";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";

const StoreButton = ({ logo, text }) => {
  const { width, height, isMobile } = useWindowSize();

  if (width === undefined || height === undefined) {
    return <div>Loading...</div>;
  }

  const logoSize = isMobile ? 20 : 36;
  
  return (
    <ButtonWrapper>
      <Image src={logo} width={logoSize} height={logoSize} alt="store logo" />
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
};

export default StoreButton;

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 12px;
  gap: 8px;
`;
const ButtonText = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #191919;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
