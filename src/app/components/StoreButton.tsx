import styled from "styled-components";
import Image from "next/image";

const StoreButton = ({ logo, text }) => {
  return (
    <ButtonWrapper>
      <Image src={logo} alt="store logo" />
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
`;
