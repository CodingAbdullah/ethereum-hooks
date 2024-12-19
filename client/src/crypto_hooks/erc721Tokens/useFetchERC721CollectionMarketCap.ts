import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Collection Market Cap Hook
export const useFetchERC721CollectionMarketCap = async (contractAddress: string, duration: 2 | 14 | 30, serverURL: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress, duration }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-collection-market-cap
    const state = useFetch(serverURL, options);

    // Return the state from the custom hook
    return state;
}