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