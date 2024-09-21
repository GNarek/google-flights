import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { SearchForm } from "../../components/search-form";

export const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Search Flights
        </Typography>
        <SearchForm />
      </Box>
    </Container>
  );
};
