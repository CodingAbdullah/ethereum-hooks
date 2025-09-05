const axios = require('axios');

exports.handler = async (event) => {
    // CORS headers for browser requests
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    try {
        // Parse request body
        let requestBody;
        if (typeof event.body === 'string') {
            requestBody = JSON.parse(event.body);
        } else {
            requestBody = event.body;
        }

        const { ensName } = requestBody;

        if (!ensName) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'ENS name is required' })
            };
        }

        const params = {
            chain_id: 'ethereum',
            ens_name: ensName
        };

        const options = {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'X-API-KEY': process.env.TRANSPOSE_API_KEY
            } 
        };

        const response = await axios.get(
            'https://api.transpose.io/ens/ens-transfers-by-name?' + new URLSearchParams(params), 
            options
        );

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                information: response.data
            })
        };

    } catch (error) {
        console.error('Error:', error.message);
        
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ 
                error: 'Failed to fetch ENS transfers by name',
                details: error.response?.data || error.message 
            })
        };
    }
};