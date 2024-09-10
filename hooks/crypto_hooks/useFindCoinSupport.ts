import { useFetch } from '../custom_hooks/useFetch';

// Custom hook for fetching coins supported using the CoinGecko Coins API
export const useFindCoinSupport = () => {
    return useFetch("https://api.coingecko.com/api/v3/simple/supported_vs_currencies", {});
}