import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import {AlertProvider} from "./context/alertContext";
import {AuthContextProvider} from "./context/authContext";
import Main from './components/pages/Main';
import NavBar from './components/pages/NavBar';
import HeroSection from './components/pages/HeroSection';
import Highlight from './components/pages/Highlight';
import FootNav from './components/pages/FootNav';
import Alert from './components/alert/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <AuthContextProvider>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
          <NavBar />
          <HeroSection />
          <Highlight/>
          <Main/>
          <FootNav />
          <Alert />
        </AuthContextProvider>
      </AlertProvider>
    </ChakraProvider>
  );
};

export default App;
