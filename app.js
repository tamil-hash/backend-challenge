import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

//middlewaress
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//routes
app.use("/movie", movieRoutes);

app.all("*", (_, res) => {
  res.status(404).send("Unknown path! 404 not found!");
});

export default app;
