import { useFetch } from "../../custom_hooks/useFetch";

// Fetching Address to ENS Custom hook
export const useFetchGasLookup = (serverURL: string) => {
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json'
        }
    };

    // ENDPOINT - /gas-information
    const state = useFetch(serverURL, options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}