/* We can choose to use on files js or jsx extensions*/ 
import React from "react";
import '../stylesheets/testimony.css'; /*Se incluye extension porque sino se asume que es extension js*/

const Testimony = (props) => {
  return (
    <div className="testimony-container">
      <img 
        className="testimony-image"
        src={require(`../images/testimony-${props.image}.png`)}
        alt="Picture of Emma" />
      <div className="testimony-text-container">
        <p className="testimony-name">
          <strong>{props.name}</strong> i {props.country}
        </p>
        <p className="testimony-job">
          {props.position} hos <strong>{props.company}</strong>
          </p>
        <p className="testimony-text">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony