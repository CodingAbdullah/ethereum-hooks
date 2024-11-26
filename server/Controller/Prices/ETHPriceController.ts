require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching Layer Two Pricing information
export const ETHPriceController = (req: Request, res: Response) => {
    const { duration } = JSON.parse(req.body.body);
    
    // Add ETH price options data parameters
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization' : process.env.COINGECKO_API_KEY
        }
    }

    // Conditionally making API calls for Ethereum Pricing
    axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=' 
        + duration + '&interval=daily', options)
    .then(response => {
        res.status(200).json({
            information: response.data
        });
    })
    .catch(() => {
        res.status(400).json({});
    });
}