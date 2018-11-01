import React from "react";
import "./SpumcoImage.css";

const SpumcoImage = props => (
    <div  className="spumco-image"
          value={props.id}
          onClick={() => props.userChoice(props.id)}>
      <div className="img-container" >
        <img alt={props.name} src={props.image} />
      </div>
    </div>
);

export default SpumcoImage;
