import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { darkTheme, lightTheme } from "./Utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Signin from "./Pages/Signin";
import axios from 'axios'


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [videos,setVideos] = useState([])

  useEffect(()=>{
   axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=28aa3c7130bb9e9c02d5fcc14f7bd997&language=en-US")
    .then(data => data.data.results)
    .then(data=>setVideos(data))
  },[])


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home videos={videos} />} />
                  <Route path="signin" element={<Signin />} />
                  <Route path="video">
                    <Route path=":id" element={<Video videos={videos} />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding:22px 96px;
`;
