import '../css-files/review.css'; //css
import { Link, useNavigate } from "react-router-dom"; //routing
import FieldSet from './FieldSet'; //js
import React from 'react';

export default function Review(){
    const navi = useNavigate();
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
                <FieldSet AppName={'Calculator'}/>
                <FieldSet AppName={'Calendar'}/>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
}