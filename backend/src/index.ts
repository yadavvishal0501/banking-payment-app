import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import PaymentsRoutes from "./routes/payments";
import authRoutes from "./routes/authRoutes";


const app = express();
app.use(cors());
app.use(express.json());   // IMPORTANT !!!
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/payments", PaymentsRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
