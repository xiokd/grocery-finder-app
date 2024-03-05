import React, { useEffect, useState } from "react";
import "../index.css";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

import NavBar from "../components/NavBar";
import StoreCard from "../components/StoreCard";
import { useLocation } from "react-router-dom";
import { Box, Button } from "@mui/material";

function StoreMap() {
  // Used to retrieve data from previous page that navigated to current page
  const location = useLocation();

  /*
    Values that the user has entered into the fields from the Location page can be retrieved with the following:
        - Location Value: location.state.location
        - Distance Value: location.state.distance   
  */

  // Sets default location to be Cheney WA
  const [storeMapLatitude, setStoreMapLatitude] = React.useState(47.487389);
  const [storeMapLongitude, setStoreMapLongitude] = React.useState(-117.575762);

  // If the state is not null (User has navigated to StoreMap page from Location page with Location and Distance inputs)
  if (location.state) {
    // Geocode the address
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        address: location.state.location,
      },
      function (results) {
        // Set the latitude and longitude values
        setStoreMapLatitude(results[0].geometry.location.lat());
        setStoreMapLongitude(results[0].geometry.location.lng());
      }
    );
  }

  const position = { lat: storeMapLatitude, lng: storeMapLongitude };

  /*
    useEffect(() => {
        const initializeMap = () => {

            var script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCqMmqDBbJcNMusOz-7xBlYXkrr57k9Yv8&libraries=geometry&callback=initializeMap';
            script.defer = true;
            document.head.appendChild(script);
        };

        const calculateDistance = () => {
            const enteredAddress = document.getElementById('addressInput').value;

            if (!enteredAddress) {
                console.error('Please enter an address.');
                return;
            }

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const userLatLng = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    const geocoder = new window.google.maps.Geocoder();
                    geocoder.geocode({ 'address': enteredAddress }, function(results, status) {
                        if (status === 'OK') {
                            const destination = results[0].geometry.location;

                            const distance = window.google.maps.geometry.spherical.computeDistanceBetween(userLatLng, destination);
                            const distanceKm = distance / 1000; // Convert meters to kilometers

                            console.log('Distance: ' + distanceKm.toFixed(2) + ' km');
                        } else {
                            console.error('Geocode was not successful for the following reason: ' + status);
                        }
                    });
                });
            } else {
                console.error("Geolocation is not supported by this browser.");
            }
        };


        initializeMap(); // Call the initialization function when component mounts
    }, []);
    */

  return (
    <div>
      <NavBar />
      <div className="map-page-content">
        <div className="map-page-container">
          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <div className="map-container">
              <Map zoom={15} center={position}></Map>
            </div>
          </APIProvider>
          <div className="map-page-store-container">
            <div className="store-container no-scrollbar">
              <div className="store-card-container">
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
              </div>
            </div>
            <div>
              <Button variant="contained" sx={{ width: "100%" }}>
                Select Stores
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreMap;
