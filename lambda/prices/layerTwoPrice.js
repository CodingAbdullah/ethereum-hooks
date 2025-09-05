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

        const { layerTwo, currentPrice, duration } = requestBody;

        if (!layerTwo) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Layer Two network ID is required' })
            };
        }

        let url;
        if (currentPrice) {
            // Get current Layer Two token price
            url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${layerTwo}`;
        } else {
            // Get historical Layer Two token price data
            const days = duration || 30; // Default to 30 days if not specified
            url = `https://api.coingecko.com/api/v3/coins/${layerTwo}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
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
                error: 'Failed to fetch Layer Two price',
                details: error.message 
            })
        };
    }
};