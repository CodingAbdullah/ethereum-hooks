import express from 'express';

const router = express.Router();
const addressENSController = require("../Controller/AddressENSController");

// Add routes to be passed to node backend server
router.post("/additional-address-to-ens-information", addressENSController.additionalENSInformation);

module.exports = router;