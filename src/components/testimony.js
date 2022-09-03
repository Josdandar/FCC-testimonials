/* We can choose to use on files js or jsx extensions*/ 
import React from "react";
import '../stylesheets/testimony.css'; /*Se incluye extension porque sino se asume que es extension js*/

const Testimony = () => {
  return (
    <div className="testimony-container">
      <img 
        className="testimony-image"
        src={require("../images/testimony-emma.png")}
        alt="Picture of Emma"/>
      <div className="testimony-text-container">
        <p className="testimony-name">Emma Bostian i Sverige</p>
        <p className="testimony-job">Programvareingeniør hos Spotify</p>
        <p className="testimony-text">Jeg har alltid hatt problemer med å lære meg JavaScript. Jeg har tatt mange kurs, men freeCodeCamp-kurset var det som satt fast. Å studere JavaScript samt datastrukturer og algoritmer ved freeCodeCamp ga meg ferdighetene og selvtilliten jeg trengte for å få drømmejobben min som programvareingeniør hos Spotify.</p>
      </div>
    </div>
  );
}

export default Testimony