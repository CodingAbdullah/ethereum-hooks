import axios from "axios";
import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ENS to Address Custom hook
export const useFetchENSAddressLookup = (ensName: string, port: number) => {
    const URL = `http://localhost:${port}/additional-address-to-ens-information`; // Define the API endpoint
    
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