import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import STORE from './store';
import List from './List';





    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List key={1} list={'hello'} allCards={STORE.allCards}/>, div);
    })


    it('renders the UI as expected', () => { 
        const tree = renderer 
        .create(<List key={1} list={'hello'} allCards={STORE.allCards}/>) 
        .toJSON(); 
        expect(tree).toMatchSnapshot(); 
    });