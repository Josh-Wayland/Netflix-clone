import React, { useState, useEffect } from 'react'
import axios from './axios';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    // pull info when row loads

    async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
    }, [fetchUrl]

    );
    console.log(movies);
    return (
        <div>
            {/* title */}
            <h2>{title}</h2>

            {/* container -> poster */}
        </div>
    )
}

export default Row
