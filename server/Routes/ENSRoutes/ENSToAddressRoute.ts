import express from 'express';
import { additionalENSInformation } from '../../Controller/ENS/ENSToAddressController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/additional-address-to-ens-information", additionalENSInformation);

module.exports = router;