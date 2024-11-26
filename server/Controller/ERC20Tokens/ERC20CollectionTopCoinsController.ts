require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ERC20 Collection Top Coins data
export const ERC20CollectionTopCoinsController = (req: Request, res: Response) => {    
    // Add ERC20 Top Coins Controller data parameters
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        }
    }

    // Conditionally making API calls for ERC20 Top Coins Controller
    axios.get('https://deep-index.moralis.io/api/v2.2/market-data/erc20s/top-tokens', options)
    .then(response => {
        res.status(200).json({
            information: response.data
        });
    })
    .catch(() => {
        res.status(400).json({});
    });
}