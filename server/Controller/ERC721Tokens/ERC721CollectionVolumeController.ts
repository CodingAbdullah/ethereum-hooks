require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ERC721 Collection Volume Controller data
export const ERC721CollectionVolumeController = (req: Request, res: Response) => {
    
    // Add ERC721 Collection Volume Controller data parameters
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        }
    }

    // Conditionally making API calls for ERC721 Collection Volume Controller
    axios.get('"https://deep-index.moralis.io/api/v2.2/market-data/nfts/top-collections', options)
    .then(response => {
        res.status(200).json({
            information: response.data
        });
    })
    .catch(() => {
        res.status(400).json({});
    });
}