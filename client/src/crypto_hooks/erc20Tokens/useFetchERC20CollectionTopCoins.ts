import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC20 Collection Top Coins
export const useFetchERC20CollectionTopCoins = async (serverURL: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc20-top-coins
    const state = useFetch(serverURL, options);

    // Return the state from the custom hook
    return state;
}