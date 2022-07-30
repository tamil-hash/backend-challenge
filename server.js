import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => console.log("DB connection successful"));

app.listen(process.env.PORT, () => {
  console.log(`app listening to ${process.env.PORT}`);
});
