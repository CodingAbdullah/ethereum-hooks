import { useFetch } from "../../custom_hooks/useFetch";

// Fetch ENS Name lookups
export const useFetchENSNameLookup = (ensName: string, port: number) => {
    const URL = `https://localhost:${port}/ens-transfers-by-name`; // Define the API endpoint
    
    const options = {
        method: 'POST',
        body: JSON.stringify({ ensName }),
        headers: {
            'accept': 'application/json'
        }
    };

    const state = useFetch(URL, options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}