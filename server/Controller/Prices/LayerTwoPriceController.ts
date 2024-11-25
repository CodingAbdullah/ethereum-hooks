require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching Layer Two Pricing information
export const layerTwoPriceController = (req: Request, res: Response) => {
    const { layerTwo, currentPrice, duration } = JSON.parse(req.body);
    
    // Add blocknative credentials
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization' : process.env.COINGECKO_API_KEY
        }
    }

    // Conditionally making API calls for Layer Two Pricing
    if (currentPrice) { 
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + layerTwo, options)
        .then(response => {
            res.status(200).json({
                information: response.data
            })
        })
        .catch(() => {
            res.status(400).json({});
        });
    }
    else {
        axios.get('https://api.coingecko.com/api/v3/coins/' + layerTwo + '/market_chart?vs_currency=usd&days=' + duration + '&interval=daily', options)
        .then(response => {
            res.status(200).json({
                information: response.data
            })
        })
        .catch(() => {
            res.status(400).json({});
        });
    }
}