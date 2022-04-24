import React from 'react'
import styled from 'styled-components'
import Programming from '../../components/Programming';

const Program = () => {

  return (
    <Layout>
      <Programming />
    </Layout>
  )
}

export default Program;

const Layout = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 0;
  animation: 0.3s ease-out 0s 1 fadeIn;

  @keyframes fadeIn {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }

`