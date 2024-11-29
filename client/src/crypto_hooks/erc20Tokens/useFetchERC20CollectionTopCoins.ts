import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC20 Collection Top Coins
export const useFetchERC20CollectionTopCoins = async () => {

    // Set options for request
    let options = {
        method: 'POST',
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    const state = useFetch('http://localhost:5000/erc20-top-coins', options);

    // Return the state from the custom hook
    return state;
}