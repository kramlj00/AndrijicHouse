import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./themes/defaultTheme";
import styled, { ThemeProvider } from "styled-components";
import "./App.css"
import ToggleBars from "./helpers/toggleBars";
import Footer from "./components/Footer";
import RoomsPage from "./pages/roomsPage";
import ExteriorPage from "./pages/exteriorPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ToggleBars/>
        <PageContentContainer>
          <Routes>
            <Route path="/" element={<HomePage/>} exact />
            <Route path="/rooms" element={<RoomsPage/>} exact />
            <Route path="/exterior" element={<ExteriorPage/>} exact />
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
`
