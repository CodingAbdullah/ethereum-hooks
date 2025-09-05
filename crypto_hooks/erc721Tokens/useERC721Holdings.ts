import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Holdings hook
export const useERC721Holdings = async (walletAddress: string) => {
    
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ walletAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-holdings
    const state = useFetch("https://rmepnjzubrgdsvmb66kdwz5upm0khfor.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}