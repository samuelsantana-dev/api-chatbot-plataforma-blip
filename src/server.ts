require("dotenv").config();
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;
const CHATBOT_KEY = process.env.CHATBOT_KEY || "";

app.use(cors());

app.get("/chatbot-blip/", async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Aurora&appid=${CHATBOT_KEY}&units=metric&lang=pt_br`) 
        console.log(data)
        return res.json({
            event_date: 'EVENT_DATE',
            temperature: 'data.main.temp',
        })
    } catch (error) {

    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));