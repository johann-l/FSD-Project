import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calogic from "./calendar-logic";


export default function Calendar(){

  const {
    year,
    setYear,
    month,
    setMonth,
    days,
    events
    } = Calogic();

    return(
        <div>
          <Link to="/">Go Back</Link>
          <br />
          <h1>Calendar App</h1>
          <div style={{ padding: "20px" }}>
            <form id="calendarForm" onSubmit={Calogic}>
              <label htmlFor="year">Enter Year:</label>
              <input
                type="number"
                id="year"
                placeholder="1900-...."
                value={year}
                min="1900"
                onChange={(e) => setYear(e.target.value)}
              />
              <br />
              <br />
    
              <label htmlFor="month">Select Month:</label>
              <select
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                required
              >
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <br />
              <br />
    
              <button type="submit">Generate Calendar</button>
            </form>
    
            <table id="calTab">
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>{(() =>{
                const rows = [];
                let dayCounter = 1; 
                for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
                  const cells = [];

                  for (let colIndex = 0; colIndex < 7; colIndex++) {
                      const day = dayCounter++; // Increment the day counter
                      
                      cells.push(
                          <td key={`${rowIndex}-${colIndex}`}>
                              {day <= 31 ? 
                                (<button
                                  id={day}
                                  onClick={() => addEvent(day)}
                                  style={{ width: "100%" }}
                                >{day}</button> ) : ("")}
                          </td>
                      );
                  }

                rows.push(<tr key={rowIndex}>{cells}</tr>);
                }
            })()}</tbody>
            </table>
    
            {/* Event List */}
            <h2>Event List</h2>
            <ul id="myUL">
              {Object.entries(events).map(([day, event]) => (
                <li key={day}>
                  Day {day}: {event}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
}