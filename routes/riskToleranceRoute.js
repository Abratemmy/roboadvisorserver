import express from "express";

import { createRiskToleranceData, getRiskToleranceDatas } from "../controllers/riskTolerance.js";

const router = express.Router();


router.get('/', getRiskToleranceDatas);
router.post('/', createRiskToleranceData);

export default router;