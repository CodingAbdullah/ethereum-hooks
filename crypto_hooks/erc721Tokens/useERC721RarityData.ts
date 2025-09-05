import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Rarity data hook
export const useERC721RarityData = async (contractAddress: string, tokenID: string) => {
    
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress, tokenID }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-rarity-data
    const state = useFetch("https://eilobcax7r4wayov2rfscraqb40rodzv.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}