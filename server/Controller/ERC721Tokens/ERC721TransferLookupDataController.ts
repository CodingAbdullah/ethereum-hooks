require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ERC721 Transfer Lookup data Controller
export const ERC721TransferLookupDataController = (req: Request, res: Response) => {
    const { contractAddress, tokenID } = JSON.parse(req.body.body); // Parse information for make API call

    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'accept' : 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        }
    }

    // Making request to Moralis API for finding ERC721 Token Transfer Lookup information
    axios.get('https://deep-index.moralis.io/api/v2/nft/' + contractAddress + "/" + tokenID + '/transfers?chain=eth&format=decimal', options)
    .then(response => 
        res.status(200).json({ 
            information: response.data 
        })
    )
    .catch(() => {
        res.status(400).json({});
    });
}