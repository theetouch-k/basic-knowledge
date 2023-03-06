import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  const [isError, setisError] = useState(false);

  return (
    <>
      <h1>firstValue : {firstValue}</h1>
      <h1>secondValue : {secondValue}</h1>
      <h1>{text || 'john cena'}</h1>
      <button className='btn' onClick={()=>setisError(!isError)}>toggle error now:{isError.toString()}</button>
      {isError && <h1>isError</h1>}
      {!isError && <h1>!isError</h1>}
     
      <p>example of ternary operator</p>
      {isError ? <p>there is an error...</p> : <></>}
    </>
    //why we don't use ifelse condition, because we can't use it inside that
    //because ifelse always return something

    //if-else statements don't work inside JSX. 
    //This is because JSX is just syntactic sugar for function calls and object construction.

    //but u can call a function from jsx and put all the if-else logic inside that
  );
};

export default ShortCircuit;
