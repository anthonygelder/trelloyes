import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

it('renders the component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card key={1} card={'title'} />, div);
})

it('renders the UI as expected', () => { 
    const tree = renderer 
    .create(<Card key={1} card={'title'} />) 
    .toJSON(); 
    expect(tree).toMatchSnapshot(); 
});