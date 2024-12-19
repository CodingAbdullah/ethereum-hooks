import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Sales data hook
export const useFetchERC721SalesData = async (contractAddress: string, tokenID: string, serverURL: string) => {
    
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress, tokenID }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-sales-data
    const state = useFetch(serverURL, options);

    // Return the state from the custom hook
    return state;
}