import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ENS to Address Custom hook
export const useFetchENSAddressLookup = (ensName: string) => {    
    const options = {
        method: 'POST',
        body: JSON.stringify({ ensName }),
        headers: {
            'accept': 'application/json'
        }
    };

    // ENDPOINT - /ens-to-address-information
    const state = useFetch("https://jy3upsy3rgbengcktqlqfcwyhy0wcamb.lambda-url.us-east-1.on.aws/", options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}