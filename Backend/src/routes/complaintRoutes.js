import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createComplaint,
  getMyComplaints,
} from "../controllers/complaintController.js";

const router = express.Router();

router.post("/", authMiddleware, createComplaint);
router.get("/", authMiddleware, getMyComplaints);

export default router;
