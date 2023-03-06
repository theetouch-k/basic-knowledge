import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0);
  }
  const complexIncrease = () => {
    setTimeout(()=> {
      // setValue(value+1);
      //why u click complexIncrease repeatly it change value only one time
      //because if you start from 0 and repeatly click it, it still see 'value' == 0
      
      //u can use callback function with one parameter in useState's function\
      //the parameter that will be automatically pass in is previous value of the useState
      setValue((prevState) => {
        console.log(prevState);
        return prevState + 1;
      })
    }, 1000)
  }

  return (
    <>
      <section styler={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value-1)}>decrease</button>
        <button className='btn' onClick={reset}>reset</button>
        <button className='btn' onClick={complexIncrease}>increase later</button>
      </section>
    </>
  );
};

export default UseStateCounter;
