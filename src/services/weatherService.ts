import axios from "axios";

export async function getWeather(city: string) {
    const apiKey = process.env.WEATHER_KEY;

    if (!apiKey) throw new Error("WEATHER_KEY não definida no .env");

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    console.log("🌐 Requisição para API de clima:", apiWeatherURL);


    const { data } = await axios.get(apiWeatherURL);
    console.log("🔍 Dados do clima obtidos:", data);
    return {
        name: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        raw: data
    };
}
