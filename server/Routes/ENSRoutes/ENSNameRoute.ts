import express from 'express';
import { ensTransfersByName } from '../../Controller/ENS/ENSNameController';

const router = express.Router();

// Route for handling ENS transfers by name
router.post("/ens-transfers-by-name", ensTransfersByName);

module.exports = router;