import express from 'express';
import { ERC721CollectionTrendsController } from '../../Controller/ERC721Tokens/ERC721CollectionTrendsController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-collection-trends", ERC721CollectionTrendsController);

module.exports = router;