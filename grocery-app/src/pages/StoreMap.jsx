import React from "react";
import "../index.css";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import NavBar from "../components/NavBar";
import StoreCard from "../components/StoreCard";

function StoreMap() {
  // Default Coordinates set to Cheney WA
  const position = { lat: 47.487389, lng: -117.575762 };

  // Change VITE_GOOGLE_MAPS_API_KEY value in the .env file to API Key value
  return (
    <div>
      <NavBar />
      <div class="map-page-container">
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <div class="map-container">
            <Map zoom={15} center={position}></Map>
          </div>
        </APIProvider>
        <div class="store-container no-scrollbar">
          <div class="store-card-container">
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreMap;
