import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { InputField } from "../input-field";
import { DateSelector } from "../date-selector";
import { SearchFormStyled } from "./SearchForm.styles";

interface SearchFormProps {
  disabled?: boolean;
  onSubmit: (params: {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    adults: string;
    cabinClass: string;
  }) => void;
}

export const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { onSubmit, disabled } = props;

  const [formState, setFormState] = useState({
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    adults: "1",
    cabinClass: "economy",
  });

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <SearchFormStyled>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <InputField
              label="Origin"
              placeholder="Enter origin city or airport"
              value={formState.origin}
              onChange={(value) => handleChange("origin", value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField
              label="Destination"
              placeholder="Enter destination city or airport"
              value={formState.destination}
              onChange={(value) => handleChange("destination", value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DateSelector
              label="Departure Date"
              value={formState.departureDate}
              onChange={(value) => handleChange("departureDate", value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DateSelector
              label="Return Date"
              value={formState.returnDate}
              onChange={(value) => handleChange("returnDate", value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField
              label="Passengers"
              placeholder="Number of adults"
              value={formState.adults}
              onChange={(value) => handleChange("adults", value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField
              label="Cabin Class"
              placeholder="e.g. economy"
              value={formState.cabinClass}
              onChange={(value) => handleChange("cabinClass", value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={disabled}
              variant="contained"
              type="submit"
              fullWidth
            >
              Explore
            </Button>
          </Grid>
        </Grid>
      </form>
    </SearchFormStyled>
  );
};
