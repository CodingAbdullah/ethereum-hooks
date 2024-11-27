import express from 'express';
import { ERC721CollectionDataController } from '../../Controller/ERC721Tokens/ERC721CollectionDataController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-collection-data", ERC721CollectionDataController);

module.exports = router;