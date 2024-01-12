import React from "react";
import "../index.css";
import {
  AppBar,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  Stack,
  Button,
  Box,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from "react-router-dom";

function NavBar() {
  const theme = createTheme({
    typography: {
      navBarLogo: {
        fontSize: "1.875rem",
        fontFamily: "Pacifico",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ background: "#607D8B" }}>
        <Toolbar>
          <Typography
            variant="navBarLogo"
            component={Link}
            to="/"
            color="white"
            sx={{ textDecoration: "none" }}
          >
            Grocery Finder
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={2}>
            <Button color="inherit" component={Link} to="/StoreMap">
              <MapIcon sx={{ mr: 1 }} />
              Map
            </Button>
            <Button color="inherit" component={Link} to="/Products">
              <StoreIcon sx={{ mr: 1 }} />
              Products
            </Button>
            <Button color="inherit" component={Link} to="/List">
              <ReceiptLongIcon sx={{ mr: 1 }} />
              List
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
