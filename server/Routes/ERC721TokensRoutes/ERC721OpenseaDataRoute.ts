import express from 'express';
import { ERC721OpenseaDataController } from '../../Controller/ERC721Tokens/ERC721OpenseaDataController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-opensea-data", ERC721OpenseaDataController);

module.exports = router;