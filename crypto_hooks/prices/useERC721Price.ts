import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Prices Hook
export const useERC721Price = async (contractAddress: string, tokenID: number) => {
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress, tokenID }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-token-price
    const state = useFetch("https://brjvjnlp35ln3solbquo6fiize0bnwje.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}