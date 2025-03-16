import styled from "styled-components";

const Footer = () => {
  return <Wrapper>Copyright© harunyang. All rights reserved.</Wrapper>;
};

export default Footer;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100px;
  font-size: 20px;
  @media (max-width: 768px) {
    height: 68px;
    font-size: 14px;
  }
`;
