import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Collection Data Hook
export const useFetchERC721CollectionExtraData = async (contractAddress: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - erc721-collection-extra-data
    const state = useFetch("https://b5mkshxv54bbj4d54rxze5cj6q0xhptc.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}