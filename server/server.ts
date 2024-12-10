import dotenv from "dotenv";
import express from "express";
import cors, { CorsOptions } from 'cors'; // Import CorsOptions

// Route files for working with different ETH protocols
const addressENSRouter = require("./Routes/AddressENSRouter");
const CoinPricesRouter = require("./Routes/CoinPriceRouter");
const ENSTransferRouter = require("./Routes/ENSTransferRouter");
const ERC720CollectionRouter = require("./Routes/ERC720CollectionRouter");
const ERC720HoldingsRouter = require("./Routes/EsRC720HoldingsRouter");
const ERC721CollectionRouter = require('./Routes/ERC721CollectionRouter');
const ERC721LookupRouter = require("./Routes/ERC721LookupRouter");
const ERC721HoldingsRouter = require('./Routes/ERC721HoldingsRouter');
const GasTrackerRouter = require('./Routes/GasTrackerRouter');
const GlobalDefiDataRouter = require("./Routes/GlobalDefiDataRouter");
const MarketDataRouter = require('./Routes/MarketDataRouter');
const TransactionsRouter = require('./Routes/TransactionsRouter');
const WalletStatsRouter = require('./Routes/WalletStatsRouter');

dotenv.config({ path: '.env' });
const app = express();

// CORS options to allow connections from client port
const corsOptions: CorsOptions = {
    origin: 'http://localhost:' + process.env.CLIENT_PORT // Allow requests from this origin
};

// Set up middleware
app.use(cors(corsOptions)); // Enable CORS with specified options
app.use(express.json()); // Removed extended option
app.use(express.urlencoded({ extended: false })); // Keep this as is

app.listen(process.env.PORT || 8080, () => {
    console.log("Listening on PORT " + (process.env.PORT || 8080));
});

// Enable API resources to server
app.use("/", addressENSRouter);
app.use("/", CoinPricesRouter);
app.use("/", ENSTransferRouter);
app.use("/", ERC720CollectionRouter);
app.use("/", ERC720HoldingsRouter);
app.use("/", ERC721CollectionRouter);
app.use("/", ERC721LookupRouter);
app.use("/", ERC721HoldingsRouter);
app.use("/", GasTrackerRouter);
app.use("/", GlobalDefiDataRouter);
app.use("/", MarketDataRouter);
app.use("/", TransactionsRouter);
app.use("/", WalletStatsRouter);

// Export ready-made server for usage
export default app;