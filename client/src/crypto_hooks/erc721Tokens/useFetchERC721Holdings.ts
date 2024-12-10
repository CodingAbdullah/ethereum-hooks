import { useFetch } from "../../custom_hooks/useFetch";

// Fetching ERC721 Holdings hook
export const useFetchERC721Holdings = async (walletAddress: string, port: number) => {
    
    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ walletAddress }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    const state = useFetch(`http://localhost:${port}/erc721-holdings`, options);

    // Return the state from the custom hook
    return state;
}