import express from 'express';
import { ERC721CollectionSalesController } from '../../Controller/ERC721Tokens/ERC721CollectionSalesController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-collection-sales", ERC721CollectionSalesController);

module.exports = router;