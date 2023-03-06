import React from 'react'
import ReactDom from 'react-dom'

//when u create component function u have to start with Capital letter
//so react will know that 'this is a component'
//and from react component, it have to return html
function Greeting() {

    return <h4>Hello World this is my first component</h4>
    //actually what it's return is JSX element, but for now we will mention it as html
}
//or 
const Greeting = () => {
    return React.createElement('div',
        {},
        React.createElement('h1', {}, 'hello world')
    )
}

//and we have to inject it too 'root' in index
//render method is looking for 2 things, first is what we're going to render
// and second is where we're going to render
ReactDom.render(<Greeting />, document.getElementById('root'));

//NOTE that u must have self closing tag in every component 
//like <Greeting /> have /> at the end
