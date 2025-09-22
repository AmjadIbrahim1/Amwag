import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";

export default function HomePage() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ mt: 2 }}>
          <Grid container spacing={2} justifyContent="center" >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ProductCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ProductCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ProductCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ProductCard />
            </Grid>
          </Grid>
      </Container>
    </>
  );
}
