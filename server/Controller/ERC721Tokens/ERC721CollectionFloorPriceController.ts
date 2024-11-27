require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
const sdk = require('api')('@alchemy-docs/v1.0#3yq3i17l9sqr4d6'); // SDK ID for Alchemy package found through docs

// Controller function for fetching ERC721 Floor Price Data
export const ERC721CollectionFloorPriceController = (req: Request, res: Response) => {
    const { contractAddress } = JSON.parse(req.body.body);    
    // Run backend request
    sdk.server('https://eth-mainnet.g.alchemy.com/nft/v2');

    sdk.getFloorPrice({ apiKey: process.env.ALCHEMY_API_KEY, contractAddress })
    .then((response: any) => 
        res.status(200).json({ information: response })
    )
    .catch(() => {
        res.status(400).json({});
    });
}