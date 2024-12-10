import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Prices Hook
export const useFetchERC721Price = async (contractAddress: string, tokenID: number, port: number) => {
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress, tokenID }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    const state = useFetch(`http://localhost:${port}/erc721-token-price`, options);

    // Return the state from the custom hook
    return state;
}