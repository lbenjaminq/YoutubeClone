import React from 'react'
import styled from 'styled-components'
import YT from "../Images/YT.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TheatersIcon from '@mui/icons-material/Theaters';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import FlagIcon from '@mui/icons-material/Flag';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
      <Link to={"/"} style={{textDecoration:"none",color:"inherit"}}>
        <Logo>
          <Img src={YT}/>
          Items
        </Logo>
      </Link>
        <Item>
          <HomeIcon/>
          Home
        </Item>
        <Item>
          <ExploreIcon/>
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon/>
          Subscriptions
        </Item>
        <Hr/>
        <Item>
          <VideoLibraryIcon/>
          Library
        </Item>
        <Item>
          <HistoryIcon/>
          History
        </Item>
        <Hr/>
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Button>
            <AccountCircleIcon/>
            SIGN IN
          </Button>
        </Login>
        <Hr/>
        <Title>
          Best of Lamatube
        </Title>
        <Item>
          <LibraryMusicIcon/>
          Music
        </Item>
        <Item>
          <EmojiEventsIcon/>
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon/>
          Gaming
        </Item>
        <Item>
          <TheatersIcon/>
          Movies
        </Item>
        <Item>
          <ArticleIcon/>
          News
        </Item>
        <Item>
          <LiveTvIcon/>
          Live
        </Item>
        <Hr/>
        <Item>
          <SettingsIcon/>
          Settings
        </Item>
        <Item>
          <FlagIcon/>
          Report
        </Item>
        <Item>
          <HelpIcon/>
          Help
        </Item>
        <Item onClick={()=> setDarkMode(!darkMode)}>
          <ChromeReaderModeIcon/>
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu

const Container = styled.div`
  flex:1;
  background-color:${({theme})=> theme.bgLighter};
  color:${({theme})=> theme.text};
  height:100vh;
  font-size:14px;
  position:sticky;
  top:0
`

const Wrapper = styled.div`
  padding:18px 26px;
`

const Logo = styled.div`
  display:flex;
  align-items:center;
  font-weight: bold;
  margin-bottom:25px;
`

const Img = styled.img`
  height:25px
`

const Item = styled.div`
  display:flex;
  align-items:center;
  gap:20px;
  cursor:pointer;
  padding: 7.5px 0px;
`

const Hr = styled.hr`
  margin:15px 0px;
  border:0.5px solid ${({theme})=> theme.soft};
`
const Login  = styled.div``
const Button = styled.button`
  padding:5px 15px;
  background-color:transparent;
  border:1px solid #3ea6ff;
  border-radius:3px;
  color:#3ea6ff;
  margin-top:10px;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:5px;
`

const Title =  styled.h2`
  font-size: 14px;
  font-weight: 500;
  color:#aaaaaa;
  margin-bottom:20px;
`
