import React from 'react';
import CardPlace1 from './cardplace1.jsx';
import CardPlace2 from './cardplace2.jsx';
import CardPlace3 from './cardplace3.jsx';
import CorrectCard from './correctcard.jsx';


class CardMemoriser extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.memoryHider);
        this.state = {
            data: this.props.data,
            memoryHider: true
        }

    }
    render(){
        return this.state.memoryHider === false ?
            <div style = {{marginLeft: 100}}>
                <CardPlace1 data = {this.state.data}/>
                <CardPlace2 data = {this.state.data}/>
                <CorrectCard/>
                <CardPlace3 data = {this.state.data}/>
            </div> : <div> </div>
    }
}

export default CardMemoriser;