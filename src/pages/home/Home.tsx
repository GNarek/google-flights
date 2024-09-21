import React, { useState } from "react";
import { SearchForm } from "../../components/search-form";
import {
  fetchFlights,
  FlightSearchParams,
  FlightItinerary,
} from "../../api/flights";
import { cityMapper } from "./Home.utils";

export const Home: React.FC = () => {
  const [flights, setFlights] = useState<FlightItinerary[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (params: {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    adults: string;
    cabinClass: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const originSkyId = cityMapper.cityToSkyId(params.origin);
      const destinationSkyId = cityMapper.cityToSkyId(params.destination);
      const originEntityId = cityMapper.cityToEntityId(params.origin);
      const destinationEntityId = cityMapper.cityToEntityId(params.destination);

      if (
        !originSkyId ||
        !destinationSkyId ||
        !originEntityId ||
        !destinationEntityId
      ) {
        setError("Invalid origin or destination.");
        setLoading(false);
        return;
      }

      const searchParams: FlightSearchParams = {
        originSkyId,
        destinationSkyId,
        originEntityId,
        destinationEntityId,
        date: params.departureDate,
        cabinClass: params.cabinClass,
        adults: params.adults,
        sortBy: "best",
        currency: "USD",
        market: "en-US",
        countryCode: "US",
      };

      const itineraries = await fetchFlights(searchParams);

      if (itineraries.length > 0) {
        setFlights(itineraries);
      } else {
        setError("No flights found for the given criteria.");
        setFlights([]);
      }
    } catch (error) {
      setError("Failed to fetch flight data.");
      setFlights([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Flights</h1>
      <SearchForm onSubmit={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {flights.length > 0 && (
        <ul>
          {flights.map((flight, index) => (
            <li
              key={index}
              style={{ marginBottom: "1em", listStyleType: "none" }}
            >
              <p>
                <strong>Flight:</strong> {flight.legs[0].origin.name} to{" "}
                {flight.legs[0].destination.name} - {flight.price.formatted}
              </p>
              <p>
                <strong>Duration:</strong>{" "}
                {Math.floor(flight.legs[0].durationInMinutes / 60)}h{" "}
                {flight.legs[0].durationInMinutes % 60}m
              </p>
              <p>
                <strong>Carrier:</strong>{" "}
                {flight.legs[0].carriers.marketing
                  .map((carrier) => carrier.name)
                  .join(", ")}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
