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

        const { contractAddress, tokenID } = requestBody;

        if (!contractAddress || !tokenID) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Contract address and token ID are required' })
            };
        }

        const response = await fetch(`https://api.opensea.io/api/v2/chain/ethereum/contract/${contractAddress}/nfts/${tokenID}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'X-API-KEY': process.env.OPENSEA_API_KEY
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
                information: [data]
            })
        };

    } catch (error) {
        console.error('Error:', error.message);
        
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ 
                error: 'Failed to fetch ERC721 OpenSea data',
                details: error.message 
            })
        };
    }
};