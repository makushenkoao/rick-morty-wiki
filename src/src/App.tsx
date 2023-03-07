import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutCharactersPage, AllCharactersPage, EpisodePage, LocationPage} from "./pages";
import {Container} from "@mui/material";

export const App = () => {
  return (
      <Container style={{marginTop: 100}}>
          <Routes >
              <Route path='/' element={<AllCharactersPage/>}/>
              <Route path='/:id' element={<AboutCharactersPage/>}/>
              <Route path='/episode' element={<EpisodePage/>}/>
              <Route path='/location' element={<LocationPage/>}/>
          </Routes>
      </Container>
  );
};