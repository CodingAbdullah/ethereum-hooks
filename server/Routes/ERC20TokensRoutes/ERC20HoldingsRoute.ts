import express from 'express';
import { ERC20HoldingsController } from '../../Controller/ERC20Tokens/ERC20HoldingsController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc20-collection-holdings", ERC20HoldingsController);

module.exports = router;