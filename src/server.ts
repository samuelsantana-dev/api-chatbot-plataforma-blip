require("dotenv").config();
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3001;
const API_CLIMA_KEY = process.env.API_CLIMA_KEY || "";

app.use(cors());

app.get("/chatbot-blip", async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Aurora&appid=${API_CLIMA_KEY}&units=metric&lang=pt_br`) 
        console.log('data', data);
        return res.json({
            event_date: 'EVENT_DATE',
            temperature: 'data.main.temp',
        })
    } catch (error) {

    }
})

app.get("/", (req, res) => {
    res.json({ 
        message: "API Chatbot BLIP funcionando!",
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));