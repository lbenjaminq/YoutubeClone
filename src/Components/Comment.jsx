import React from 'react'
import styled from 'styled-components'


const Comment = () => {
  return (
    <Container>
      <Avatar src='https://cdn.vox-cdn.com/thumbor/i_B2ovOL2BJfiXoVrNC8X8UGclU=/0x0:4500x3000/920x613/filters:focal(2451x535:3171x1255):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70982967/1241214082.0.jpg' />
      <Details>
      
        <Name> Selection <Date>2 years ago</Date></Name>
        <Text>I like very much</Text>
      </Details>
    </Container>
  )
}

export default Comment

const Container  = styled.div`
  display:flex;
  gap:10px;
  margin: 20px 0px;

`

const Avatar  = styled.img`
  height: 50px;
  width:50px;
  border-radius:50%;
  object-fit:cover;
`
const Details = styled.div`
  display:flex;
  flex-direction: column;
  gap:10px;
  color: ${({theme}) => theme.text}
`
const Name = styled.span`
  font-size:13px;
  font-weight:500;
`
const Date = styled.span`
  font-size:12px;
  font-weight:400;
  color: ${({theme}) => theme.textSoft};
  margin-left: 5px; 
`

const Text = styled.span`
  font-size:14px;
`