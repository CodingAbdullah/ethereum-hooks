require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ERC721 Transfers data Controller
export const ERC721TransfersDataController = (req: Request, res: Response) => {
    const { walletAddress } = JSON.parse(req.body.body); // Parse information for make API call
    
    // Pass in API key for backend request
    const options = {
        method: 'GET',
        headers: {
            'accept' : 'application/json',
            'content-type': 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        } 
    }

    axios.get('https://deep-index.moralis.io/api/v2/' + walletAddress + 
        '/nft/transfers?chain=eth&format=decimal&direction=both', options) // Pass in address and chain values
    .then(response => {
        res.status(200).json({
            information: response.data
        })
    })
    .catch(() => {
        res.status(400).json({});
    });
}