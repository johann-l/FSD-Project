import '../css-files/review.css'; //css
import { Link, useNavigate, useLocation } from "react-router-dom"; //routing
import React, { useEffect } from 'react';

export default function Review(){
    const navi = useNavigate();
    const loc = useLocation();

    useEffect(() => {
        if (loc.state?.from === "/calculator") {
            const handlePopState = () => {
                navi("/", { replace: true });
            };

            window.addEventListener("popstate", handlePopState);

            return () => {
                window.removeEventListener("popstate", handlePopState);
            };
        }
    }, [loc, navi]);

    function handleSubmit(e){
        e.preventDefault();
        alert("Thanks for your review!");
        navi("/");
    }

    return (
        <div style={{padding:'20px 0 0 20px'}}>
            <Link to="/">Go Back</Link>
            <h1>App Review Form</h1>
            <form id="reviewForm" onSubmit={handleSubmit} style={{padding: "10px"}}>
                <fieldset>
                    <legend>Review the Calculator App</legend><br />

                    <label htmlFor="calculatorRating">Rating (1-5):</label>
                    <input type="number" id="calculatorRating" name="calculatorRating" min="1" max="5" required /><br /><br />

                    <label htmlFor="calculatorFeedback">Feedback:</label><br />
                    <textarea id="calculatorFeedback" name="calculatorFeedback" rows="4" cols="50" placeholder="What did you like or dislike about the Calculator App?"></textarea><br /><br />
                </fieldset>
                <fieldset>
                    <legend>Review the Calendar App</legend><br />

                    <label htmlFor="calendarRating">Rating (1-5):</label>
                    <input type="number" id="calendarRating" name="calendarRating" min="1" max="5" required /><br /><br />

                    <label htmlFor="calendarFeedback">Feedback:</label><br />
                    <textarea id="calendarFeedback" name="calendarFeedback" rows="4" cols="50" placeholder="What did you like or dislike about the Calendar App?"></textarea><br /><br />
                </fieldset>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
}