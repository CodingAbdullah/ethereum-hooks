import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC20 Collection Transfers
export const useFetchERC20Transfers = async (contractAddress: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    const state = useFetch('http://localhost:5000/erc20-collection-transfers', options);

    // Return the state from the custom hook
    return state;
}