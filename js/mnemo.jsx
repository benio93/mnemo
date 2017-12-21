import React from 'react';
import ReactDOM from 'react-dom';
import cards from './cards';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

import ShuffleCardDeck from "./components/shufflecard.jsx";
import Template from "./components/template.jsx";


class App extends React.Component{
    render(){
        return (
            <Template>
            <ShuffleCardDeck data = {cards}/>
            </Template>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});