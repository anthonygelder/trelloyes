import React from 'react';
import './card.css';


function Card(props) {
    console.log(props)
    return (
        <div className='Card'>
            <button type="button">delete</button>
            <h3>{props.card.title}</h3>
            <p>{props.card.content}</p>
        </div>
    );
}

export default Card;