import express from 'express';
import { ERC721CollectionAttributesController } from '../../Controller/ERC721Tokens/ERC721CollectionAttributesController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-collection-attributes", ERC721CollectionAttributesController);

module.exports = router;