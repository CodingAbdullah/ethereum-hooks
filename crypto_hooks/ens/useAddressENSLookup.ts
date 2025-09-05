import { useFetch } from "../../custom_hooks/useFetch";

// Fetching Address to ENS Custom hook
export const useAddressENSLookup = (address: string) => {    
    const options = {
        method: 'POST',
        body: JSON.stringify({ address }),
        headers: {
            'accept': 'application/json'
        }
    };

    // ENDPOINT - /address-to-ens-information
    const state = useFetch("https://37zq2u4ntbygkw7inki3djjm440xctyd.lambda-url.us-east-1.on.aws/", options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}