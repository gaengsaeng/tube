import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Conmment";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`Lisening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
