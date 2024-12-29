import React from "react";
import styled from "styled-components";

const Letter = ({type}) => {
  return (
    <LetterWrapper>
      <Header>to. 하루냥</Header>
      <LinedTextarea placeholder="무슨 고민이 있으세요? 당신의 고민을 적어보세요!" />
      <SendButton>하루냥에게 고민 보내기</SendButton>
    </LetterWrapper>
  );
};

export default Letter;

const LetterWrapper = styled.div`
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 40px 30px;
  width: 466px;
  height: 440px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 132px;
`;

const Header = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  color: #888;
`;

const LinedTextarea = styled.textarea`
  margin-top: 30px;
  width: 100%;
  height: 240px;
  border-radius: 10px;
  font-size: 14px;
  color: #333;
  resize: none;
  outline: none;
  background-color: #f5f5f5;

  background-image: repeating-linear-gradient(
    to bottom,
    #e5e5e5,
    #e5e5e5 1px,
    transparent 1px,
    transparent 24px
  );
  background-size: 100% 24px;

  ::placeholder {
    color: #bbb;
  }
`;

const SendButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ff7d1a;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e56d17;
  }
`;
