require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ERC721 Lookup Data Controller
export const ERC721LookupDataController = (req: Request, res: Response) => {
    const { walletAddress, tokenID } = JSON.parse(req.body.body);

    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'accept' : 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        } 
    }

    // Making request to Moralis API for finding ERC721 token lookup information
    axios.get('https://deep-index.moralis.io/api/v2/nft/' + walletAddress + "/" + tokenID + "?chain=eth" + "&format=decimal", options)
    .then(response => 
        res.status(200).json({ 
            information: response.data 
        })
    )
    .catch(() => {
        res.status(400).json({});
    });
}