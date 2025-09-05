import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC20 Collection Holdings
export const useERC20Holdings = async (contractAddress: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc20-collection-holdings
    const state = useFetch("https://2i2neqclwlgygwimhbzlhdtjwa0dupee.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}