import React, { useState } from 'react';
//remember that useState is 'a function' so when import u have to use {}

const UseStateBasics = () => {
  // if u console.log(useState()); it will return an array
  console.log(useState());
  //u will get : [undefined, ƒ]
  console.log(useState('hello world'));
  // u will get : ['hello world', ƒ]

  /**
   * U can see that the first param is default value for that useState
   * and the second param is a function that control the first param value of the useState
   */

  //now we create const for default paramerter and function parameter of the useState
  const [text, setText] = useState('random title')
  console.log(text);
  console.log(setText);

  const handleClick = () => {
    //setText('hello world')
    //so when we all handleClick it will involve in the useState

    //if we want to make text change betwee 2 words
    if (text === 'random title') {
      setText('hello world');
    }
    else {
      setText('random title');
    }
  }

  return (
  <React.Fragment>
  <h1>{text}</h1>
  <h2>useState basic example</h2>
  <button className='btn' onClick={handleClick}>
    change title
  </button>
  </React.Fragment>
  );
};

//and REMEMBER to involve useState inside callback function of Component only.

export default UseStateBasics;
