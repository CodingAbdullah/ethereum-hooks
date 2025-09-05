import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Sales data hook
export const useERC721SalesData = async (contractAddress: string, tokenID: string) => {
    
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress, tokenID }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-sales-data
    const state = useFetch("https://nhjz6tqihl6bdt7zukf5ru7wnu0ydoqq.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}