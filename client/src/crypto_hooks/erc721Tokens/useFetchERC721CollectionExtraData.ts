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
    const state = useFetch('http://localhost:5000/erc721-collection-extra-data', options);

    // Return the state from the custom hook
    return state;
}