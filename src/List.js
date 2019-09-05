import React from 'react';
import Card from './Card.js'
import './list.css';


class List extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            list: props.list,
            allCards: props.allCards
            // cardIds: props.
        }
    }

    deleteCard = (id) => {
        const newCards = this.state.list.cardIds.filter((item) => {
            if (item === id) {
                return false;
            }
            return true;
        })
        console.log(this.state.list.cardIds, "card ids")
        console.log(newCards, "new cards")
        this.setState({
            cardIds: newCards
            // How can I set newCards to this.state.list.cardIds in here?
        })
    }

    render() {
        return (
            <div className='List'>
                <header className="List-header">
                    <h2>{this.state.list.header}</h2>
                </header>
                <div className="List-cards">
                    {console.log(this.state.list.cardIds, "card ids2")}
                    {this.state.list.cardIds.map((cardId, idx) => {
                        
                        return (
                            <Card 
                                key={idx} 
                                card={this.state.allCards[cardId]}
                                handleClick={this.deleteCard} />)
                    })}
                </div>
            </div>
        );
    }
}

export default List;