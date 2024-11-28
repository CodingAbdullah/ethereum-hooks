require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from 'axios';

// ENS Transfers By ID
export const ensTransfersById = (req: Request, res: Response) => {
    const { id } = JSON.parse(req.body.body);

    const params = {
        chain_id : 'ethereum',
        token_id: id
    }

    const options = {
        headers: {
            'accept' : 'application/json',
            'content-type': 'application/json',
            'X-API-KEY' : process.env.TRANSPOSE_API_KEY
        } 
    }

    // Making back-end request call to fetch data
    axios.get('https://api.transpose.io/ens/ens-transfers-by-token-id?' + new URLSearchParams(params), options)
    .then(response => {
        res.status(200).json({
            information: response.data
        })
    })
    .catch(() => {
        res.status(400).json({});
    });
}