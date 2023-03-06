import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(()=> {
    console.log("hello world");
    //add eventlistener that call 'checksize' when 'resize' event occur
    window.addEventListener('resize', checkSize);
    return ()=> {
      console.log('cleanup');
      //this is very useful because we can use it to remove 
      //unnecessary behavior or prevent memory leaking issues.
      window.removeEventListener('resize', checkSize)
    }
  })

  // //actually this is fine :| BUT clean up function is very important
  // //when dealing with conditional disappearing and appearing
  // useEffect(()=> {
  //    console.log("hello world");
  //  window.addEventListener('resize', checkSize)
  // }, [])

  console.log(size);
  return (
    <>
      <h1>window</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
