# ethereum-api-hooks
A package containing useful hooks for working with the Ethereum blockchain using crypto APIs. The following resources will be referenced when building these hooks:

- <a href="https://docs.alchemy.com/reference/api-overview">Alchemy</a>
- <a href="https://docs.blocknative.com/">Blocknative</a>
- <a href="https://docs.coingecko.com/v3.0.1/reference/introduction">CoinGecko</a>
- <a href="https://docs.moralis.com/">Moralis</a>
- <a href="https://docs.opensea.io/reference/api-overview">Opensea</a>
- <a href="https://docs.transpose.io/">Transpose</a>

<br />

## React Hooks Client-Server Setup
When working with this package, you will need to implement the typical MERN design pattern. Set up <code>.env</code> variables and set up the server to allow the client hooks to establish communication.

<b>By default, it is assumed that the NODE server is running on PORT 5000. You will need to set the <code>PORT</code> and the following API keys in your <code>.env</code> file: </b>

- <code>ALCHEMY_API_KEY</code>
- <code>BLK_API_KEY</code>
- <code>COINGECKO_API_KEY</code>
- <code>MORALIS_API_KEY</code>
- <code>OPENSEA_API_KEY</code>
- <code>TRANSPOSE_API_KEY</code>

The following diagram will help you understand the flow of how everything works:

<img src="hook-server-design.png" alt="Hook Server" width="600" height="400" />

<br />

## Link to Published NPM Package
- <a href="https://www.npmjs.com/package/ethereum-hooks">Ethereum Hooks</a>

<br />

## React Client Hooks

The hooks cover several areas of the Ethereum blockchain and can be used for Layer Two chains as well.
A list of what chains are supported is provided below in the <code>Types</code> section.

The following table highlights the 30 different client hooks:

