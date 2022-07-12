import React, { useState } from "react";
import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./themes/defaultTheme";
import styled, { ThemeProvider } from "styled-components";
import "./App.css"
import ToggleBars from "./helpers/toggleBars";
import Footer from "./components/Footer";
import RoomsPage from "./pages/roomsPage";
import ExteriorPage from "./pages/exteriorPage";
import ContactPage from "./pages/contactPage";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ToggleBars isOpen={isOpen} setIsOpen={setIsOpen}/>
        <PageContentContainer isOpen={isOpen}>
          <Routes>
            <Route path="/" element={<HomePage/>} exact />
            <Route path="/rooms" element={<RoomsPage/>} exact />
            <Route path="/exterior" element={<ExteriorPage/>} exact />
            <Route path="/contact_us" element={<ContactPage/>} exact />
          </Routes>
        </PageContentContainer>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;

const PageContentContainer = styled.div`
  min-height: 100vh;
  ${({ isOpen }) => `
    position: ${isOpen && "fixed"};
  `}
`
