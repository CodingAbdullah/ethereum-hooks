export const handler = async (event) => {    // CORS headers for browser requests
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

        const { contractAddress } = requestBody;

        if (!contractAddress) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Contract address is required' })
            };
        }

        const response = await fetch(`https://deep-index.moralis.io/api/v2/${contractAddress}/erc20/transfers?chain=eth`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'X-API-KEY': process.env.MORALIS_API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                information: data
            })
        };

    } catch (error) {
        console.error('Error:', error.message);
        
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ 
                error: 'Failed to fetch ERC20 transfers',
                details: error.message 
            })
        };
    }
};