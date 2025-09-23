import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Grid,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

function Navbar() {
  const { username, isAuthenticated, logout } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handelLogin = () => {
    navigate("/login");
  };
  const handelCart = () => {
    navigate("/cart");
  };
  const handelLogout = () => {
    logout();
    navigate("/");
    handleCloseUserMenu();
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0099cc",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">My Orders</Typography>
              </MenuItem>
              <MenuItem onClick={handelLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: { xs: 1, md: 0 },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <CatchingPokemonIcon sx={{ mr: 1, fontSize: 36 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
                fontWeight: 700,
                color: "#fff",
                textDecoration: "none",
              }}
            >
              AMWAG
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{ flexGrow: 0 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={4}
          >
            <IconButton aria-label="cart" onClick={handelCart}>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon sx={{ color: "wheat" }} />
              </Badge>
            </IconButton>
            {isAuthenticated ? (
              <>
                <Tooltip title="Open settings">
                  <>
                    <Grid
                      container
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={2}
                    >
                      <Grid item>
                        <Typography>{username}</Typography>
                      </Grid>
                      <Grid item>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar alt={username || "Guest"} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </>
                </Tooltip>
                <Menu
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  sx={{ mt: "45px" }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">My Orders</Typography>
                  </MenuItem>
                  <MenuItem onClick={handelLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button sx={{ color: "red" }} onClick={handelLogin}>
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
