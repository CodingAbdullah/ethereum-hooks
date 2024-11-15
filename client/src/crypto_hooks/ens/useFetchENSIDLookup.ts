import { useFetch } from "../../custom_hooks/useFetch";

// Fetch ENS ID lookups
export const useFetchENSIDLookup = (id: string) => {
    const URL = 'https://localhost:5000/ens-transfers-by-id'; // Define the API endpoint
    
    const options = {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: {
            'accept': 'application/json'
        }
    };

    const state = useFetch(URL, options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}