import React from 'react';
import CardPlace1 from './cardplace1.jsx';
import CardPlace2 from './cardplace2.jsx';
import CardPlace3 from './cardplace3.jsx';
import CorrectCard from './correctcard.jsx';


class CardMemoriser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            resultcounter: 0,
            correctIndex: 0,
            bgColor: 'white'
        };
    }

    userAnswer = (param) => {
        if (param === true){
            this.setState({
                bgColor: 'green'
            })
            this.userInterval = setTimeout(() => {
                this.setState({
                    correctIndex: this.state.correctIndex + 1,
                    resultcounter: this.state.resultcounter+1,
                    bgColor: 'white'
                });
            },500);
        } else {
            this.userInterval = setTimeout(() => {
                this.setState({
                    correctIndex: this.state.correctIndex+1
                });
            },500);
        }
    };
    render(){
        let cardArray = [
            <CorrectCard correctIndex = {this.state.correctIndex} bgColor = {this.state.bgColor} key = 'poprawnakarta' data = {this.props.data} correctMethod = {this.userAnswer} />,
            <CardPlace1 key = 'card1' data = {this.props.data} correctMethod = {this.userAnswer} />,
            <CardPlace2 key = 'card2' data = {this.props.data} correctMethod = {this.userAnswer}/>,
            <CardPlace3 key = 'card3' data = {this.props.data} correctMethod = {this.userAnswer}/>
        ];

        for (let i = cardArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
        }
        return this.props.memoryHider === true && this.state.correctIndex < 52 ?(
            <div>
                <span style ={{fontSize: 40, color: 'indigo'}}> Wskaż {this.state.correctIndex +1} kartę:</span>
                <div style = {{marginLeft: 100}}>
                    {cardArray}
                    <span style = {{fontSize: 50, color: "indigo"}}> Twój wynik: {this.state.resultcounter} </span>
                </div>
            </div> ) : (
                <div>
                    <span style = {{fontSize: 50, color: "indigo"}}> Twój wynik: {this.state.resultcounter} </span>
                </div>
        )
    }
}

export default CardMemoriser;