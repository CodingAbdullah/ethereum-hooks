require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ERC721 Collection Market Cap Controller data
export const ERC721CollectionMarketCapController = (req: Request, res: Response) => {
    const { contractAddress, duration } = JSON.parse(req.body.body);
    
    // Add ERC721 Collection Market Cap Controller data parameters
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
        }
    }

    // Conditionally making API calls for ERC721 Collection Market Cap Controller
    axios.get('https://api.coingecko.com/api/v3/coins/ethereum/contract/' + contractAddress +
        '/market_chart?vs_currency=usd&days=' + duration + '&interval=daily', options)
    .then(response => {
        res.status(200).json({
            information: response.data
        });
    })
    .catch(() => {
        res.status(400).json({});
    });
}