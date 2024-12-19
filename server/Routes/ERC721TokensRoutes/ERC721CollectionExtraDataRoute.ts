import express from 'express';
import { ERC721CollectionExtraDataController } from '../../Controller/ERC721Tokens/ERC721CollectionExtraDataController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-collection-extra-data", ERC721CollectionExtraDataController);

module.exports = router;