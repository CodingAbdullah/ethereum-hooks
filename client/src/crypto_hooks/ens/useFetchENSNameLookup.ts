import { useFetch } from "../../custom_hooks/useFetch";

// Fetch ENS Name lookups
export const useFetchENSNameLookup = (ensName: string, serverURL: string) => {
    
    const options = {
        method: 'POST',
        body: JSON.stringify({ ensName }),
        headers: {
            'accept': 'application/json'
        }
    };

    // ENDPOINT - /ens-transfers-by-name
    const state = useFetch(serverURL, options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}