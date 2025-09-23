import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/baseURL";
import { useAuth } from "../context/AuthContext";

export default function CartPage() {
  const { token } = useAuth();
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;

    const fetchCart = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          setError("Failed to get user cart, please try again");
          return;
        }

        const data = await response.json();
        setCart(data);
      } catch (err) {
        setError("Something went wrong while fetching the cart");
      }
    };

    fetchCart();
  }, [token]);


  return <>{error && <p style={{ color: "red" }}>{error}</p>}</>;
}
