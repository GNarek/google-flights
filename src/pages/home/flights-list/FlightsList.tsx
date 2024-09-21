import { useNavigate } from "react-router-dom";
import { FlightItinerary } from "../../../api/flights";
import {
  FlightDetails,
  FlightHeader,
  FlightItem,
  FlightList,
} from "./FlightsList.styles";

type Props = {
  flights: FlightItinerary[];
};

export const FlightsList: React.FC<Props> = (props) => {
  const { flights } = props;
  const navigate = useNavigate();

  const handleFlightClick = (id: string) => {
    navigate(`/flight/${id}`); // Navigate to the flight details page
  };

  return (
    <FlightList>
      {flights.map((flight, index) => (
        <FlightItem key={index} onClick={() => handleFlightClick(flight.id)}>
          <FlightHeader>
            Flight: {flight.legs[0].origin.name} to{" "}
            {flight.legs[0].destination.name} - {flight.price.formatted}
          </FlightHeader>
          <FlightDetails>
            Duration: {Math.floor(flight.legs[0].durationInMinutes / 60)}h{" "}
            {flight.legs[0].durationInMinutes % 60}m
          </FlightDetails>
          <FlightDetails>
            Carrier:{" "}
            {flight.legs[0].carriers.marketing
              .map((carrier) => carrier.name)
              .join(", ")}
          </FlightDetails>
        </FlightItem>
      ))}
    </FlightList>
  );
};
