import React, { Component } from 'react'
import styled from 'styled-components';

export const Button = styled.button`
background-color: #03A9F4;
color: white;
padding: 5px 15px;
border-radius: 5px;
outline: 0;
text-transform: uppercase;
cursor: pointer;
box-shadow: 0px 2px 2px lightgrey;
transition: ease background-color 250ms;
&:hover {
    background-color: #0288D1;
}
`

class Order extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }
    clickHandler=() => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Order Now</button>
            </div>
    )
}
}

export default Order;

