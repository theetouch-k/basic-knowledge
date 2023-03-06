// import React from 'react'
// import ReactDom from 'react-dom'

// /*
// React hooks is consist of many use___

// first is useState

// */

import React from 'react'
import ReactDom from 'react-dom'

import './index.css';

//for importing object u have to use exactly same name
import { books } from './books';

//for importing component u can change it imported name whatever u like
import Bookkk from './Book';

const Person = () => <h1>John Goe</h1>;
const Message = () => {
    return <p>this is my message</p>
}

function Greeting() {
    return (
    <>
    <Person />
    <h4>Hello World this is my first component</h4>
    <Message />
    <section className='booklist'>
        {books.map((book) => {
            return <Bookkk key={book.id} {...book}></Bookkk>
        })}

    </section>
    </>     
    )
}

ReactDom.render(<Greeting />, document.getElementById('root'));