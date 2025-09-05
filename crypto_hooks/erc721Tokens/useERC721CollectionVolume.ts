import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Collection Volume Hook
export const useERC721CollectionVolume = async () => {

    // Set options for request
    let options = {
        method: 'POST',
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-collection-volume
    const state = useFetch("https://zlksxwjaikudsub4rmcc5c4eme0uqntg.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}