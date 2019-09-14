import React from 'react';
import Card from './Card.js'
import './list.css';



const newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
    return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
    }
}

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            state = {
                store: this.STORE
            }
        }
    }

    deleteCard = (id) => {
        const newCards = this.state.cardIds.filter((item) => {
            if (item === id) {
                return false;
            }
            return true;
        })

        this.setState({
            cardIds: newCards
        })
    }


    addCard = (listId) => {
        const randomCard = newRandomCard();
        const cards = this.state.allCards;
        cards[randomCard.id] = randomCard;


        const newCards = this.state.cardIds.map((listId, key) => {
            if (parseInt(this.state.list.id) === key) {
                this.state.cardIds.push(randomCard.id);
            }
            return this.state.cardIds
        })
        this.setState({
            allCards: cards,
            cardIds: newCards
        })
        console.log(this.state, "after");
    }



    render() {
        return (
            <div className='List'>
                <header className="List-header">
                    <h2>{this.state.list.header}</h2>
                </header>
                <div className="List-cards">
                    {this.state.cardIds.map((cardId, idx) => {
                        return (
                            <Card 
                                key={idx} 
                                card={this.state.allCards[cardId]}
                                handleClick={this.deleteCard}/>)
                    })}
                </div>
                <button type="button" 
                                onClick={() => { this.addCard(this.state.list.id)}}>Add random card</button>
            </div>
        );
    }
}

export default List;