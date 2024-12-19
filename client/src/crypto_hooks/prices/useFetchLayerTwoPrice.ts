import { LayerTwoNetworks } from "../../types/LayerTwoType";
import { useFetch } from "../../custom_hooks/useFetch";

// Fetching Layer Two Prices Hook
export const useFetchLayerTwoPrice = async (layerTwo: LayerTwoNetworks, currentPrice: boolean, duration: 2 | 14 | 30, serverURL: string) => {

    // Set options for request
    let options = {
        method: 'POST',
        body: JSON.stringify({ layerTwo: LayerTwoNetworks[layerTwo], currentPrice, duration }),
        headers : {
            'accept' : 'application/json'
        }
    }

    // Use the custom hook to fetch data
    // ENDPOINT - /layer-two-prices
    const state = useFetch(serverURL, options);

    // Return the state from the custom hook
    return state;
}