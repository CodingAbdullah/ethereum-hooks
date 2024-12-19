import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC20 Prices Hook
export const useFetchERC20Price = async (contractAddress: string, currentPrice: boolean, duration: 2 | 14 | 30, serverURL: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress, currentPrice, duration }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc20-token-price
    const state = useFetch(serverURL, options);

    // Return the state from the custom hook
    return state;
}