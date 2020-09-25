import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Noodles</li>
      <li>Bacon</li>
      <li>Jamon</li>
    </ul>
    <div>
      <img
        className="food-img"
        src="https://kontaktgrillrezepte.de/wp-content/uploads/Gegrillter-Bacon-1024x768.jpeg"
      />
      <img
        className="food-img"
        src="http://www.jamon.com/images/content/image-jamon-artisanal-hams.jpg"
      />
      <img
        className="food-img"
        src="https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
