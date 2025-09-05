import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Opensea data hook
export const useFetchERC721OpenseaData = async (contractAddress: string, tokenID: string) => {
    
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress, tokenID }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-opensea-data
    const state = useFetch("https://qoeq2n767jbu5gbiiy7463d56m0cwdec.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}