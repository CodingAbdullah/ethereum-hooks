import { useFetch } from "../../custom_hooks/useFetch";

// Fetching Address to ENS Custom hook
export const useFetchGasLookup = () => {
    const URL = 'http://localhost:5000/gas-information'; // Define the API endpoint
    
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json'
        }
    };

    const state = useFetch(URL, options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}