import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src='https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2022/08/23/16612640597831.jpg' />
        <Input placeholder='Add a comment' />
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  )
}

export default Comments


const Container  = styled.div``

const NewComment  = styled.div`
  display:flex;
  align-items:center;
  gap:10px;

`

const Avatar  = styled.img`
  height: 50px;
  width:50px;
  border-radius:50%;
  object-fit:cover;
`

const Input  = styled.input`
  border:none;
  border-bottom:1px solid ${({theme}) => theme.soft};
  background-color:transparent;
  outline:none;
  padding:5px;
  width:100%;
`