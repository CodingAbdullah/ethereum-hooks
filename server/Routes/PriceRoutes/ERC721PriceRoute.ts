import express from 'express';
import { ERC721PriceController } from '../../Controller/Prices/ERC721PriceController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-token-price", ERC721PriceController);

module.exports = router;