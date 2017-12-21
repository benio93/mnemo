import React from 'react';


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
                cardCounter: this.props.data[this.state.counter+1].cardName,
                class: this.props.data[this.state.counter+1].class

            }, ()=>{
                if(this.state.counter === 51){
                    clearInterval(this.cardInterval)
                }
            });
            console.log(this.state.counter)
        },100);
    };
    render(){
        return (
            <div style = {{marginLeft: 100, marginTop: 100}}>
                <p  className={this.state.class}  style = {{height: 143}}>
                </p>
                <button  disabled={!this.state.clickable} onClick={this.clickHandler}> START </button>
            </div>
        )
    }
}

export default CardApp;

