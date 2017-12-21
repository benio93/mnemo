import React from 'react';

class CardPlace3 extends React.Component{
    render(){
        let randomiser = Math.floor((Math.random() * 50) + 1);
        return (
            <p  className={this.props.data[randomiser].class} style = {{ height: 143,  float: "left"}}>

            </p>
        )
    }
}


export default CardPlace3;