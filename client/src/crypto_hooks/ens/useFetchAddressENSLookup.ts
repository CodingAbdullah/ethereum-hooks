import { useFetch } from "../../custom_hooks/useFetch";

// Fetching Address to ENS Custom hook
export const useFetchAddressENSLookup = (address: string, port: number) => {
    const URL = `http://localhost:${port}/address-to-ens-information`; // Define the API endpoint
    
    const options = {
        method: 'POST',
        body: JSON.stringify({ address }),
        headers: {
            'accept': 'application/json'
        }
    };

    const state = useFetch(URL, options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}