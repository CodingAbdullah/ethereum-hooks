import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC20 Collection Transfers
export const useFetchERC20CollectionTransfers = async (contractAddress: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc20-collection-transfers
    const state = useFetch("https://bwqre7ze2vm3sum5avrvwzwbrm0gyxcy.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}