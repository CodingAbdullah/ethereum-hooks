import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC20 Collection Transfers
export const useERC20Transfers = async (contractAddress: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc20-collection-transfers
    const state = useFetch("https://msee4ccresifmjhm3mdedry3ki0xvdgx.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}