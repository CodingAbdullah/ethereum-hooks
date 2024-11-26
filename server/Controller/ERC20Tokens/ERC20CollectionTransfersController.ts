require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ERC20 Collection Transfers data
export const ERC20CollectionTransfersController = (req: Request, res: Response) => {   
    const { contractAddress } = JSON.parse(req.body.body);

    // Add ERC20 Collection Transfers Controller data parameters
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        }
    }

    // Conditionally making API calls for ERC20 Collection Transfers Controller
    axios.get("https://deep-index.moralis.io/api/v2.2/erc20/" + contractAddress + '/transfers', options)
    .then(response => {
        res.status(200).json({
            information: response.data
        });
    })
    .catch(() => {
        res.status(400).json({});
    });
}