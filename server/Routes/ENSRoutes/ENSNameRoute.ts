import express from 'express';

const router = express.Router();
const ENSTransferController = require('../Controller/ENSTransferController');

// Route for handling ENS transfers by name
router.post("/ens-transfers-by-name", ENSTransferController.ensTransfersByName);

module.exports = router;