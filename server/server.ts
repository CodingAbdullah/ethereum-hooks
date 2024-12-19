import dotenv from "dotenv";
import express from "express";
import cors, { CorsOptions } from 'cors'; // Import CorsOptions

// Route files for working with different ETH protocols
// ENS Routes
const AddressToENSRouter = require("./Routes/ENSRoutes/AddressToENSRoute");
const ENSIDRouter = require("./Routes/ENSRoutes/ENSIDRoute");
const ENSNameRouter = require("./Routes/ENSRoutes/ENSNameRoute");
const ENSToAddressRouter = require("./Routes/ENSRoutes/ENSToAddressRoute");

// ERC20 Token Routes
const ERC20CollectionOwnersRouter = require("./Routes/ERC20TokensRoutes/ERC20CollectionOwnersRoute");
const ERC20CollectionTopCoinsRouter = require("./Routes/ERC20TokensRoutes/ERC20CollectionTopCoinsRoute");
const ERC20CollectionTransfersRouter = require("./Routes/ERC20TokensRoutes/ERC20CollectionTransfersRoute");
const ERC20HoldingsRouter = require("./Routes/ERC20TokensRoutes/ERC20HoldingsRoute");
const ERC20TransfersRouter = require("./Routes/ERC20TokensRoutes/ERC20TransfersRoute");

// ERC721 Token Routes
const ERC721CollectionAttributesRouter = require("./Routes/ERC721TokensRoutes/ERC721CollectionAttributesRoute");
const ERC721CollectionDataRouter = require("./Routes/ERC721TokensRoutes/ERC721CollectionDataRoute");
const ERC721CollectionExtraDataRouter = require("./Routes/ERC721TokensRoutes/ERC721CollectionExtraDataRoute");
const ERC721CollectionFloorPriceRouter = require("./Routes/ERC721TokensRoutes/ERC721CollectionFloorPriceRoute");
const ERC721CollectionMarketCapRouter = require("./Routes/ERC721TokensRoutes/ERC721CollectionMarketCapRoute");
const ERC721CollectionSalesRouter = require("./Routes/ERC721TokensRoutes/ERC721CollectionSalesRoute");
const ERC721CollectionTransfersRouter = require("./Routes/ERC721TokensRoutes/ERC721CollectionTransfersRoute");
const ERC721CollectionTrendsRouter = require('./Routes/ERC721TokensRoutes/ERC721CollectionTrendsRoute');
const ERC721CollectionVolumeRouter = require("./Routes/ERC721TokensRoutes/ERC721CollectionVolumeRoute");
const ERC721HoldingsRouter = require("./Routes/ERC721TokensRoutes/ERC721HoldingsRoute");
const ERC721LookupDataRouter = require('./Routes/ERC721TokensRoutes/ERC721LookupDataRoute');
const ERC721OpenseaDataRouter = require('./Routes/ERC721TokensRoutes/ERC721OpenseaDataRoute');
const ERC721RarityDataRouter = require("./Routes/ERC721TokensRoutes/ERC721RarityDataRoute");
const ERC721SalesDataRouter = require("./Routes/ERC721TokensRoutes/ERC721SalesDataRoute");
const ERC721TransferLookupDataRouter = require("./Routes/ERC721TokensRoutes/ERC721TransferLookupDataRoute");
const ERC721TransfersDataRouter = require("./Routes/ERC721TokensRoutes/ERC721TransfersDataRoute");

// Gas Information Route
const GasLookupRouter = require("./Routes/GasRoutes/GasLookupRoute");

// Pricing Routes
const ERC20PriceRouter = require("./Routes/PriceRoutes/ERC20PriceRoute");
const ERC721PriceRouter = require('./Routes/PriceRoutes/ERC721PriceRoute');
const ETHPriceRouter = require("./Routes/PriceRoutes/ETHPriceRoute");
const LayerTwoPriceRouter = require("./Routes/PriceRoutes/LayerTwoPriceRoute");

dotenv.config({ path: '.env' });
const app = express();

// CORS options to allow connections from client port
const corsOptions: CorsOptions = {
    origin: process.env.CLIENT_URL // Allow requests from this origin
};

// Set up middleware
app.use(cors(corsOptions)); // Enable CORS with specified options
app.use(express.json()); // Removed extended option
app.use(express.urlencoded({ extended: false })); // Keep this as is

app.listen(process.env.PORT || 8080, () => {
    console.log("Listening on PORT " + (process.env.PORT || 8080));
});

// Enable and activate routes to be used by server
app.use("/", AddressToENSRouter);
app.use("/", ENSIDRouter);
app.use("/", ENSNameRouter);
app.use("/", ENSToAddressRouter);
app.use("/", ERC20CollectionOwnersRouter);
app.use("/", ERC20CollectionTopCoinsRouter);
app.use("/", ERC20CollectionTransfersRouter);
app.use("/", ERC20HoldingsRouter);
app.use("/", ERC20TransfersRouter);
app.use("/", ERC721CollectionAttributesRouter);
app.use("/", ERC721CollectionDataRouter);
app.use("/", ERC721CollectionExtraDataRouter);
app.use("/", ERC721CollectionFloorPriceRouter);
app.use("/", ERC721CollectionMarketCapRouter);
app.use("/", ERC721CollectionSalesRouter);
app.use("/", ERC721CollectionTransfersRouter);
app.use("/", ERC721CollectionTrendsRouter);
app.use("/", ERC721CollectionVolumeRouter);
app.use("/", ERC721HoldingsRouter);
app.use("/", ERC721LookupDataRouter);
app.use("/", ERC721OpenseaDataRouter);
app.use("/", ERC721RarityDataRouter);
app.use("/", ERC721SalesDataRouter);
app.use("/", ERC721TransferLookupDataRouter);
app.use("/", ERC721TransfersDataRouter);
app.use("/", GasLookupRouter);
app.use("/", ERC20PriceRouter);
app.use("/", ERC721PriceRouter);
app.use("/", ETHPriceRouter);
app.use("/", LayerTwoPriceRouter);

// Export ready-made server for usage
export default app;