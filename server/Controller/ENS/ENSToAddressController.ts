require('dotenv').config({ path: '../.env' });
import { Request, Response } from 'express'
import axios from 'axios';

// ENS to Address Controller
export const additionalENSInformation = (req: Request, res: Response) => {
    const { ensName } = JSON.parse(req.body.body);
    
    const params = {
        "chain_id": "ethereum",
        "ens_names": ensName,
    }
    
    const options = {
        headers: {
            'accept' : 'application/json',
            'content-type': 'application/json',
            'X-API-KEY' : process.env.TRANSPOSE_API_KEY
        } 
    }

    // Making back-end request call for information
    axios.get("https://api.transpose.io/ens/ens-records-by-name?" + new URLSearchParams(params), options)
    .then(response => {
        res.status(200).json({
            information: response.data
        })
    })
    .catch(() => {
        res.status(400).json({});
    });
}