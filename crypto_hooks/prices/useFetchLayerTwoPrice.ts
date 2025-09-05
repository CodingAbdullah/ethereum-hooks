import { LayerTwoNetworks } from "../../types/LayerTwoType";
import { useFetch } from "../../custom_hooks/useFetch";

// Fetching Layer Two Prices Hook
export const useFetchLayerTwoPrice = async (layerTwo: LayerTwoNetworks, currentPrice: boolean, duration: 2 | 14 | 30) => {

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
    const state = useFetch("https://jt7ds5ua6iix7cpa5ueg2ud2gi0joklo.lambda-url.us-east-1.on.aws/", options);

    // Return the state from the custom hook
    return state;
}