import React from 'react'
import Card from '../Components/Card'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </Container>
  )
}

export default Home

const Container = styled.div`
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap;
  
`