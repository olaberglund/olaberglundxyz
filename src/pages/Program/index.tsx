import React, { useState } from 'react'
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
`