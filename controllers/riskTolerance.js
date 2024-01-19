import mongoose from "mongoose";
import riskTolerance from "../models/risktolerance.js";

export const getRiskToleranceDatas = async (req, res) => {
    try {
        const tolerance = await riskTolerance.find();
        res.status(200).json(tolerance)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createRiskToleranceData = async (req, res) => {
    const tolerance = req.body;
    const newTolerance = new riskTolerance(tolerance)

    try {
        await newTolerance.save();
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}