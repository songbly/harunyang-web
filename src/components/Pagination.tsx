import React from "react";
import styled from "styled-components";

interface PaginationProps {
  currentStep: number;
  totalSteps?: number;
  onStepClick?: (step: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentStep,
  totalSteps = 4,
  onStepClick,
}) => {
  return (
    <ProgressWrapper>
      {Array.from({ length: totalSteps }, (_, index) => {
        const step = index;
        return (
          <Step
            key={step}
            active={step === currentStep}
            onClick={() => onStepClick?.(step)}
          >
            {step === currentStep && <ActiveIndicator />}
          </Step>
        );
      })}
    </ProgressWrapper>
  );
};

export default Pagination;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 50px;
  height: 50px;
  gap: 6px;
`;


const Step = styled.div<{ active: boolean }>`
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#FF7D1A" : "#3D3D3D")};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: ${(props) => (props.active ? "default" : "pointer")};

`;

const ActiveIndicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ff7d1a;
  box-shadow: 0 0 10px rgba(255, 125, 26, 0.5);
`;
