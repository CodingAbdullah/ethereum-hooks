import { useFetch } from '../custom_hooks/useFetch';
import { CoinList } from '../types/CoinList';

// Custom hook for fetching coins supported using the CoinGecko Coin List API
export const useFindCoinListById = (parameters: CoinList) => {
    return useFetch("https://api.coingecko.com/api/v3/coins/list", 
        { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ parameters }),
            mode: 'cors',
            credentials: 'include' 
        });
}