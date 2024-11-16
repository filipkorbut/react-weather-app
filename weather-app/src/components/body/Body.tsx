import { weatherData } from "../weather-api/WeatherFetchData";

const Body = () => {
    return (
        <div> 
            <h1>Kraków</h1>     
            <h1> {weatherData.current.temperature2m}</h1>
            <h1> {weatherData.current.temperature2m}</h1>
            <h1> {weatherData.current.surfacePressure}</h1>
        </div>
    );
};

export default Body;