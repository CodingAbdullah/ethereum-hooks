import express from 'express';
import { ERC721TransfersDataController } from '../../Controller/ERC721Tokens/ERC721TransfersDataController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-wallet-transfers", ERC721TransfersDataController);

module.exports = router;