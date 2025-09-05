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
    // ENDPOINT - /erc20-top-coins
    const state = useFetch("https://2ebpropr2dgzqicposkbrvr5nq0ofyyx.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}