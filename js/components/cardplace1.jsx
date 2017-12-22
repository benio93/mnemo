import React from "react";

class CardPlace1 extends React.Component{
    clickHandler = (event) => {
        event.preventDefault()
        this.props.correctMethod(false)
    };
    render(){
        let randomiser = Math.floor((Math.random() * 50) + 1);
        return (
            <a href = "#" key = {this.props.data.id}  onClick={this.clickHandler} className={this.props.data[randomiser].class} style = {{height: 143,margin: 5,  float: "left"}}>
            </a>
        )
    }
}

export default CardPlace1;