<table>
    <tr>
        <th>Category</th>
        <th>Client Hook Name</th>
        <th>Description</th>
    <tr>
    <tr>
        <td>ENS</td>
        <td><code>useFetchAddressENSLookup(address: string)</code></td>
        <td>Fetch the equivalent ENS name from a given address</td>
    </tr>
    <tr>
        <td>ENS</td>
        <td><code>useFetchENSAddressLookup(ensName: string)</code></td>
        <td>Fetch the equivalent ETH address from a given ENS name</td>
    </tr>
    <tr>
        <td>ENS</td>
        <td><code>useFetchENSIDLookup(id: string)</code></td>
        <td>Fetch information of a given ENS ID</td>
    </tr>
    <tr>
        <td>ENS</td>
        <td><code>useFetchENSNameLookup(ensName: string)</code></td>
        <td>Fetch information of a given ENS name</td>
    </tr>
    <tr>
        <td>ERC20</td>
        <td><code>useFetchERC20CollectionOwners(contractAddress: string)</code></td>
        <td>Fetch list of owners of a particular ERC20 collection</td>
    </tr>
    <tr>
        <td>ERC20</td>
        <td><code>useFetchERC20CollectionTopCoins()</code></td>
        <td>Fetch list of the top ERC20 collections</td>
    </tr>
    <tr>
        <td>ERC20</td>
        <td><code>useFetchERC20CollectionTransfers(contractAddress: string)</code></td>
        <td>Fetch transfer activity of a particular ERC20 collection</td>
    </tr>
    <tr>
        <td>ERC20</td>
        <td><code>useFetchERC20Holdings(contractAddress: string)</code></td>
        <td>Track wallet holdings of a particular ERC20 token activity</td>
    </tr>
    <tr>
        <td>ERC20</td>
        <td><code>useFetchERC20Transfers(contractAddress: string)</code></td>
        <td>Track the transfer activity of a particular ERC20 token in a wallet</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionAttributes(contractAddress: string)</code></td>
        <td>Fetch attributes of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionData(contractAddress: string)</code></td>
        <td>Fetch data of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionExtraData(contractAddress: string)</code></td>
        <td>Fetch extra data of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionFloorPrice(contractAddress: string)</code></td>
        <td>Fetch floor price data of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionMarketCap(contractAddress: string, duration: 2 | 14 | 30)</code></td>
        <td>Fetch market cap data of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionSales(contractAddress: string)</code></td>
        <td>Fetch sales data of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionTransfers(contractAddress: string)</code></td>
        <td>Fetch transfer activity of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionTrends()</code></td>
        <td>Fetch trending ERC721 collection data</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721CollectionVolume()</code></td>
        <td>Fetch ERC721 collections by volume data</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721Holdings(walletAddress: string)</code></td>
        <td>Fetch ERC721 holdings of a particular wallet</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721LookupData(contractAddress: string, tokenID: string)</code></td>
        <td>Fetch data of a particular ERC721 token</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721OpenseaData(contractAddress: string, tokenID: string)</code></td>
        <td>Fetch Opensea data of a particular ERC721 token</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721RarityData(contractAddress: string, tokenID: string)</code></td>
        <td>Fetch rarity data of a particular ERC721 token</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721SalesData(contractAddress: string, tokenID: string)</code></td>
        <td>Fetch sales data of a particular ERC721 token</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721TransferLookupData(contractAddress: string, tokenID: string)</code></td>
        <td>Fetch transfer data of a particular ERC721 token</td>
    </tr>
    <tr>
        <td>ERC721</td>
        <td><code>useFetchERC721TransfersData(walletAddress: string)</code></td>
        <td>Fetch ERC721 transfer activity of a particular wallet</td>
    </tr>
    <tr>
        <td>Gas</td>
        <td><code>useFetchGasLookup()</code></td>
        <td>Fetch gas information related to Ethereum or a supported layer two</td>
    </tr>
    <tr>
        <td>Prices</td>
        <td><code>useFetchERC20Price(contractAddress: string, currentPrice: boolean, duration: 2 | 14 | 30)</code></td>
        <td>Fetch pricing data of a particular ERC20 collection</td>
    </tr>
    <tr>
        <td>Prices</td>
        <td><code>useFetchERC721Price(contractAddress: string, tokenID: string)</code></td>
        <td>Fetch pricing data of a particular ERC721 collection</td>
    </tr>
    <tr>
        <td>Prices</td>
        <td><code>useFetchETHPrice(currentPrice: boolean, duration: 2 | 14 | 30)</code></td>
        <td>Fetch Ethereum price data</td>
    </tr>
    <tr>
        <td>Prices</td>
        <td><code>useFetchLayerTwoPrice(layerTwo: LayerTwoNetworks, currentPrice: boolean, duration: 2 | 14 | 30)</code></td>
        <td>Fetch Layer Two price data</td>
    </tr>
</table>

<br />

## Custom Hooks
Custom hooks were used for development convenience and were fully incorporated into the main client hooks. The following table depicts the custom hooks:

<table>
    <tr>
        <th>Custom Hook</th>
        <th>Function</th>
    <tr>
    <tr>
        <td><code>useFetch</code></td>
        <td>To fetch data readily using a set of defined parameters</td>
    </tr>
</table>

<br />

## Types
Custom data types were developed for fetch state and defining a set of available layer two networks 

<table>
    <tr>
        <th>Custom Data Type</th>
        <th>Function</th>
    <tr>
    <tr>
        <td><code>FetchStateType</code></td>
        <td>To fetch data readily using a set of defined parameters</td>
    </tr>
    <tr>
        <td><code>LayerTwoType</code></td>
        <td>
            Set of defined Layer Two Networks: <code>optimism</code>, <code>arbitrum</code>, <code>matic-network</code>, <code>zksync</code>, <code>immutable-x</code>, <code>starknet</code>, <code>boba-network</code>, <code>sushi</code>, <code>metis-token</code>, <code>hermez-network-token</code>, <code>celer-network</code>, <code>havven</code>, <code>devve</code>, <code>loopring</code>, <code>biconomy</code>, <code>bancor</code>, <code>aave</code>, <code>perpetual-protocol</code>, <code>cartesi</code>, <code>zora</code>
        </td>
    </tr>
</table>