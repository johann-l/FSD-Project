import { Link } from "react-router-dom"; //routing
import React from 'react';

export default function Review(){
    return (
        <div style={{padding:'20px 0 0 20px'}}>
            <Link to="/">Go Back</Link>
            <br />
            <h1>this my shit</h1>
        </div>
    );
}