import express from 'express';
import { ERC20TransfersController } from '../../Controller/ERC20Tokens/ERC20TransfersController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc20-collection-transfers", ERC20TransfersController);

module.exports = router;