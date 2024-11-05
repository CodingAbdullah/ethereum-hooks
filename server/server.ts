import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: '.env' });
const app = express();

app.listen(process.env.PORT || 8080, () => {
    console.log("Listening on PORT " + (process.env.PORT || 8080));
});