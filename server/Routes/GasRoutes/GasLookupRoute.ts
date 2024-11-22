import express from 'express';
import { gasTrackInformation } from '../../Controller/Gas/GasLookupController';

const router = express.Router();

// Add routes to be passed to node backend server
router.get("/gas-information", gasTrackInformation);

module.exports = router;