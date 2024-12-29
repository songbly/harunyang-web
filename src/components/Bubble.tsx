import styled from "styled-components";

interface BubbleProps {
  author: string;
  text: string;
  emoji?: string;
  backgroundColor?: string;
  textColor?: string;
  authorColor?: string;
  tailPosition?: "left" | "right";
}

const Bubble: React.FC<BubbleProps> = ({
  author,
  text,
  emoji,
  backgroundColor = "#FFE49C",
  textColor = "#333",
  authorColor = "#C79353",
  tailPosition = "left",
}) => {
  return (
    <BubbleWrapper
      backgroundColor={backgroundColor}
      textColor={textColor}
      tailPosition={tailPosition}
    >
      <Author authorColor={authorColor}>{author}</Author>
      {text}
      {emoji && <Emoji>{emoji}</Emoji>}
    </BubbleWrapper>
  );
};

export default Bubble;

// 스타일 정의
const BubbleWrapper = styled.div<{
  backgroundColor: string;
  textColor: string;
  tailPosition: "left" | "right";
}>`
  position: relative;
  background: ${(props) => props.backgroundColor};
  ${(props) => (props.tailPosition === "left" ? "left: 30px;" : "right: 30px;")}
  border-radius: 100px;
  padding: 24px 40px;
  font-size: 24px;
  color: ${(props) => props.textColor};
  display: inline-block;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  ::before {
    content: "";
    position: absolute;
    bottom: -9px;
    ${(props) =>
      props.tailPosition === "left" ? "left: 40px;" : "right: 40px;"}
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-radius: 12px;
    border-color: ${(props) => props.backgroundColor} transparent transparent
      transparent;
  }
`;

const Author = styled.span<{ authorColor: string }>`
  font-weight: bold;
  color: ${(props) => props.authorColor};
  margin-right: 5px;
`;

const Emoji = styled.span`
  margin-left: 5px;
`;
