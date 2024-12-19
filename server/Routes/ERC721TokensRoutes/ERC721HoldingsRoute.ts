import express from 'express';
import { ERC721HoldingsController } from '../../Controller/ERC721Tokens/ERC721HoldingsController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-holdings", ERC721HoldingsController);

module.exports = router;