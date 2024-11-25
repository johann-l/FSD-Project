import React from "react";

export default function FieldSet({AppName}){
    return(
        <fieldset>
            <legend>Review the {AppName} App</legend><br />

            <label htmlFor={`${AppName}Rating`}>Rating (1-5):</label>
            <input type="number" id={`${AppName}Rating`} name={`${AppName}Rating`} min="1" max="5" style={{fontSize: "19px"}}required /><br /><br />
            <label htmlFor={`${AppName}Feedback`}>Feedback:</label><br />
            <textarea id={`${AppName}Feedback`} name={`${AppName}Feedback`} rows="4" cols="50" placeholder={`What did you like or dislike about the ${AppName} App?`}></textarea><br /><br />
        </fieldset>
    ); 
}
