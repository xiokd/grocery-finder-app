// ParentComponent.jsx
import React, { useState } from 'react';
import StoreMap from './StoreMap';

function ParentComponent() {
    // Example location and distance data
    const [location, setLocation] = useState({ lat: 47.487389, lng: -117.575762 });
    const [distance, setDistance] = useState(1);

    return (
        <div>
            {/* Pass location and distance as props to StoreMap */}
            <StoreMap location={location} distance={distance} />
        </div>
    );
}

export default ParentComponent;

// ParentComponent.jsx
import React, { useState } from 'react';
import StoreMap from './StoreMap';

function ParentComponent() {
    // Example location and distance data
    const [location, setLocation] = useState({ lat: 47.487389, lng: -117.575762 });
    const [distance, setDistance] = useState(1);

    return (
        <div>
            {/* Pass location and distance as props to StoreMap */}
            <StoreMap location={location} distance={distance} />
        </div>
    );
}

export default ParentComponent;
