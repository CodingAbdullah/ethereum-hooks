import express from 'express';
import { ERC721CollectionVolumeController } from '../../Controller/ERC721Tokens/ERC721CollectionVolumeController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-collection-volume", ERC721CollectionVolumeController);

module.exports = router;