import { useFetch } from "../../custom_hooks/useFetch";

// Fetching Address to ENS Custom hook
export const useFetchAddressENSLookup = (address: string, serverURL: string) => {    
    const options = {
        method: 'POST',
        body: JSON.stringify({ address }),
        headers: {
            'accept': 'application/json'
        }
    };

    // ENDPOINT - /address-to-ens-information
    const state = useFetch(serverURL, options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}