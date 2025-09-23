import { Container, Typography, Box } from "@mui/material";
import { useCart } from "../context/Cart/CartContext";

export default function CartPage() {
  const { cartItems, totalAmount } = useCart();

  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        My Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography>No items in cart</Typography>
      ) : (
        cartItems.map((item) => (
          <Box
            key={item.productId}
            sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
          ></Box>
        ))
      )}
    </Container>
  );
}
