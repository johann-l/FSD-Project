import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ anchor, anchorText, description, listItems, imageDetails }) {
  return (
    <li id="AppContainer">
      <Link to={anchor}>{anchorText}</Link>
      <br />
      <div>
        <div style={{display: 'block'}}>
          <p style={{margin: '0 0 5px'}}>{description}</p>
          <ul style={{paddingLeft: '20px'}}>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <figure style={{margin:'0', textAlign: 'center'}}>
          <img
            alt={imageDetails.alt}
            src={imageDetails.src}
            width={imageDetails.width}
            height={imageDetails.height}
          />
          <figcaption>{imageDetails.caption}</figcaption>
        </figure>
      </div>
    </li>
  );
}