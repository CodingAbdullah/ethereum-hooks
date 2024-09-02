import { useEffect, useState } from 'react';

interface FetchState<T = any> {
    data: T | null;
    loading: boolean;
    error: boolean;
}

// Custom hook for fetching data using the FETCH Client API
export const useFetch = <T = any>(URL: string, options: RequestInit = {}) => {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: false,
        error: false,
    });

    // On useFetch call, make the appropriate API request
    // Set the state accordingly
    useEffect(() => {
        (async () => {
            setState({ data: null, loading: true, error: false });
            try {
                const response = await fetch(URL, options);
                if (response.ok) {
                    const json = await response.json();
                    setState({ data: json, loading: false, error: false });
                } else {
                    setState({ data: null, loading: false, error: true });
                }
            } catch (err) {
                setState({ data: null, loading: false, error: true });
            }
        })();
    }, [URL]);

    return state;
}