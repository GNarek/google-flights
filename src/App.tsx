import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { SearchResults } from "./pages/search-results";
import { FlightDetails } from "./pages/flight-details";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/flight/:id" element={<FlightDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
