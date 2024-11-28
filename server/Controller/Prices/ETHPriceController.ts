require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ETH Pricing information
export const ETHPriceController = (req: Request, res: Response) => {
    const { currentPrice, duration } = JSON.parse(req.body.body);
    
    // Add ETH price options data parameters
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        }
    }

    if (currentPrice) {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum', options)
        .then(response => {
            res.status(200).json({
                information: response.data
            });
        })
        .catch(() => {
            res.status(400).json({});
        });
    }
    else {
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
}