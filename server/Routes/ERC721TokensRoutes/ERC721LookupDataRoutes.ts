import express from 'express';
import { ERC721LookupDataController } from '../../Controller/ERC721Tokens/ERC721LookupDataController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc721-lookup-data", ERC721LookupDataController);

module.exports = router;