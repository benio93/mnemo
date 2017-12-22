import React from 'react';

class CorrectCard extends React.Component{
    clickHandler = (event) => {
        event.preventDefault()
       this.props.correctMethod(true)
    };


    render(){
        return (
            <a href = "#"  onClick = {this.clickHandler} style = {{ height: 143, margin: 5,  float: "left", borderRadius: 10, backgroundColor: this.props.bgColor}} className={this.props.data[this.props.correctIndex].class}>
            </a>
        )
    }
}

export default CorrectCard;