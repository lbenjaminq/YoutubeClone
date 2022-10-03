import React from "react";
import styled from "styled-components";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import Comments from "../Components/Comments";

const Video = () => {
  return (
    <Container>
      <Content>
        <videoWrapper>
          <iframe
            width={"100%"}
            height={"720"}
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="Messi playing"
            frameBorder={"0"}
            allow="accelerometer,autoplay; clipboard-write; enctrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </videoWrapper>
        <Title>Messi Video</Title>
        <Details>
          <Info>5.666.666 views 3 days ago</Info>
          <Buttons>
            <Button>
              <ThumbUpOffAltIcon />
              452
            </Button>
            <Button>
              <ThumbDownOffAltIcon />
              Dislike
            </Button>
            <Button>
              <ReplyIcon />
              Share
            </Button>
            <Button>
              <LibraryAddOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
              <Image src="https://media.gettyimages.com/photos/lionel-messi-of-argentina-looks-on-during-a-match-between-argentina-picture-id1353702600?s=612x612" />
              <ChannelDetail>
                <ChannelName>Messi</ChannelName>
                <ChannelCounter>200k subscribers</ChannelCounter>
                <Description>lorem ipsum  lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum </Description>
              </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>Recomendation</Recommendation>
    </Container>
  );
};

export default Video;

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;

const videoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display:flex;
  gap:20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display:flex;
  align-items:center;
  gap:5px;
  cursor:pointer;

`;

const Hr = styled.hr`
  border:0.5px solid ${({ theme }) => theme.soft}; 
  margin:15px 0px;
`

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display:flex;
  justify-content: space-between;
`
const ChannelInfo = styled.div`
  display:flex;
  gap:20px
`

const Image = styled.img`
  height: 50px;
  width:50px;
  border-radius:50%;
`

const ChannelDetail = styled.div`
  display:flex;
  flex-direction:column;
  color: ${({ theme }) => theme.text};
`

const ChannelName = styled.span`
  font-weight:500;
`
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom:20px;
  color:${({ theme }) => theme.textSoft}; 
  font-size: 12px;

`
const Description = styled.p`
  font-size:14px;
  
`
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: #fff;
  border:none;
  border-radius:3px;
  height: max-content;
  padding:10px 20px;
  cursor:pointer;
`