require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ERC721 Pricing information
export const ERC721PriceController = (req: Request, res: Response) => {
    const { contractAddress, tokenID } = JSON.parse(req.body.body);
    
    // Add ERC721 price options data parameters
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        }
    }

    // Conditionally making API calls for ERC721 Pricing
    axios.get('https://deep-index.moralis.io/api/v2.2/nft/' + contractAddress + '/' + tokenID + '/floor-price?chain=eth', options)
    .then(response => {
        res.status(200).json({
            information: response.data
        });
    })
    .catch(() => {
        res.status(400).json({});
    });
}