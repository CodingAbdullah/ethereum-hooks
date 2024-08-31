import { useEffect, useState } from 'react';

// Custom hook for fetching data using the FETCH Client API
export const useFetch = (URL: string, options: object) => {
    const [data, updateData] = useState<any>({});
    const [loading, updateLoading] = useState<boolean>(false);
    const [error, updateError] = useState<boolean>(false);

    // On useFetch call, make the appropriate API request
    useEffect(() => {
        (async () => {
            updateLoading(true);
            try {
                const response = await fetch(URL, options);
                if (response.ok) {
                    const json = await response.json();
                    updateLoading(false);
                    updateData(json);
                }
            }
            catch (err) {
                updateLoading(false);
                updateError(true);
            }
        })();
    }, []);

    return { data, loading, error };
}