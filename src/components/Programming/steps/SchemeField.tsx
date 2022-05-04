import React, { useState } from 'react';
import styled from 'styled-components';
import { SchemeInput } from '../styled';

type Props = {
  onBlur: (value: string) => void;
  initialValue: string;
}

const SchemeField: React.FC<Props> = ({ initialValue, onBlur, children }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <SchemeWrapper>
      <SchemeRubric>{children}</SchemeRubric>
      <SchemeInput
        onBlur={() => onBlur(value)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </SchemeWrapper>

  )
};

const SchemeWrapper = styled.div`
  display: flex;
  gap: 10px;
`

const SchemeRubric = styled.span`
  text-align: right; 
  white-space: nowrap;
`;


export default SchemeField;
