import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import NavBar from "../components/NavBar";
import StoreCard from "../components/StoreCard";
import ParentComponent from './ParentComponent'; // Import ParentComponent

function StoreMap({ location, distance }) { // Receive location and distance as props
    const position = { lat: 47.487389, lng: -117.575762 };
    const [mapView, setMapView] = useState({ center: position, zoom: 15 }); // Initial map view

    useEffect(() => {
        // Function to update map view based on location and distance
        const updateMapView = () => {
            // Check if location is valid
            if (location.lat !== null && location.lng !== null) {
                // Set the center of the map to the specified location
                const newCenter = { lat: location.lat, lng: location.lng };
                // Set the zoom level based on the distance value
                let newZoom = 15; // Default zoom level
                if (distance === 2) {
                    newZoom = 12;
                } else if (distance === 3) {
                    newZoom = 10;
                } else if (distance === 5) {
                    newZoom = 8;
                } // Adjust zoom level based on other distance values as needed
                // Update map view with new center and zoom level
                setMapView({ center: newCenter, zoom: newZoom });
            } else {
                console.error("Invalid location");
            }
        };

        updateMapView(); // Call the function initially and whenever location or distance changes
    }, [location, distance]);

    // Handle click event of search icon
    const handleSearch = () => {
        // Call updateMapView function when the user clicks the search icon
        updateMapView();
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
            <ParentComponent /> {/* Render ParentComponent */}
        </div>
    );
}

export default StoreMap;
