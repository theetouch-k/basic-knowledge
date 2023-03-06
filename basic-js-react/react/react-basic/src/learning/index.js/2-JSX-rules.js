import React from 'react'
import ReactDom from 'react-dom'

//JSX stands for JavaScript XML. It is simply a syntax extension of JS.
//It allows us to directly write HTML in React (within JS code).

//as we mentioned component returns JSX
//JSX rules
//1. RETURN SINGLE ELEMENT ONLY (for example u can put all your html
//code in sindle div<div></div>, section<section></section> or fragment<></>)
//2. use camelCase for html attribute ex. className
//3. CLOSE every element otherwise u will get error

function Greeting() {
    return (
    <>
    <h4>Hello World this is my first component</h4>
    <p>My name is P</p>
    </>
    )
}

ReactDom.render(<Greeting />, document.getElementById('root'));
