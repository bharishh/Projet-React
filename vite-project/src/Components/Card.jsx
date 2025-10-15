import "./Components.css"
import React from "react";

function Card() {
  const card = [
    { id: 1, title: "Nature", image: "/assets/montagne.jpg" },
    { id: 2, title: "Nature", image: "/assets/nature-soleil.jpg" },
    { id: 3, title: "Animaux", image: "/assets/koala.jpg" },
    {id : 4, title: "Animaux", image: "/assets/sphynx.jpg" },
   { id: 3, title: "Voiture", image: "/assets/Lambo_yakuza.jpg" },
    { id: 4, title: "Voiture", image: "/assets/Old-car-interior.jpg" },
    { id: 5, title: "Voyage", image: "/assets/voyage-pont.jpg" },
    { id: 6, title: "Voyage", image: "/assets/Voyage-velo.jpg" },
    { id: 7, title: "Art", image: "/assets/art-adrianna.jpg" },
    { id: 8, title: "Art", image: "/assets/art-chris.jpg" },
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



