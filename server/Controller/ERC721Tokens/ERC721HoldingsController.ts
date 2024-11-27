require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ERC721 Holdings Controller data
export const ERC721HoldingsController = (req: Request, res: Response) => {
    const { walletAddress } = JSON.parse(req.body.body);

    // Add ERC721 Holdings Controller data parameters
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        }
    }

    // Conditionally making API calls for ERC721 Holdings Controller
    axios.get('https://deep-index.moralis.io/api/v2.2/' + walletAddress + '/nft/collections?chain=eth', options)
    .then(response => {
        res.status(200).json({
            information: response.data
        });
    })
    .catch(() => {
        res.status(400).json({});
    });
}