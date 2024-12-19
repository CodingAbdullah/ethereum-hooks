import { useFetch } from "../../custom_hooks/useFetch";

// Fetch ENS ID lookups
export const useFetchENSIDLookup = (id: string, serverURL: string) => {    
    const options = {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: {
            'accept': 'application/json'
        }
    };

    // ENDPOINT - /ens-transfers-by-id
    const state = useFetch(serverURL, options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}