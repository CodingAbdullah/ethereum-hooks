# crypto-api-hooks
A package containing useful hooks for working with crypto APIs.

The following resources will be referenced when building these hooks:
- Alchemy
- Blocknative
- CoinGecko
- Moralis
- Opensea
- Transpose

## Sections

The hooks cover several areas of the Ethereum blockchain and can be used for Layer Two chains as well.
A list of what chains are supported will be provided later (also supported by a custom data type).

The following table highlights what is covered:

<table>
    <tr>
        <th>ENS</th>
        <th>ERC20</th>
        <th>ERC721</th>
        <th>Gas</th>
        <th>Prices</th>
    <tr>
</table>
# crypto-api-hooks
A package containing useful hooks for working with Crypto APIs. The following resources were used when building these hooks:
- Alchemy
- Blocknative
- CoinGecko
- Moralis
- Opensea
- Transpose

<br />

##  React Client Hooks

The hooks cover several areas of the Ethereum blockchain and can be used for Layer Two chains as well.
A list of what chains are supported will be provided later (also supported by a custom data type).

The following table highlights the 30 different client hooks:

<table>
    <tr>
        <th>Client Hook Name</th>
        <th>Category</th>
    <tr>
    <tr>
        <td><code>useFetchAddressENSLookup</code></td>
        <td>ENS</td>
    </tr>
    <tr>
        <td><code>useFetchENSAddressLookup</code></td>
        <td>ENS</td>
    </tr>
    <tr>
        <td><code>useFetchENSIDLookup</code></td>
        <td>ENS</td>
    </tr>
    <tr>
        <td><code>useFetchENSNameLookup</code></td>
        <td>ENS</td>
    </tr>
    <tr>
        <td><code>useFetchERC20CollectionOwners</code></td>
        <td>ERC720</td>
    </tr>
    <tr>
        <td><code>useFetchERC20CollectionTopCoins</code></td>
        <td>ERC720</td>
    </tr>
    <tr>
        <td><code>useFetchERC20CollectionTransfers</code></td>
        <td>ERC720</td>
    </tr>
    <tr>
        <td><code>useFetchERC20Holdings</code></td>
        <td>ERC720</td>
    </tr>
    <tr>
        <td><code>useFetchERC20Transfers</code></td>
        <td>ERC720</td>
    </tr>
    <tr>
        <td><code>useFetchERC721CollectionAttributes</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721CollectionData</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721CollectionExtraData</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721CollectionFloorPrice</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721CollectionMarketCap</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721CollectionSales</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721CollectionTransfers</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721CollectionTrends</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721CollectionVolume</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721Holdings</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721LookupData</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721OpenseaData</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721RarityData</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721SalesData</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721TransferLookupData</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchERC721TransfersData</code></td>
        <td>ERC721</td>
    </tr>
    <tr>
        <td><code>useFetchGasLookup</code></td>
        <td>Gas</td>
    </tr>
    <tr>
        <td><code>useFetchERC20Price</code></td>
        <td>Prices</td>
    </tr>
    <tr>
        <td><code>useFetchERC721Price</code></td>
        <td>Prices</td>
    </tr>
    <tr>
        <td><code>useFetchETHPrice</code></td>
        <td>Prices</td>
    </tr>
    <tr>
        <td><code>useFetchLayerTwoPrice</code></td>
        <td>Prices</td>
    </tr>
</table>

<br />

## Custom Hooks
Custom hooks were used for development convenience and were fully incorporated into the main client hooks. The following table depicts the custom hooks used for development:

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
        <td><code>FetchState</code></td>
        <td>To fetch data readily using a set of defined parameters</td>
    </tr>
    <tr>
        <td><code>LayerTwoType</code></td>
        <td>Set of defined Layer Two Networks</td>
    </tr>
</table>

## Link to Published NPM Package
To be posted later