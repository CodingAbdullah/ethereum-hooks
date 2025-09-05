import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Collection Trends Hook
export const useFetchERC721CollectionTrends = async () => {

    // Set options for request
    let options = {
        method: 'POST',
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-collection-trends
    const state = useFetch("https://hmzkjpwut4bwaeovhryd6hie540fwvzi.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}