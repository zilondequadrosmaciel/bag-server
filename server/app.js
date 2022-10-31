import express from "express";
import { router } from "./routes/bag.routes.js";
import fileUpload from 'express-fileupload'
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}));

app.get("/", (req, res) => {
  rend.send("Welcome to api")
})

app.use(router);

export default app;
