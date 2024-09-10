// Custom interface for working with the CoinGecko Coin Market Hook
export interface Coin {
    ids: string;
    vs_currencies: string;
    include_market_cap: boolean;
    include_24hr_vol: boolean;
    include_24hr_change: boolean;
    include_last_updated_at: boolean;
    precision: string;
}