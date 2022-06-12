import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./themes/defaultTheme";
import { ThemeProvider } from "styled-components";
import "./App.css"
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
