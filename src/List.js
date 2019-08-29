import React from 'react';
import Card from './Card.js'
import './list.css';


function List(props) {
    let cards;
    if ( props.list.cardIds) {
    cards = props.list.cardIds.map(function(cardId, idx) {
        return <Card key={idx} card={props.allCards[cardId]}/>
    })
    }   

    return (
        <section className='List'>
            <header className="List-header">
                <h2>{props.list.header}</h2>
            </header>
            <div className="List-cards">
                {cards}
            </div>
        </section>
    );
}

export default List;