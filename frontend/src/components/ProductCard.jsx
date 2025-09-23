import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useCart } from "../context/Cart/CartContext";

export default function ProductCard({ _id, title, price, image }) {
  const { addItemToCart } = useCart();
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 180,
          width: 300,
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price} $
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          fullWidth
          onClick={() => addItemToCart({ _id, title, price, image })}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
