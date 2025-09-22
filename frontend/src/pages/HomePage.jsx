import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/baseURL";
export default function HomePage() {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState(false);

  useEffect(() => {
    let featchData = async () => {
      try {
        let response = await fetch(`${BASE_URL}/product`);
        let data = await response.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };
    featchData();
  }, []);
  if (error) {
    return <Box>Something went wrong</Box>;
  }
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {products.map((p) => (
            <Grid key={p._id} item>
              <ProductCard
                id={p._id}
                title={p.title}
                price={p.price}
                image={p.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
