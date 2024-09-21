import { api } from "./apiService";
import { AxiosResponse } from "axios";

export interface FlightSearchParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string;
  cabinClass: string;
  adults: string;
  sortBy: string;
  currency: string;
  market: string;
  countryCode: string;
}

export interface FlightLeg {
  origin: {
    name: string;
  };
  destination: {
    name: string;
  };
  durationInMinutes: number;
  carriers: {
    marketing: Array<{ name: string }>;
  };
}

export interface FlightItinerary {
  id: string;
  price: {
    formatted: string;
  };
  legs: FlightLeg[];
}

export interface FlightResponse {
  data: {
    itineraries: FlightItinerary[];
  };
}

export const fetchFlights = async (
  params: FlightSearchParams
): Promise<FlightItinerary[]> => {
  try {
    const response: AxiosResponse<FlightResponse> =
      await api.get<FlightResponse>("", {
        params: {
          originSkyId: params.originSkyId,
          destinationSkyId: params.destinationSkyId,
          originEntityId: params.originEntityId,
          destinationEntityId: params.destinationEntityId,
          date: params.date,
          cabinClass: params.cabinClass,
          adults: params.adults,
          sortBy: params.sortBy,
          currency: params.currency,
          market: params.market,
          countryCode: params.countryCode,
        },
      });

    if (response.data && response.data.data.itineraries) {
      return response.data.data.itineraries;
    } else {
      throw new Error("No itineraries found in the response");
    }
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};
