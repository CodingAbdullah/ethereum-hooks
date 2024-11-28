require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ERC20 Pricing information
export const ERC20PriceController = (req: Request, res: Response) => {
    const { contractAddress, currentPrice, duration } = JSON.parse(req.body.body);
    
    // Add ERC20 price options data parameters
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application.json',
            'content-type': 'application/json'
        }
    }

    // Conditionally fetching ERC20 pricing
    if (currentPrice) {
        axios.get('https://api.coingecko.com/api/v3/coins/ethereum/contract/' + contractAddress, options)
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
        // Conditionally making API calls for ERC20 Pricing
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
}