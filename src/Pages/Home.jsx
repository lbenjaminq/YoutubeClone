import Card from '../Components/Card'
import styled from 'styled-components'

const Home = ({videos}) => {

  return (
    <Container>
      {
        videos?.map((movie)=>(
          <Card movie={movie}/>
        ))
      }
    </Container>
  )
}

export default Home

const Container = styled.div`
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap;
  
`