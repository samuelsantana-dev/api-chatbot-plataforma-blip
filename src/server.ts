import "dotenv/config";
import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weatherRoutes";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/chatbot", weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
