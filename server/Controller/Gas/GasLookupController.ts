require('dotenv').config({ path: '../.env' });
import axios from "axios";

// Controller function for fetching Ethereum gas information
export const gasTrackInformation = (req: Request, res: Response) => {

    // Add blocknative credentials
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization' : process.env.BLK_API_KEY
        }
    }
    
    axios.get('https://api.blocknative.com/gasprices/blockprices', options)
    .then(response => {
        res.status(200).json({
            information: response.data
        })
    })
    .catch(() => {
        res.status(400).json({});
    })
}