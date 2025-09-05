import { useFetch } from "../../custom_hooks/useFetch";

// Fetching Address to ENS Custom hook
export const useGasLookup = () => {
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json'
        }
    };

    // ENDPOINT - /gas-information
    const state = useFetch("https://wsebjfjyi4k2kfb4mbcrcjyrqa0nwifh.lambda-url.us-east-1.on.aws/", options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}