import express from 'express';
import { ERC721TransferLookupDataController } from '../../Controller/ERC721Tokens/ERC721TransferLookupDataController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-token-transfer-lookup-data", ERC721TransferLookupDataController);

module.exports = router;