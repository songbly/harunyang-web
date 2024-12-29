import React from "react";
import styled from "styled-components";

interface ProgressBarProps {
  currentStep: number;
  totalSteps?: number;
  onStepClick?: (step: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps = 4,
  onStepClick,
}) => {
  return (
    <ProgressWrapper>
      <Line />
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

export default ProgressBar;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 300px;
  height: 50px;
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #333;
  transform: translateY(-50%);
  z-index: 0;
`;

const Step = styled.div<{ active: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#FF7D1A" : "#333")};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: ${(props) => (props.active ? "default" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.active ? "#FF9B3D" : "#555")};
  }
`;

const ActiveIndicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ff7d1a;
  box-shadow: 0 0 10px rgba(255, 125, 26, 0.5);
`;
