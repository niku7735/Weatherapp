import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-image: linear-gradient(315deg, #955656 0%, #2c3e50 74%);
  height: 100vh;
`
  const Wrapper = styled.div``
  const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;`

const Weather = styled.div`
  width: 400px;
  background-color: rgba(0, 0, 0, 0.388);
  border-radius: 6px;
  box-shadow: 10px -2px 20px 2px rgba(40, 30, 30, 0.571);
  margin: 0 auto;
  color: azure;
  padding: 25px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const City = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 1px;
`;
const WeatherDesc = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Temperature = styled.div`
  font-weight: 600;
  font-size: 40px;
  width: auto;
  letter-spacing: -4px;
  margin: 20px 0;
`;
const Details = styled.div`
  width: 100%;
  padding-left: 20px;
`;
const Parameterrow = styled.div`
  display: flex;
  justify-content: space-between;
  margin:3px
`;
const Parameterlabel = styled.div`
  text-align: left;
  font-weight: 400;
  font-size: 12px;
`;
const Parametervalue = styled.div`
  text-align: right;
  font-weight: 600;
  font-size: 12px;
`;
const ForecastContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  margin-left: 20px;
  `
  const ForecastWrapper = styled.div`
  `
  const ForecastTemperature = styled.span``
  const ForecastItem = styled.div`
  border:1px solid balck;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.388);
  margin-left: 15px;
  ;
  `
  const Conditions = styled.div``
  const ForecastDay = styled.div``



function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState(null);
  const { city } = useParams();

  useEffect(() => {
    const fetchWeatherData = async () => {
      //   try {
      //     const response = await fetch(
      //       `https://api.weather.yahoo.com/your-weather-api-endpoint/${city}`
      //     );
      //     const data = await response.json();
      //     setWeatherData(data);
      //     console.log(data);
      //   } catch (error) {
      //     console.error('Error fetching weather data:', error);
      //   }
      const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "99a4589fbdmshb9c3bce900ade07p146e8fjsnc6d4ebd672f0",
          "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setWeatherData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (!weatherData) {
    return (<Loading >Loading........</Loading>);
  }
  const { location, current_observation, forecasts } = weatherData;
  console.log(location);
  console.log(current_observation);
  console.log(forecasts);
  return (
    <Container>
        <Weather>
          <Top>
            <City>
              {location.city}
            </City>
            <WeatherDesc>{current_observation.condition.text}</WeatherDesc>
          </Top>
          <Bottom>
            <Temperature>{current_observation.condition.temperature}°F</Temperature>
            <Details>
              <Parameterrow>
                <Parameterlabel style={{color:"black",fontSize:"15px"}}>Details</Parameterlabel>
              </Parameterrow>
              <Parameterrow>
                <Parameterlabel>Wind</Parameterlabel>
                <Parametervalue>{current_observation.wind.speed}m/s</Parametervalue>
              </Parameterrow>
              <Parameterrow>
                <Parameterlabel>Humidity</Parameterlabel>
                <Parametervalue>{current_observation.atmosphere.humidity}%</Parametervalue>
              </Parameterrow>
              <Parameterrow>
                <Parameterlabel>Pressure</Parameterlabel>
                <Parametervalue>{current_observation.atmosphere.pressure}Pa</Parametervalue>
              </Parameterrow>
            </Details>
          </Bottom>
        </Weather>
        {forecasts && forecasts.length > 0 && (
          <ForecastContainer>
            <h3>6-Day Forecast:</h3>
            {forecasts.map((item) => (
              <ForecastItem key={item.date}>
                <ForecastWrapper>
                  <ForecastDay>{item.day}</ForecastDay>
                  <ForecastTemperature>
                    {item.low}°F - {item.high}°F
                  </ForecastTemperature>
                  <Conditions>{item.text}</Conditions>
                </ForecastWrapper>
              </ForecastItem>
            ))}
          </ForecastContainer>
        )}
    </Container>
  );
}

export default WeatherDisplay;
