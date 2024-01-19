import mongoose from "mongoose";

const riskSchema = mongoose.Schema({
    riskScore: Number,
    nigerianStock: Number,
    foreignStock: Number,
    techStock: Number,
    emergingStock: Number,
    nigeriaBond: Number,
    foreignBond: Number,
    commodities: Number,
    realEstate: Number,
    tBills: Number,
    Alternative: Number,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const riskTolerance = mongoose.model("risktolerance", riskSchema);

export default riskTolerance;