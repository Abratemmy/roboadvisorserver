import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import risktoleranceRoute from './routes/riskToleranceRoute.js'

const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/risktolerance', risktoleranceRoute);

app.get('/', (req, res) => {
    res.send("Hello, I am temitope")
})



const PORT = process.env.PORT || 5000


mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_URL, {})
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((err) => console.log(err.message));
