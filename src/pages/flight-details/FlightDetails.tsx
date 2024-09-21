import { useParams } from "react-router-dom";

export const FlightDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch and display flight details using the ID
  return <div>Flight Details for Flight ID: {id}</div>;
};
