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
    const state = useFetch('http://localhost:5000/eth-price', options);

    // Return the state from the custom hook
    return state;
}