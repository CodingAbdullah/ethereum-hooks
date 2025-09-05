export const handler = async (event) => {
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

        const { contractAddress, duration } = requestBody;

        if (!contractAddress || !duration) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Contract address and duration are required' })
            };
        }

        const response = await fetch(`https://api.coingecko.com/api/v3/coins/ethereum/contract/${contractAddress}/market_chart?vs_currency=usd&days=${duration}&interval=daily`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
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
                error: 'Failed to fetch ERC721 collection market cap',
                details: error.message 
            })
        };
    }
};