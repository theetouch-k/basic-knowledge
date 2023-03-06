import React from 'react'

const Book = (props) => {
    console.log(props);
    const {img, title, author} = props

    const clickClick = () => {
        alert('hello world');
    }

    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
    }

    const authorInvoked = (author) => {
        console.log(author);
    }

    const mouseOverr = () => {
        console.log(title);
    }

    return (
        <article className="book" onMouseOver={()=> {
            mouseOverr(title)
            }}>
            <img src={img} alt=""/>
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button type='button' onClick={clickClick}> Hello </button>
            <button type='button' onClick={clickHandler}> Show event </button>
            {/*
            dont use just onClick={authorInvoked(author)} because it will invoked the function
            before we acctually click it, so we use this...
            */}
            <button type='button' onClick={() => authorInvoked(author)}> Show author </button>
        </article>
    )
}

export default Book
