import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Transfer data hook
export const useERC721TransfersData = async (walletAddress: string) => {
    
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ walletAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-wallet-transfers
    const state = useFetch("https://gnfeczsyzj4v6rsyf4zmlpv23q0uixkv.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}