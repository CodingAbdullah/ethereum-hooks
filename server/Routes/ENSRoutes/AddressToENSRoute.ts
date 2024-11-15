import express from 'express';
import { addressToENSInformation } from '../../Controller/ENS/AddressToENSController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/address-to-ens-information", addressToENSInformation);

module.exports = router;