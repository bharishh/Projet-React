// text like dans le bouton 
import React from 'react';
import { useState } from 'react';



function Like() {
        const [count, setCount] = useState(0);
        return (
                <button className="like" onClick={() => setCount((count) => count + 1)}>
                    Like {count} 
                </button>
        );
}

export default Like;