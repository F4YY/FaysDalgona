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
import { Container } from './components/styled/styled_container';

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <AuthContextProvider>
          <Container>
            <NavBar />
            <HeroSection />
            <Highlight/>
            <Main/>
            <FootNav />
            <Alert />
          </Container>
        </AuthContextProvider>
      </AlertProvider>
    </ChakraProvider>
  );
};

export default App;
