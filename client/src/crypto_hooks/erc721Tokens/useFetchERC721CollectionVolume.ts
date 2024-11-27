import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Collection Volume Hook
export const useFetchERC721CollectionVolume = async () => {

    // Set options for request
    let options = {
        method: 'POST',
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    const state = useFetch('http://localhost:5000/erc721-collection-volume', options);

    // Return the state from the custom hook
    return state;
}