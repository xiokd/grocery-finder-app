import React, { useState, useEffect } from "react";
import "../index.css";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

import NavBar from "../components/NavBar";
import StoreCard from "../components/StoreCard";
import ParentComponent from './ParentComponent'; // Import ParentComponent
import { useState, useEffect } from "react";

function StoreMap({ location, distance, onSearch }) {
    const position = { lat: 47.487389, lng: -117.575762 };
    const [mapView, setMapView] = useState({ center: position, zoom: 15 });

    useEffect(() => {
        const updateMapView = () => {
            if (location && location.lat !== null && location.lng !== null) {
                const newCenter = { lat: location.lat, lng: location.lng };
                let newZoom = 15;
                if (distance === 2) {
                    newZoom = 12;
                } else if (distance === 3) {
                    newZoom = 10;
                } else if (distance === 5) {
                    newZoom = 8;
                }
                setMapView({ center: newCenter, zoom: newZoom });
            } else {
                console.error("Invalid location");
            }
        };

        updateMapView();
    }, [location, distance]);

    const handleSearch = () => {
        onSearch(location, distance);
    };

    return (
        <div>
            <NavBar />
            <div className="map-page-container">
                <APIProvider apiKey="AIzaSyCqMmqDBbJcNMusOz-7xBlYXkrr57k9Yv8">
                    <div className="map-container">
                        <Map zoom={mapView.zoom} center={mapView.center}></Map>
                    </div>
                </APIProvider>
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
            </div>
        </div>
    );
}

export default StoreMap;