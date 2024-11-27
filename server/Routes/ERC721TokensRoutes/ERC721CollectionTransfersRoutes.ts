import express from 'express';
import { ERC721CollectionTransfersController } from '../../Controller/ERC721Tokens/ERC721CollectionTransfersController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-collection-transfers", ERC721CollectionTransfersController);

module.exports = router;