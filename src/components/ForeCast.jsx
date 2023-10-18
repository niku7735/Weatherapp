import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const weekdays = [
  "Monday",
  "Tuseday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];


const ForeCast = ([forecasts]) => {
  console.log(forecasts);
  const dayIAWeek = new Date().getDay();
  const foreCastDays = weekdays
    .slice(dayIAWeek, weekdays.length)
    .concat(weekdays.slice(0, dayIAWeek));
  return (
    <>
      <label className="titel">Forecast+</label>
      <Accordion allowZeroExpanded>
        {forecasts & forecasts.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-forecast">
                  <label className="day"></label>
                  <label className="description">
                    
                  </label>
                  <label className="min-max">
                    
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details">
                <div className="daily-details-item">
                  <label>Feels like</label>
                  <label>reg°C</label>
                </div>
                <div className="daily-details-item">
                  <label>Humidity</label>
                  <label>rgregw%</label>
                </div>
                <div className="daily-details-item">
                  <label>pressure</label>
                  <label>erwgrghPa</label>
                </div>
                <div className="daily-details-item">
                  <label>sea_level</label>
                  <label>egwehPa</label>
                </div>
                <div className="daily-details-item">
                  <label>clouds</label>
                  <label>%</label>
                </div>
                <div className="daily-details-item">
                  <label>wind speed</label>
                  <label>m/s</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}

export default ForeCast