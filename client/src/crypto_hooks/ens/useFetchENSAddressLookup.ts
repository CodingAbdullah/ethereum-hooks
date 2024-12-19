import axios from "axios";
import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ENS to Address Custom hook
export const useFetchENSAddressLookup = (ensName: string, serverURL: string) => {    
    const options = {
        method: 'POST',
        body: JSON.stringify({ ensName }),
        headers: {
            'accept': 'application/json'
        }
    };

    // ENDPOINT - /additional-address-to-ens-information
    const state = useFetch(serverURL, options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}