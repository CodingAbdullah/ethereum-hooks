import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC20 Collection Transfers
export const useFetchERC20CollectionTransfers = async (contractAddress: string, port: number) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    const state = useFetch(`http://localhost:${port}/erc20-collection-transfers`, options);

    // Return the state from the custom hook
    return state;
}