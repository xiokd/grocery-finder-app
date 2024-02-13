import React from "react";
import "../index.css";
import {
  Box,
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
import PlacesAutocomplete from "../components/PlacesAutocomplete";
import logo from "../images/logo.png";

function Location() {
  // Address/Location and Distance React Hooks
  const [location, setLocation] = React.useState("");
  const [distance, setDistance] = React.useState("");

  // Handle data change and updates the Distance Dropdown's view
  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  // Simple test console log for both Location and Distance values
  const valueTest = () => {
    if (!mapLocation.distance && !mapLocation.location) {
      console.log("Address/Location and Distance values are empty!");
    } else if (mapLocation.distance && !mapLocation.location) {
      console.log("Location value is empty!");
    } else if (!mapLocation.distance && mapLocation.location) {
      console.log("Address/Location value is empty!");
    } else {
      console.log(
        "Location: " +
          mapLocation.location +
          "\nDistance: " +
          mapLocation.distance
      );
    }
  };

  // Initializes mapLocation object with attributes that can be modified
  const mapLocation = {
    distance: distance,
    location: location,
  };

  /*
  Tasks:
  - TextField component should be switched to MUI Autocomplete component.
  - Dropdown menu allows user to select a Distance Value represented by a number.
  - After the user presses the IconButton, both Location and Distance value are used with Google Maps API to update the Map View.
  */

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
                  <PlacesAutocomplete
                    changeLocationValue={(location) => setLocation(location)}
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
                    onChange={handleDistanceChange}
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
              <IconButton color="primary" onClick={valueTest}>
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
