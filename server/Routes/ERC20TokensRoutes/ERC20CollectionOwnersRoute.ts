import express from 'express';
import { ERC20CollectionOwnersController } from '../../Controller/ERC20Tokens/ERC20CollectionOwnersController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc20-collection-owners", ERC20CollectionOwnersController);

module.exports = router;