import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ServerlessHttp from "serverless-http";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();
const name = process.env.NAME || "ali bhai";
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
router.get("/ali", (req, res) => {
  res.json({ msg: name });
});
app.use("/", router);

export const handler = ServerlessHttp(app);
