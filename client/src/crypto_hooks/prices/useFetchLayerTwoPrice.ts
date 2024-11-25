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
    const state = useFetch('http://localhost:5000/layer-two-prices', options);

    // Return the state from the custom hook
    return state;
}