import styled from 'styled-components'
import { Button } from '@mui/material'

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
`

export const StyledLink = styled(Button)`
    color: ${({ theme }) => theme.text}
`