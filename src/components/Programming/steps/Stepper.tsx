import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
  steps: React.FC[];
  onSave: () => void;
}

const Stepper: React.FC<Props> = ({ steps, onSave }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const Step = steps[currentStep];

  const handleMove = (step: number) => () => setCurrentStep(currentStep + step);

  const variations = {
    save: {
      title: 'Spara',
      onClick: onSave,
    },
    next: {
      title: 'Vidare',
      onClick: handleMove(1),
    },
    back: {
      title: 'Bakåt',
      onClick: handleMove(-1),
    },
  }

  const renderButtons = () => {

    switch (currentStep) {
      case 0:
        return [variations.next];
      case steps.length - 1:
        return [variations.back, variations.save];
      default:
        return [variations.back, variations.next];
    }
  }

  return (
    <Step>
      <Wrapper>
        {renderButtons().map(b => <StepButton key={b.title} onClick={b.onClick}>{b.title}</StepButton>)}
      </Wrapper>
    </Step>
  )
};

export default Stepper;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-around;
  bottom: 1%;
`;

const StepButton = styled.button`
  color: ${({ theme }) => theme.text.light};
  font-size: ${({ theme }) => theme.text.size.small};
  border-radius: 20px;
  border: none;
  padding: 8px 20px 8px 20px;
  background-color: ${({ theme }) => theme.color.quaternary};

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.quaternary};
  }
`;
