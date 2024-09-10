import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ProfileUI from './ProfileUi/ProfileUI';

function DataFetchingPage() {
    const [data, setData] = useState(null);
    const {profileId} = useParams();
    useEffect(() => {
        // Example of fetching data from an API
        fetch(`http://localhost:3000/profiles/${profileId}`) // Replace with your actual data fetching URL
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
            
    }, []);
    
    return data ? (
                <ProfileUI {...data}/>
            ) : (
                <p>Loading data...</p>
            )


}

export default DataFetchingPage;
