import React from 'react';
import ReactDOM from 'react-dom';
import cards from './cards'



class CorrectCard extends React.Component{
    render(){
        return (
        <p  style = {{width: 100, height: 150, backgroundColor: 'green', float: "left"}}>
            Poprawna karta
        </p>
        )
    }
}

class CardPlace3 extends React.Component{
    render(){
        let randomiser = Math.floor((Math.random() * 52) + 1);
        return (
            <p  style = {{width: 100, height: 150, backgroundColor: 'blue', float: "left"}}>
                {this.props.data[randomiser].cardName}
            </p>
        )
    }
}

class CardPlace2 extends React.Component{
    render(){
        let randomiser = Math.floor((Math.random() * 52) + 1);
        return (
            <p  style = {{width: 100, height: 150, backgroundColor: 'yellow', float: "left"}}>
                {this.props.data[randomiser].cardName}
            </p>
        )
    }
}


class CardPlace1 extends React.Component{
    render(){
        let randomiser = Math.floor((Math.random() * 52) + 1);
        return (
            <p  style = {{width: 100, height: 150, backgroundColor: 'red', float: "left"}}>
                {this.props.data[randomiser].cardName}
            </p>
        )
    }
}

class CardMemoriser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: this.props.data
        }
    }
    render(){
        return (
            <div>
            <CardPlace1 data = {this.state.data}/>
            <CardPlace2 data = {this.state.data}/>
                <CardPlace3 data = {this.state.data}/>
                <CorrectCard/>
            </div>
        )
    }
}




class CardList extends React.Component{
    render(){
        console.log(this.props.data)
        return (

            <ul>
                {
                    this.props.data.map((element) => {
                        return <li key = {element.id}>{element.cardName}</li>
                    })
                }
            </ul>

        )
    }
}




class CardApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: -1,
            blabla: this.props.data.cardName,
            clickable: true
        }
    }
    clickHandler = () => {
        this.setState({
            clickable: false
        });
        this.cardInterval = setInterval(() => {
            this.setState({
                counter: this.state.counter+1,
                blabla: this.props.data[this.state.counter+1].cardName

            }, ()=>{
                if(this.state.counter === 50){
                    clearInterval(this.cardInterval)
                }
            });
            console.log(this.state.counter)
        },1000);
    };
    render(){
        return (
            <div>
                <p  style = {{width: 100, height: 150, backgroundColor: 'lightblue'}}>
                    {this.state.blabla}
                    </p>
                <button disabled={!this.state.clickable} onClick={this.clickHandler}> START </button>
            </div>
        )
    }
}



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: this.props.data
        }
    }
    componentDidMount(){
        const shuffledCards = this.state.data;

        for (let i = shuffledCards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        this.setState({
            data: shuffledCards
        })
    }
    render(){
        return (
            <div>

                <CardApp  data = {this.state.data} />
                <CardList data = {this.state.data} />
                <CardMemoriser data = {this.state.data}/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App data = {cards}/>,
        document.getElementById('app')
    );
});