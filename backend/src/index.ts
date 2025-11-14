import express from "express";
import cors from "cors";
import paymentsRoutes from "./routes/payments";
import authRoutes from "./routes/authRoutes";

const app = express();
app.use(cors());
app.use(express.json());   // IMPORTANT !!!

app.use("/api/auth", authRoutes);
app.use("/api/payments", paymentsRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
