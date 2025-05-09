// Conectando a API do OpenWeatherMap para buscar dados climáticos já fornecidos.
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_OPENWEATHER_API_URL;

export async function buscarClimaPorCidade(city) {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=pt`);
    if (!response.ok) throw new Error("Erro ao buscar clima");
    return await response.json();
}