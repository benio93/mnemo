import React from 'react';

class CardPlace3 extends React.Component{
    clickHandler = (event) => {
        event.preventDefault()
        this.props.correctMethod(false)
    };
    render(){
        let randomiser = Math.floor((Math.random() * 50) + 1);
        return (
            <a  href = "#" onClick={this.clickHandler} className={this.props.data[randomiser].class} style = {{ height: 143, margin: 5, float: "left"}}>
            </a>
        )
    }
}


export default CardPlace3;