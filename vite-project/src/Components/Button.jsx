// text like dans le bouton 
import React from 'react';


function like(props) {
        const [count, setCount] = useState(0);
        return (
                <button onClick={() => setCount((count) => count + props.value)}>
                    clique {count + 1} fois
                </button>
        );
}
export default Button;