import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Collection Market Cap Hook
export const useFetchERC721CollectionMarketCap = async (contractAddress: string, duration: 2 | 14 | 30, port: number) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress, duration }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    const state = useFetch(`http://localhost:${port}/erc721-collection-market-cap`, options);

    // Return the state from the custom hook
    return state;
}