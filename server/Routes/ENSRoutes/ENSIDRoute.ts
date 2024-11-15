import express from 'express' ;

const router = express.Router();
const ENSTransferController = require('../Controller/ENSTransferController');

// ENS transfers by ID
router.post("/ens-transfers-by-id", ENSTransferController.ensTransfersById);

module.exports = router;