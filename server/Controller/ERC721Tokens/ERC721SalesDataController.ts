require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ERC721 Sales data Controller
export const ERC721SalesDataController = (req: Request, res: Response) => {
    const { contractAddress, tokenID } = JSON.parse(req.body.body); // Parse information for make API call

    // Setting params and options for ERC721 token sales data
    const params = {
        "chain_id": "ethereum",
        "contract_address": contractAddress,
        "token_id": tokenID
    }
    
    const options = {
        headers: {
            'accept' : 'application/json',
            'content-type': 'application/json',
            'X-API-KEY' : process.env.TRANSPOSE_API_KEY
        } 
    }
    
    // Making request to Transpose API for finding ERC721 token sales information
    axios.get("https://api.transpose.io/nft/sales-by-token-id?" + new URLSearchParams(params), options)
    .then(response => {
        res.status(200).json({
            information: response.data
        });
    })
    .catch(() => {
        res.status(400).json({});
    });
}