import { useFetch } from "../../custom_hooks/useFetch";

// Fetch ENS ID lookups
export const useFetchENSIDLookup = (id: string) => {    
    const options = {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: {
            'accept': 'application/json'
        }
    };

    // ENDPOINT - /ens-transfers-by-id
    const state = useFetch("https://ev6i3gsesgdvj7ouxiwpg4qafu0nfvdw.lambda-url.us-east-1.on.aws/", options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}