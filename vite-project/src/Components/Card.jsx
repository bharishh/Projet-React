import "./Components.css"
import logo_Montagne from '../assets/montagne.jpg'
import logo_Koala from '../assets/koala.jpg'


function card()
{
            const card = [
            { title: "Nature", image: logo_Montagne},
            {title: "Animaux", image: logo_Koala}
            ];

    return(
        <div>
            {card.map((item) =>
            (
                <>
                <section><h2>{item.title}</h2></section>
                
                    <div className="card">
                <img src={item.image} alt={item.title} />
                </div>
                </>
            

            ))}
        </div>
    );
           
}

export default card;



