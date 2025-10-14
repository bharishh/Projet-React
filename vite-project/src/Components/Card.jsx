import "./Components.css"
import React from "react";

function Card() {
  const card = [
    { id: 1, title: "Nature", image: "/assets/montagne.jpg" }
    , { id: 2, title: "Animaux", image: "/assets/koala.jpg" }
    , { id: 3, title: "Voiture", image: "/assets/Lambo_yakuza.jpg" }
  ];

  return (
    <section>
      {card.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
                <img src={item.image} alt={item.title} className="card" />
        </div>
      ))}
    </section>
  );
}

export default Card;



