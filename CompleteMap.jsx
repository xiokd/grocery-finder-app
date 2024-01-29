import React, { useEffect } from "react";
import "../index.css";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

import NavBar from "../components/NavBar";
import StoreCard from "../components/StoreCard";

function StoreMap() {
    const position = { lat: 47.487389, lng: -117.575762 };

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

    return (
        <div>
            <NavBar />
            <div className="map-page-container">
                <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                    <div className="map-container">
                        <Map zoom={15} center={position}></Map>
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
