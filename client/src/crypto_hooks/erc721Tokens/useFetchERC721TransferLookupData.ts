import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Transfer Lookup data hook
export const useFetchERC721TransferLookupData = async (contractAddress: string, tokenID: string, port: number) => {
    
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress, tokenID }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    const state = useFetch(`http://localhost:${port}/erc721-token-transfer-lookup-data`, options);

    // Return the state from the custom hook
    return state;
}