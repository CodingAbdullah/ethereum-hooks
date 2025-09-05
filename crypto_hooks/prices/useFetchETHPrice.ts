import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ETH Prices Hook
export const useFetchETHPrice = async (currentPrice: boolean, duration: 2 | 14 | 30) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ currentPrice, duration }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /eth-price
    const state = useFetch("https://fl5mxvcm42g3n7wtodnxq52s2a0jeokj.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}