import express from 'express';
import { ERC721CollectionMarketCapController } from '../../Controller/ERC721Tokens/ERC721CollectionMarketCapController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-collection-market-cap", ERC721CollectionMarketCapController);

module.exports = router;