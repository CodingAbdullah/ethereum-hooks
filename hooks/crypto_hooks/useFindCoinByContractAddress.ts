import { useFetch } from '../custom_hooks/useFetch';
import { ContractAddress } from '../types/ContractAddress';

// Custom hook for fetching coins supported using the CoinGecko Coin Contract Address API
export const useFindCoinByContractAddress = (parameters: ContractAddress) => {
    return useFetch("https://api.coingecko.com/api/v3/coins/{id}/contract/", 
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