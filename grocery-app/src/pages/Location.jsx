import React from "react";
import "../index.css";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormControl,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import NavBar from "../components/NavBar";
import logo from "../images/logo.png";

function Location() {
  const [distance, setDistance] = React.useState("");

  const handleChange = (event) => {
    setDistance(event.target.value);
  };

  // Test console log for button component
  const locationSearchTest = () => {
    console.log("Search Button Clicked!");
  }

  return (
    <div>
      <NavBar />
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        sx={{ minHeight: "90vh", pt: 20 }}
      >
        <Grid item>
          <Box
            component="img"
            sx={{ height: 288, width: 288 }}
            alt="Grocery Finder Logo"
            src={logo}
          />
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Box sx={{ minWidth: 300 }}>
                <FormControl fullWidth>
                  <TextField
                    label="Address/Location"
                    variant="outlined"
                    size="small"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ minWidth: 125 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="distance-select-label">Distance</InputLabel>
                  <Select
                    labelId="distance-select-label"
                    id="distance-select"
                    value={distance}
                    label="Distance"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1 mi</MenuItem>
                    <MenuItem value={2}>2 mi</MenuItem>
                    <MenuItem value={3}>3 mi</MenuItem>
                    <MenuItem value={5}>5 mi</MenuItem>
                    <MenuItem value={10}>10 mi</MenuItem>
                    <MenuItem value={20}>20 mi</MenuItem>
                    <MenuItem value={30}>30 mi</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item>
              <IconButton color="primary" onClick={locationSearchTest}>
                <SearchIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Location;