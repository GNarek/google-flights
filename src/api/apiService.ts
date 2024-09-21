import axios from "axios";

// Define the base URL for the RapidAPI Sky Scrapper API
const API_BASE_URL =
  "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights";

// Access the API key from environment variables
const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

if (!API_KEY) {
  throw new Error(
    "API key is missing! Please add REACT_APP_RAPIDAPI_KEY in .env.local"
  );
}

// Set up default Axios instance
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    "x-rapidapi-key": API_KEY,
  },
});
