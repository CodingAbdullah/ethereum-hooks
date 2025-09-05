import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Collection Floor Price Hook
export const useERC721CollectionFloorPrice = async (contractAddress: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-collection-floor-price
    const state = useFetch("https://343rc276twphsdjwtzrzjytepu0xdxxn.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}