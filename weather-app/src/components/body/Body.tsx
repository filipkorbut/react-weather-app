import WeatherFetchData from "../weather-api/WeatherFetchData.js"; "./components/weather-api/WeatherFetchData.tsx"

const Body = () => {
    return (
        <div> 
            <h1>Kraków</h1>     
            <WeatherFetchData/>
        </div>
    );
};

export default Body;    