# ethereum-hooks
Useful package that contains custom React hooks that can be used for rapid development while working with the Ethereum blockchain. 

These hooks make use of various crypto APIs (free versions only) and save developer time by taking away the need for manual configuration and setup. 

The following resources were utilized when building these client hooks:

- <a href="https://docs.alchemy.com/reference/api-overview">Alchemy</a>
- <a href="https://docs.blocknative.com/">Blocknative</a>
- <a href="https://docs.coingecko.com/v3.0.1/reference/introduction">CoinGecko</a>
- <a href="https://docs.moralis.com/">Moralis</a>
- <a href="https://docs.opensea.io/reference/api-overview">Opensea</a>
- <a href="https://docs.transpose.io/">Transpose</a>

<br />

## React Hooks Client-Server Setup
When working with this package, you will need to implement the typical MERN design pattern, set up <code>.env</code> variables, and set up the server to allow the client hooks to establish communication to the back-end.

<b>You will need to set the following environment variables in your <code>.env</code> file: </b>

- <code>ALCHEMY_API_KEY</code>
- <code>BLK_API_KEY</code>
- <code>CLIENT_URL</code>
- <code>COINGECKO_API_KEY</code>
- <code>MORALIS_API_KEY</code>
- <code>OPENSEA_API_KEY</code>
- <code>PORT</code>
- <code>TRANSPOSE_API_KEY</code>

The following diagram will help you understand the workflow:

<img src="https://genericbucket95.s3.us-east-2.amazonaws.com/hook-server-design.png" alt="Hook Server" width="600" height="400" />


<br />

## Server Setup

For this part, you will need to incorporate the server object exported from the <code>server.ts</code> file inside the server directory.

<b>You will need to build on top of this built-in server, any additional routes and configurations as this server contains all the routes needed to effectively use the client hooks. </b>

This is how you can incorporate the built-in server for additional add-ons and configuration in a custom server file of your own:

<code>customServer.ts</code>

```javascript
import { server } from 'server'; // Import the built-in server

// Environment variables, PORT, and CLIENT_URL will be used by this built-in server
// PORT specifies the port to activate the Node server
// CLIENT_URL specifies the URL that is CORS enabled

// Add any additional routes you may have on top of this server, etc.
server.use("", "/xxx-xxxx");
...
...
...


```

<br />

## React Client Hooks

The hooks cover several areas of the Ethereum blockchain and can be used for Layer Two chains as well. 

You will need to specify the <b>BACKEND URL + ENDPOINT</b> as the <b>Server URL</b> in one of the parameter values to be passed in each of the client hooks you will be using.

