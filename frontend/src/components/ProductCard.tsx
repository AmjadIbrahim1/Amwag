import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useCart } from "../context/Cart/CartContext";
import "./button.css"; 

interface Props {
  _id: string;
  title: string;
  image: string;
  price: string;
}

export default function ProductCard({ _id, title, image, price }: Props) {
  const { addItemToCart } = useCart();

  return (
    <Card
      sx={{
        backgroundColor: "hsla(240, 15%, 9%, 1)",
        backgroundImage: `radial-gradient(
            at 88% 40%,
            hsla(240, 15%, 9%, 1) 0px,
            transparent 85%
          ),
          radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
          radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
          radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%),
          radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%),
          radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%)`,
        borderRadius: "1rem",
        boxShadow: "0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset",
        color: "white",
      }}
    >
      <CardMedia sx={{ height: 200 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="rgba(255,255,255,0.7)">
          {price} EGP
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ color: "white" }}
          className="button"
          size="small"
          onClick={() => addItemToCart(_id)}
        >
          <span>🛒</span> Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
