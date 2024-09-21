import React from "react";
import { Grid } from "@mui/material";
import { InputField } from "../input-field";
import { DateSelector } from "../date-selector";
import { SearchButton } from "../search-button";

export const SearchForm: React.FC = () => {
  return (
    <form>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <InputField label="Origin" placeholder="Enter origin" />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField label="Destination" placeholder="Enter destination" />
        </Grid>
        <Grid item xs={12} md={6}>
          <DateSelector />
        </Grid>
        <Grid item xs={12} md={6}>
          <SearchButton />
        </Grid>
      </Grid>
    </form>
  );
};
