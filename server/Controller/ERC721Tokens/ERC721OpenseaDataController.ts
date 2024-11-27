require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from "axios";

// Controller function for fetching ERC721 Opensea Data Controller
export const ERC721OpenseaDataController = (req: Request, res: Response) => {
    const { contractAddress, tokenID } = JSON.parse(req.body.body);

    // Setting options to make authenticated API calls to retrieve ERC721 Opensea token information
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'accept' : 'application/json',
            'X-API-KEY' : process.env.OPENSEA_API_KEY
        }
    };

    // Making request to Opensea API to retrieve ERC721 Opensea token information
    axios.get('https://api.opensea.io/api/v2/chain/ethereum/contract' + contractAddress + '/nfts/' + tokenID, options)
    .then(response => {
        res.status(200).json({
            information: [response.data]
        });
    })
    .catch(() => {
        res.status(400).json({});
    });
}