/*  
    Blocknative will be used for ETH and other Layer Two Gas data
    CoinGecko will be used for ETH and ERC20 Token price data
    ETH data will be fetched using Etherscan
    Moralis will be used for data pertaining to ETH related assets
*/

export const NETWORK_MAPPER = {
    'blocknative_url' : 'https://api.blocknative.com/gasprices/blockprices',
    'etherscan_url' : 'https://api.etherscan.io/api',
    'moralis_url' : 'https://deep-index.moralis.io/api/v2/',
    'opensea_url' : 'https://api.opensea.io/api/v2/'
}