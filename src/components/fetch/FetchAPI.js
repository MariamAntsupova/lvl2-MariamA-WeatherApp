import axios from 'axios'
import { useState, useEffect } from 'react';

const FetchApi = (url) =>{
    const [data, setData] = useState([]);

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(url)
                .then(response => {
                    setData(response.data);
                    setIsLoaded(true);
                })
                .catch(error => {
                    setError(error);
                });
        };
        fetchData();
    }, [url]);

    return { data };
  
}

export default FetchApi;