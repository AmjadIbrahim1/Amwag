import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "./Register.css";
import { useRef, useState } from "react";
import { BASE_URL } from "../constants/baseURL";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const { login } = useAuth();

  const onSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    const response = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      setError("Unable to login user");
      return;
    }

    const token = await response.json();
    if (!token) {
      setError("No token returned");
      return;
    }

    login(email, token);
    navigate("/");
  };

  return (
    <Container fixed>
      <Box
        component="section"
        sx={{
          height: "75vh",
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <p id="heading">Login</p>

          <div className="field">
            <input
              name="email"
              ref={emailRef}
              autoComplete="off"
              placeholder="Email"
              className="input-field"
              type="text"
            />
          </div>

          <div className="field">
            <input
              name="password"
              ref={passwordRef}
              placeholder="Password"
              className="input-field"
              type="password"
            />
          </div>

          <button
            onClick={onSubmit}
            style={{ marginTop: "15px" }}
            className="button3"
          >
            Login
          </button>

          {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
        </form>
      </Box>
    </Container>
  );
}
