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



  const grouped = card.reduce((acc, item) => {
    if (!acc[item.title]) acc[item.title] = [];
    acc[item.title].push(item.image);
    return acc;
  }, {});


   return (
    <section className="categories">
      {Object.entries(grouped).map(([title, images]) => (
        <div key={title}>
          <h2 className="category-title">{title}</h2>
          <div className="image">
            {images.map((img, index) => (
              <img key={index} src={img} alt={title} className="card" />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Card;



