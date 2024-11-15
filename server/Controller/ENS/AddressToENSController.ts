require("dotenv").config({ path: '../.env' });
import { Request, Response } from 'express';
import axios from 'axios';

// Address to ENS information
export const addressToENSInformation = (req: Request, res: Response) => {
    const { address } = JSON.parse(req.body.body);

    const MORALIS_URL = 'https://deep-index.moralis.io/api/v2/';
    const options = {   
        method: 'GET', 
        mode: 'cors', // *cors, same-origin
        headers: { 
            'content-type' : 'application/json', 
            'access-control-allow-origin': '*',
            'X-API-KEY' : process.env.MORALIS_API_KEY // Transpose API key hidden 
        }
    }

    // Making back-end request call for information
    axios.get(MORALIS_URL + 'resolve/' + address + "/reverse", options)
    .then(response => {
        res.status(200).json({
            information: response.data
        })
    })
    .catch(() => {
        res.status(400).json({});
    })
}