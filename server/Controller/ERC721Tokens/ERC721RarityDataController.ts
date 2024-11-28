require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ERC721 Rarity Data Controller
export const ERC721RarityDataController = (req: Request, res: Response) => {
    const { contractAddress, tokenID } = JSON.parse(req.body.body);

    // Setting options to make authenticated API calls to retrieve ERC721 token rarity information
    const options = {
        method: 'GET',
        headers: {
            'accept' : 'application/json',
            'content-type': 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        }
    };

    // Making request to Alchemy API for finding ERC721 token rarity
    axios.get('https://eth-mainnet.g.alchemy.com/nft/v2/' + process.env.ALCHEMY_API_KEY + "/computeRarity?contractAddress=" + contractAddress + "&tokenId=" + tokenID, options)
    .then(response => {
        res.status(200).json({
            information: { data: response.data }
        });
    })
    .catch(() => {
        res.status(400).json({});
    });
}