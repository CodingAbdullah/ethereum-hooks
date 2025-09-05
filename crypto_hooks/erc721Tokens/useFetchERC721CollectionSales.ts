import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Collection Sales Hook
export const useFetchERC721CollectionSales = async (contractAddress: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ contractAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /erc721-collection-sales
    const state = useFetch("https://b5xcn2afinyiq32izaoxe4mzua0ggxvm.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}