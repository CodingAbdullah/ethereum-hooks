import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Collection Transfers Hook
export const useFetchERC721CollectionTransfers = async (contractAddress: string, serverURL: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-collection-transfers
    const state = useFetch(serverURL, options);

    // Return the state from the custom hook
    return state;
}