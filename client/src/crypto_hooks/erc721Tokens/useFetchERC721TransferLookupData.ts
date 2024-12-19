import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Transfer Lookup data hook
export const useFetchERC721TransferLookupData = async (contractAddress: string, tokenID: string, serverURL: string) => {
    
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress, tokenID }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-token-transfer-lookup-data
    const state = useFetch(serverURL, options);

    // Return the state from the custom hook
    return state;
}