import React from 'react';

class CardList extends React.Component{
    render(){
        console.log(this.props.data)
        return (

            <ul>
                {
                    this.props.data.map((element) => {
                        return <li className = {element.class} key = {element.id}></li>
                    })
                }
            </ul>

        )
    }
}

export default CardList;