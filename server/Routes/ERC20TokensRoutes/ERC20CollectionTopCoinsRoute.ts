import express from 'express';
import { ERC20CollectionTopCoinsController } from '../../Controller/ERC20Tokens/ERC20CollectionTopCoinsController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc20-top-coins", ERC20CollectionTopCoinsController);

module.exports = router;