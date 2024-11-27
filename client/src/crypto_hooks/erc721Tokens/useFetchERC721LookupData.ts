import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Lookup Data hook
export const useFetchERC721LookupData = async (contractAddress: string, tokenID: string) => {
    
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress, tokenID }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    const state = useFetch('http://localhost:5000/erc721-lookup-data', options);

    // Return the state from the custom hook
    return state;
}