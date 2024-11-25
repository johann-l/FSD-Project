import '../css-files/home.css'; //css
import imgcalc from '../img/calc.png'; import imgcalend from '../img/calend.png'; //img
import myFunction from './Review'; import NavItem from './NavItem.js'; //js
import React from 'react';

export default function Home(){
    return (
      <>
        <div id="divID">
            <h1>Choose your Application</h1>
            <nav>
            <ul style={{ textAlign: "left" }}>
                <NavItem
                  anchor="/calc"
                  anchorText="Calculator App"
                  description="A simple calculator HTML app is a basic web application that allows users to perform arithmetic calculations, such as:"
                  listItems={["Addition", "Subtraction", "Multiplication", "Division"]}
                  imageDetails={{
                    src: imgcalc,
                    alt: "calculator screenshot",
                    width: "200px",
                    height: "150px",
                    caption: "A simple calculator app using JavaScript",
                  }}
                />
                <NavItem
                  anchor="/calendar"
                  anchorText="Calendar App"
                  description="A simple calendar app is a basic web application that allows users to:"
                  listItems={[
                    "Set an event on a particular day",
                    "Find the day of the week of a date",
                  ]}
                  imageDetails={{
                    src: imgcalend,
                    alt: "calendar screenshot",
                    width: "400px",
                    height: "200px",
                    caption: "A calendar app using JavaScript",
                  }}
                />
              </ul>
            </nav>
        </div>
        <button onClick={myFunction}>Click to Review</button>
        </>
    );
}