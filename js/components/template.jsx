import React from 'react';
import {Link} from 'react-router';

class Template extends React.Component{
    render(){
        return (
            <div style = {{backgroundColor: "grey", height: 100, marginBottom: 500}}>
                <div style = {{backgroundColor: "grey", height: 1200 , width: 70, float: "left", position: "relative"}}> </div>
                <h1> Aplikacja</h1>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}

export default Template;