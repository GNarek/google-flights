import React from "react";
import { Grid, TextField } from "@mui/material";

export const DateSelector: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Departure Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          margin="normal"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Return Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          margin="normal"
        />
      </Grid>
    </Grid>
  );
};
