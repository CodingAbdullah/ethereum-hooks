import express from 'express';
import { ERC721RarityDataController } from '../../Controller/ERC721Tokens/ERC721RarityDataController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-rarity-data", ERC721RarityDataController);

module.exports = router;