For local development, you will need to specify the <b>full localhost address (http://localhost:PORT/ENDPOINT)</b>.

Here is a quick example of how you can work with client hooks. The following is a code snippet for working with React.js:

<code>ENSToAddressPage.tsx</code>
```javascript
import React, { FC }  from 'react';
import { useFetchENSAddressLookup } from '../crypto_hooks/ens/useFetchENSAddressLookup'; // Import hook

// Incorporating the ENS to Address Client Hook.. using Vitalik Buterin's address ;)
// Server URL + Endpoint
// Example uses local development
const ENSToAddressPage: FC = () => {
    const addressInformation = useFetchENSAddressLookup('vitalik.eth', 'http://localhost:5000/additional-address-to-ens-information');
    
    // Each client hook uses the useFetch custom hook
    // It returns three states: data, error, loading
    // We capture these states in a variable (like above) and conditionally render the component
    if (addressInformation.loading){
        return <div>Loading..</div>
    }
    else if (addressInformation.error){
        return <div>Error loading data...</div>
    }
    else { 
        // Hardcoded some parts for demonstrative purposes only
        return (
            <div className='home-page'>
                <table>
                    <tr>
                        <th>ENS</th>
                        <th>Address</th>
                    </tr>
                    <tr>
                        <td>vitalik.eth</td>
                        <td>{ addressInformation.data?.information }</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ENSToAddressPage;
```

<br />

A list of chains supported is provided below in the <code>Types</code> section. 

The following table highlights the <b>30 different client hooks</b> and their <b>endpoints</b>:

<table>
    <tr>
        <th>Category</th>
        <th>Client Hook Name</th>
        <th>Endpoint</th>
        <th>Description</th>
    <tr>
    <tr>
        <td>ENS</td>
        <td><code>useFetchAddressENSLookup(address: string, serverURL: string)</code></td>
        <td><code>/address-to-ens-information</code></td>
        <td>Fetch the equivalent ENS name from a given address</td>
    </tr>
    <tr>
        <td>ENS</td>
        <td><code>useFetchENSAddressLookup(ensName: string, serverURL: string)</code></td>
        <td><code>/additional-address-to-ens-information</code></td>
        <td>Fetch the equivalent ETH address from a given ENS name</td>
    </tr>
    <tr>
        <td>ENS</td>
        <td><code>useFetchENSIDLookup(id: string, serverURL: string)</code></td>
        <td><code>/ens-transfers-by-id</code></td>
        <td>Fetch information of a given ENS ID</td>
    </tr>
    <tr>
        <td>ENS</td>
        <td><code>useFetchENSNameLookup(ensName: string, serverURL: string)</code></td>
        <td><code>/ens-transfers-by-name</code></td>
        <td>Fetch information of a given ENS name</td>
    </tr>
    <tr>
        <td>ERC20</td>
        <td><code>useFetchERC20CollectionOwners(contractAddress: string, serverURL: string)</code></td>
        <td><code>/erc20-collection-owners</code></td>
        <td>Fetch list of owners of a particular ERC20 collection</td>
    </tr>
    <tr>
        <td>ERC20</td>
        <td><code>useFetchERC20CollectionTopCoins(serverURL: string)</code></td>
        <td><code>/erc20-top-coins</code></td>
        <td>Fetch list of the top ERC20 collections</td>
    </tr>
    <tr>
        <td>ERC20</td>
        <td><code>useFetchERC20CollectionTransfers(contractAddress: string, serverURL: string)</code></td>
        <td><code>/erc20-collection-transfers</code></td>
        <td>Fetch transfer activity of a particular ERC20 collection</td>
    </tr>
    <tr>
        <td>ERC20</td>
        <td><code>useFetchERC20Holdings(contractAddress: string, serverURL: string)</code></td>
        <td><code>/erc20-collection-holdings</code></td>
        <td>Track wallet holdings of a particular ERC20 token activity</td>
    </tr>
    <tr>
        <td>ERC20</td>
        <td><code>useFetchERC20Transfers(contractAddress: string, serverURL: string)</code></td>
        <td><code>/erc20-collection-transfers</code></td>
        <td>Track the transfer activity of a particular ERC20 token in a wallet</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionAttributes(contractAddress: string, serverURL: string)</code></td>
        <td><code>/erc721-collection-attributes</code></td>
        <td>Fetch attributes of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionData(contractAddress: string, serverURL: string)</code></td>
        <td><code>/erc721-collection-data</code></td>
        <td>Fetch data of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionExtraData(contractAddress: string, serverURL: string)</code></td>
        <td><code>/erc721-collection-extra-data</code></td>
        <td>Fetch extra data of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionFloorPrice(contractAddress: string, serverURL: string)</code></td>
        <td><code>/erc721-collection-floor-price</code></td>
        <td>Fetch floor price data of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionMarketCap(contractAddress: string, duration: 2 | 14 | 30, serverURL: string)</code></td>
        <td><code>/erc721-collection-market-cap</code></td>
        <td>Fetch market cap data of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionSales(contractAddress: string, serverURL: string)</code></td>
        <td><code>/erc721-collection-sales</code></td>
        <td>Fetch sales data of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionTransfers(contractAddress: string, serverURL: string)</code></td>
        <td><code>/erc721-collection-transfers</code></td>
        <td>Fetch transfer activity of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionTrends(serverURL: string)</code></td>
        <td><code>/erc721-collection-trends</code></td>
        <td>Fetch trending ERC721 collection data</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionVolume(serverURL: string)</code></td>
        <td><code>/erc721-collection-volume</code></td>
        <td>Fetch ERC721 collections by volume data</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721Holdings(walletAddress: string, serverURL: string)</code></td>
        <td><code>/erc721-holdings</code></td>
        <td>Fetch ERC721 holdings of a particular wallet</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721LookupData(contractAddress: string, tokenID: string, serverURL: string)</code></td>
        <td><code>/erc721-lookup-data</code></td>
        <td>Fetch data of a particular ERC721 token</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721OpenseaData(contractAddress: string, tokenID: string, serverURL: string)</code></td>
        <td><code>/erc721-opensea-data</code></td>
        <td>Fetch Opensea data of a particular ERC721 token</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721RarityData(contractAddress: string, tokenID: string, serverURL: string)</code></td>
        <td><code>/erc721-rarity-data</code></td>
        <td>Fetch rarity data of a particular ERC721 token</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721SalesData(contractAddress: string, tokenID: string, serverURL: string)</code></td>
        <td><code>/erc721-sales-data</code></td>
        <td>Fetch sales data of a particular ERC721 token</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721TransferLookupData(contractAddress: string, tokenID: string, serverURL: string)</code></td>
        <td><code>/erc721-lookup-data</code></td>
        <td>Fetch transfer data of a particular ERC721 token</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721TransfersData(walletAddress: string, serverURL: string)</code></td>
        <td><code>/erc721-token-transfer-lookup-data</code></td>
        <td>Fetch ERC721 transfer activity of a particular wallet</td>
    </tr>
    <tr>
        <td>Gas</td>
        <td><code>useFetchGasLookup(serverURL: string)</code></td>
        <td><code>/gas-information</code></td>
        <td>Fetch gas information related to Ethereum or a supported layer two</td>
    </tr>
    <tr>
        <td>Prices</td>
        <td><code>useFetchERC20Price(contractAddress: string, currentPrice: boolean, duration: 2 | 14 | 30, serverURL: string)</code></td>
        <td><code>/erc20-token-price</code></td>
        <td>Fetch pricing data of a particular ERC20 collection</td>
    </tr>
    <tr>
        <td>Prices</td>
        <td><code>useFetchERC721Price(contractAddress: string, tokenID: string, serverURL: string)</code></td>
        <td><code>/erc721-token-price</code></td>
        <td>Fetch pricing data of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>Prices</td>
        <td><code>useFetchETHPrice(currentPrice: boolean, duration: 2 | 14 | 30, serverURL: string)</code></td>
        <td><code>/eth-price</code></td>
        <td>Fetch Ethereum price data</td>
    </tr>
    <tr>
        <td>Prices</td>
        <td><code>useFetchLayerTwoPrice(layerTwo: LayerTwoNetworks, currentPrice: boolean, duration: 2 | 14 | 30, serverURL: string)</code></td>
        <td><code>/layer-two-prices</code></td>
        <td>Fetch Layer Two price data</td>
    </tr>
</table>

<br />

## Custom Hooks
Custom hooks were incorporated into the main client hooks. The following table details the custom hooks used in this package:

<table>
    <tr>
        <th>Custom Hook</th>
        <th>Function</th>
    <tr>
    <tr>
        <td><code>useFetch<T = any>(URL: string, options: RequestInit = {})</code></td>
        <td>Readily fetch data using a set of defined parameters</td>
    </tr>
</table>

<br />

## Types
Custom data types were developed for monitoring data fetch status and defining a set of available layer two networks:

<table>
    <tr>
        <th>Custom Data Type</th>
        <th>Function</th>
    <tr>
    <tr>
        <td><code>FetchStateType</code></td>
        <td>Readily fetch data and track its state using a type with a set of defined states: <code>{ data: T | null, error: boolean, loading: boolean }</code></td>
    </tr>
    <tr>
        <td><code>LayerTwoType</code></td>
        <td>
            Set of defined Layer Two Networks: <code>optimism</code>, <code>arbitrum</code>, <code>matic-network</code>, <code>zksync</code>, <code>immutable-x</code>, <code>starknet</code>, <code>boba-network</code>, <code>sushi</code>, <code>metis-token</code>, <code>hermez-network-token</code>, <code>celer-network</code>, <code>havven</code>, <code>devve</code>, <code>loopring</code>, <code>biconomy</code>, <code>bancor</code>, <code>aave</code>, <code>perpetual-protocol</code>, <code>cartesi</code>, <code>zora</code>
        </td>
    </tr>
</table>