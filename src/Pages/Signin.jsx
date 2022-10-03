import React from 'react'
import styled from 'styled-components'

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        COMPONENT LOGIN AUTH0 OR FIREBASE
      </Wrapper>
    </Container>
  )
}

export default Signin

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height: calc(100vh - 56px);
  color: ${({theme}) => theme.text}
`

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  background-color: ${({theme}) => theme.bgLighter};
  border: 1px solid ${({theme}) => theme.soft};
  padding:20px 50px;
  gap:10px;
`