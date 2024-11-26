import express from 'express';
import { ETHPriceController } from '../../Controller/Prices/ETHPriceController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/eth-price", ETHPriceController);

module.exports = router;