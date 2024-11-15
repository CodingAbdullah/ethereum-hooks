import { useFetch } from "../../custom_hooks/useFetch";

// Fetch ENS Name lookups
export const useFetchENSNameLookup = (ensName: string) => {
    const URL = 'https://localhost:5000/ens-transfers-by-name'; // Define the API endpoint
    
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