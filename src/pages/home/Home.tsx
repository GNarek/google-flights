import React, { useState } from "react";
import { SearchForm } from "../../components/search-form";
import {
  fetchFlights,
  FlightSearchParams,
  FlightItinerary,
} from "../../api/flights";
import { cityMapper } from "./Home.utils";
import { FlightsList } from "./flights-list";
import { ErrorText, FormWrapper, HomeStyled, TopImage } from "./Home.styles";
import { Container } from "../../components/container";

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
    <HomeStyled>
      <Container>
        <TopImage />

        <FormWrapper>
          <h1 className="title">Flights</h1>
          <SearchForm disabled={loading} onSubmit={handleSearch} />

          {loading && <p>Loading...</p>}
          {error && <ErrorText>{error}</ErrorText>}

          {flights.length > 0 && <FlightsList flights={flights} />}
        </FormWrapper>
      </Container>
    </HomeStyled>
  );
};
