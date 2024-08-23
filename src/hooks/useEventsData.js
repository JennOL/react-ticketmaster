import { useEffect, useState } from 'react';
import eventsJSON from '../data/events.json'

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            try {
                setData(eventsJSON);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 3000)
        // Load API Call
    }, []);

    return {
        events: data._embedded?.events || [],
        loading,
        error
    }
}

export default useEventsData;