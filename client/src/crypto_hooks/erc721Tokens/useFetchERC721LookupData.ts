import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Lookup Data hook
export const useFetchERC721LookupData = async (contractAddress: string, tokenID: string, serverURL: string) => {
    
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
    const state = useFetch(serverURL, options);

    // Return the state from the custom hook
    return state;
}