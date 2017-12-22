import React from 'react';
import {Link} from 'react-router';

class Template extends React.Component{
    render(){
        return (
            <div>
                <div style = {{backgroundColor: "indigo", height: 100, marginBottom: 500}}>
                <   div style = {{backgroundColor: "indigo", height: 650 , width: 70, float: "left", position: "relative"}}>
                    </div>
                    <h1 style = {{ color: "white", fontSize: 40}}> Aplikacja
                    </h1>
                <hr/>
                <a href="."><button className='indygo' > Again </button></a>
                {this.props.children}
                </div>
            <div className = "simonides"></div>
            </div>
        )
    }
}

export default Template;