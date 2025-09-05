import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC20 Collection Owners Hook
export const useFetchERC20CollectionOwners = async (contractAddress: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc20-collection-owners
    const state = useFetch("https://hyrbuxy6aivjqjrgtogd3nx5we0gcxjr.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}