import express from 'express';
import { ERC721SalesDataController } from '../../Controller/ERC721Tokens/ERC721SalesDataController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-sales-data", ERC721SalesDataController);

module.exports = router;