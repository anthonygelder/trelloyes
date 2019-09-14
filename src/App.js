import React from 'react';
import List from './List.js';
import './app.css';
import STORE from './store.js';

function App(props) {
  const listItems = STORE.lists.map((list, idx) => {
    return <List key={list.key} id={parseInt(list.id)} list={list} allCards={STORE.allCards}/>;
  })
  
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listItems}
      </div>
    </main>
  );
}

export default App;