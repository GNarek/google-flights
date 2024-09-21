import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { InputField } from "../input-field";
import { DateSelector } from "../date-selector";

interface SearchFormProps {
  onSubmit: (params: {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    adults: string;
    cabinClass: string;
  }) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState("1");
  const [cabinClass, setCabinClass] = useState("economy"); // Default

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const searchParams = {
      origin,
      destination,
      departureDate,
      returnDate,
      adults,
      cabinClass,
    };

    onSubmit(searchParams);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <InputField
            label="Origin"
            placeholder="Enter origin city or airport"
            value={origin}
            onChange={setOrigin}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            label="Destination"
            placeholder="Enter destination city or airport"
            value={destination}
            onChange={setDestination}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DateSelector
            label="Departure Date"
            value={departureDate}
            onChange={setDepartureDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DateSelector
            label="Return Date"
            value={returnDate}
            onChange={setReturnDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            label="Passengers"
            placeholder="Number of adults"
            value={adults}
            onChange={setAdults}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            label="Cabin Class"
            placeholder="e.g. economy"
            value={cabinClass}
            onChange={setCabinClass}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" fullWidth>
            Search Flights
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
