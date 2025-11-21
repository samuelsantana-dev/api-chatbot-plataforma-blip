require("dotenv").config();
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3001;
const API_CLIMA_KEY = process.env.API_CLIMA_KEY || "";

app.use(cors());
app.use(express.json());

// app.get("/chatbot-blip", async (req, res) => {
//     try {
//         console.log("🔍 Iniciando requisição para OpenWeather...");
        
//         if (!API_CLIMA_KEY) {
//             return res.status(500).json({
//                 error: "Chave da API não configurada",
//                 message: "Configure a variável API_CLIMA_KEY no arquivo .env"
//             });
//         }

//         const response = await axios.get(
//             `http://api.openweathermap.org/geo/1.0/direct?q=maceio&limit=5&appid=${API_CLIMA_KEY}`
//         );

        
//         console.log('✅ Dados recebidos:', response.data);
        
//         return res.json({
//             event_date: new Date().toISOString(),
//             temperature: response.data.main.temp, // DADO REAL agora
//             city: response.data.name,
//             humidity: response.data.main.humidity,
//             description: response.data.weather[0].description
//         });
        
//     } catch (error: any) {
//         console.error('❌ Erro na requisição:', error.response?.data || error.message);
        
//         return res.status(500).json({
//             error: "Erro ao buscar dados do clima",
//             details: error.response?.data?.message || error.message,
//             suggestion: "Verifique se a chave da API está correta e se a cidade existe"
//         });
//     }
// });

app.get("/chatbot-blip", async (req, res) => {
    try {
        console.log("🔍 Mock - Simulando dados do clima...");
        
        // Simular um delay de rede
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dados mockados
        const mockWeatherData = {
            event_date: new Date().toISOString(),
            temperature: 28.5,
            city: "São Paulo",
            humidity: 65,
            description: "céu limpo",
            feels_like: 30.2,
            pressure: 1013,
            wind_speed: 3.1,
            mock: true // Para identificar que são dados mockados
        };
        
        console.log('✅ Dados mockados enviados:', mockWeatherData);
        
        return res.json(mockWeatherData);
        
    } catch (error: any) {
        console.error('❌ Erro no mock:', error.message);
        return res.status(500).json({
            error: "Erro no servidor",
            details: error.message
        });
    }
});


app.get("/", (req, res) => {
    console.log("✅ Rota raiz acessada");
    res.json({ 
        message: "API Chatbot BLIP funcionando!",
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));