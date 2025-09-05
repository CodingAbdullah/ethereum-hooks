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

        const { contractAddress, currentPrice, duration } = requestBody;

        if (!contractAddress) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Contract address is required' })
            };
        }

        let url;
        if (currentPrice) {
            // Get current price
            url = `https://api.coingecko.com/api/v3/coins/ethereum/contract/${contractAddress}`;
        } else {
            // Get historical price data
            const days = duration || 30; // Default to 30 days if not specified
            url = `https://api.coingecko.com/api/v3/coins/ethereum/contract/${contractAddress}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
        }

        const response = await fetch(url, {
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
                error: 'Failed to fetch ERC20 price',
                details: error.message 
            })
        };
    }
};