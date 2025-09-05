import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Collection Attributes Hook
export const useFetchERC721CollectionAttributes = async (contractAddress: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-collection-attributes
    const state = useFetch("https://7rs4acgso6ld44zjpl25jras3q0szvag.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}