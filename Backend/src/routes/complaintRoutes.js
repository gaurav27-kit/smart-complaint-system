import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createComplaint } from "../controllers/complaintController.js";

const router = express.Router();

router.post("/", authMiddleware, createComplaint);

export default router;
