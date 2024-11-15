import express from 'express' ;
import { ensTransfersById } from '../../Controller/ENS/ENSIDController';
const router = express.Router();

// ENS transfers by ID
router.post("/ens-transfers-by-id", ensTransfersById);

module.exports = router;