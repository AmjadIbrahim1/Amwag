import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "./Register.css";
import { useRef, useState } from "react";
import { BASE_URL } from "../constants/baseURL";
import { useAuth } from "../context/AuthContext";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { login } = useAuth();

  const onSubmit = async () => {
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!firstName || !lastName || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    const response = await fetch(`${BASE_URL}/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    if (!response.ok) {
      setError("User already exists!");
      return;
    }

    const token = await response.json();
    if (!token) {
      setError("No token returned");
      return;
    }

    login(email, token);
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="form"
        >
          <p id="heading">Register</p>

          <div className="field">
            <input
              name="firstName"
              ref={firstNameRef}
              autoComplete="off"
              placeholder="First Name"
              className="input-field"
              type="text"
            />
          </div>

          <div className="field">
            <input
              name="lastName"
              ref={lastNameRef}
              autoComplete="off"
              placeholder="Last Name"
              className="input-field"
              type="text"
            />
          </div>

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
            Register
          </button>

          {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
        </form>
      </Box>
    </Container>
  );
}
