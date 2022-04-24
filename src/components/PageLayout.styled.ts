import styled from 'styled-components';

export const PageLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  min-height: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column-reverse;
  }
`