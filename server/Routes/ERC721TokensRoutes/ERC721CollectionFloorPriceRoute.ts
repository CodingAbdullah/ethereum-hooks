import express from 'express';
import { ERC721CollectionFloorPriceController } from '../../Controller/ERC721Tokens/ERC721CollectionFloorPriceController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-collection-floor-price", ERC721CollectionFloorPriceController);

module.exports = router;