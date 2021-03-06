import React from 'react';
import CardApp from './cardapp.jsx';
import CardMemoriser from './cardmemoriser.jsx';
import CardList from './cardlist.jsx';

class ShuffleCardDeck extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: this.props.data,
            memoryHider: false
        }
    }
    componentDidMount(){
        const shuffledCards = this.state.data;
        console.log(this.state.data)

        for (let i = shuffledCards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        this.setState({
            data: shuffledCards
        });
    }
    showHandler= () => {
        this.setState({
            memoryHider: true
        });
    }
    getData = (cardData) => {
        console.log(cardData)
    }
    render(){
        return (
                 <div>
                    <CardApp  data = {this.state.data} showMethod = {this.showHandler}  />
                    <CardMemoriser data = {this.state.data} memoryHider = {this.state.memoryHider} sendData = {this.getData}/>
                 </div>
        )
    }
}

export default ShuffleCardDeck;
