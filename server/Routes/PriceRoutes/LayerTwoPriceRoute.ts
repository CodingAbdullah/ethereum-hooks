import express from 'express';
import { layerTwoPriceController } from '../../Controller/Prices/LayerTwoPriceController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/layer-two-prices", layerTwoPriceController);

module.exports = router;