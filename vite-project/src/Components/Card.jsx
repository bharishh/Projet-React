import "./Components.css"
function card(props)
{
    return(
        <div className="card">
            <h1>{props.title}</h1>
            <img  className = "Card"src={props.image} alt=""/>
        </div>
    );
}

export default card;



