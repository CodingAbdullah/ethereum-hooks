import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Lookup Data hook
export const useERC721LookupData = async (contractAddress: string, tokenID: string) => {
    
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress, tokenID }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-lookup-data
    const state = useFetch("https://rd7cae6wlnx3lsiuncgjgeap5e0lkbew.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}