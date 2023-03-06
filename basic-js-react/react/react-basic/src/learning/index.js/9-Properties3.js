import React from 'react'
import ReactDom from 'react-dom'

import './index.css';

const books = [
    {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/51j9X7L-BTL.jpg',
        title: "A Cat's Life",
        author: 'Mommy Cat'
    },
    {   
        id: 2,
        img: "data:image/jpeg;base64,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",
        title: "Cat in a suit",
        author: 'Meetang'
    }
]

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
        {/* iterate over books using map() */}
        {books.map((book) => {
            /* U can't simply return book like
                return book
            because Error: Objects are not valid as a React child (found: object with keys {img, title, author}). 
            If you meant to render a collection of children, use an array instead.
            And also this
                return <Book book={book}></Book>
            because it will return Book object with property book inside it, not a Book.
            and it will Warning: Each child in a list should have a unique "key" prop.
            what we have is just value

            so u should use something like
                return <Book key={book.id} book={book}></Book>
            
            but recommend to use below return since we don't have to use props.book to get
            value of img, title and author
            {...book} mean split out all properties that we have in book
            */
            return <Book key={book.id} {...book}></Book>
            
            
        })}

        {/* or u can use (but not recommend bc it's unique value will always change
         when u add something to the list)

        {books.map((book, index) => {
            return <Book key={index} {...book}></Book>
        })}

        */}
    </section>
    </>     
    )
}

const Book = (props) => {
    console.log(props);
    const {img, title, author} = props
//or
//const Book = ({img, title, author}) => {
    return (
        <article className="book">
            <img src={img} alt=""/>
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    )
}

ReactDom.render(<Greeting />, document.getElementById('root'));