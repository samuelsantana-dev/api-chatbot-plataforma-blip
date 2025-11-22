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

// export async function getWeather(city: string) {
//     console.log("🔍 Mock - Simulando dados do clima...");
//     const WEATHER_KEY = process.env.WEATHER_KEY;

//     if (!WEATHER_KEY) throw new Error("WEATHER_KEY não está definida no .env");

//     //   const { data } = await axios.get(
//     //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric&lang=pt_br`
//     //   );

//     const mockWeatherData = {
//         event_date: new Date().toISOString(),
//         temperature: 28.5,
//         city: "São Paulo",
//         humidity: 65,
//         description: "céu limpo",
//         feels_like: 30.2,
//         pressure: 1013,
//         wind_speed: 3.1,
//         mock: true // Para identificar que são dados mockados
//     };

//     console.log('✅ Dados mockados enviados:', mockWeatherData);

//     return mockWeatherData;

//     //   return {
//     //     situacao: data.weather[0].description,
//     //     temperatura: data.main.temp,
//     //     minima: data.main.temp_min,
//     //     maxima: data.main.temp_max,
//     //   };
// }
