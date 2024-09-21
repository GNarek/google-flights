import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Home } from "./pages/home";
import { FlightDetails } from "./pages/flight-details";

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark", // This sets the theme to dark mode
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight/:id" element={<FlightDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
