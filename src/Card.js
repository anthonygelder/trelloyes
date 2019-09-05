import React from 'react';
import './card.css';


function Card(props) {
    // console.log(props.card.id, "from card component")
    return (
        <div className='Card'>
            <button type="button"
            onClick={() => { props.handleClick(props.card.id) }}>delete</button>
            {/* {console.log(props, "from card component")} */}
            <h3>{props.card.title}</h3>
            <p>{props.card.content}</p>
        </div>
    );
}

export default Card;