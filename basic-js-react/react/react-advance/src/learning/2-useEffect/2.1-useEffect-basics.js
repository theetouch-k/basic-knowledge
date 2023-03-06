import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // useEffect(()=> {
  //   console.log('call useEffect');
  //   if (value >= 1) {
  //     document.title = `New Messages(${value})`;
  //   }
  // })

  //or run everytime value(s) updated
  useEffect(()=> {
    console.log('call useEffect');
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value])

  //set useEffect for initial run you can set second argument to []
  useEffect(()=> {
    console.log('call useEffect');
    document.title = `Initial Run`;
  },[])
  
  console.log('log outside useEffect');
  return (
    <>
    <h1 id="eiei">{value}</h1>
    <button className="btn" onClick={() => setValue(value+1)}>
      change message
    </button>
    </>
  );
};

export default UseEffectBasics;
