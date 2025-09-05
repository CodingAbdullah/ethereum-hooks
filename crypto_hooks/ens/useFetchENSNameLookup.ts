import { useFetch } from "../../custom_hooks/useFetch";

// Fetch ENS Name lookups
export const useFetchENSNameLookup = (ensName: string) => {
    
    const options = {
        method: 'POST',
        body: JSON.stringify({ ensName }),
        headers: {
            'accept': 'application/json'
        }
    };

    // ENDPOINT - /ens-transfers-by-name
    const state = useFetch("https://f53actwgpl2a3rk6uynoryuoxq0eifuo.lambda-url.us-east-1.on.aws/", options); // Use the custom hook to fetch data

    return state; // Return the state from the custom hook
}