import React, { useState, useEffect } from 'react';

// Define types for the weather data
interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const WeatherFetchData: React.FC = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const search = async (city: string): Promise<void> => {
    try {
      console.log(import.meta.env.VITE_API_KEY);
      const url = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY};"// Added units=metric for Celsius
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const jsonData: WeatherData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  useEffect(() => {
    search('Kraków');
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Weather in {data.name}</h1>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
};

export default WeatherFetchData;
