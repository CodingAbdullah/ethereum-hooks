import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Collection Data Hook
export const useFetchERC721CollectionData = async (contractAddress: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-collection-data
    const state = useFetch("https://u2pdhfz4qbfkkyp6z4yg4n57hq0hzica.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}