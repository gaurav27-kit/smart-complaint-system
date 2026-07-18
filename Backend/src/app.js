import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";
const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "SCMS Backend Running Successfully 🚀"
    });
});


app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Protected route accessed successfully!",
    user: req.user,
  });
});
export default app;