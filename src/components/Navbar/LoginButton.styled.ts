import styled from "styled-components";

export const StyledLoginButton = styled.button`
  justify-self: end;
  border-color: ${({ theme }) => theme.text};
  background-color: transparent;
  color: ${({ theme }) => theme.text };
  font-size: ${({ theme }) => theme.textSize.small};
  border-style: solid;
  border-radius: 20px;
  border-width: 1px;
  padding: 0 12px 0 12px;
  height: 40px;
  margin-right: 10px;

  :hover {
    cursor: pointer;
  }
`