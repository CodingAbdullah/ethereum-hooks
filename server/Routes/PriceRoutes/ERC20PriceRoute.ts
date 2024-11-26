import express from 'express';
import { ERC20PriceController } from '../../Controller/Prices/ERC20PriceController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc20-token-price", ERC20PriceController);

module.exports = router;