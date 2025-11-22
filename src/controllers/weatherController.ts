import { Request, Response } from "express";
import { getWeather } from "../services/weatherService";

export async function weatherController(req: Request, res: Response) {
  try {
    const city = (req.query.city as string) || "Aurora";

    const data = await getWeather(city);

    return res.status(200).json({
      city: data.name,
      temperature: Math.round(data.temperature),
      description: data.description,
      icon_url: `http://openweathermap.org/img/wn/${data.icon}.png`,
      country_flag: `https://countryflagsapi.com/png/${data.country}`,
      humidity: `${data.humidity}%`,
      wind_speed: `${data.wind} km/h`,
      background_image: `https://source.unsplash.com/1600x900/?${city}`,
      raw: data.raw
    });
  } catch (error: any) {
    return res.status(404).json({
      error: "Cidade não encontrada",
      detalhes: error.message
    });
  }
}
