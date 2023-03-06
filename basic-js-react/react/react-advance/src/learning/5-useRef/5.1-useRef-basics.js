import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render (make useRef different with useState)
// target DOM(Document object model) nodes/elements

const UseRefBasics = () => {
  //for this example we pass null as initial value
  const refContainer = useRef(null);

  const anotherContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer)
    console.log(refContainer.current);
    console.log(refContainer.current.value);

    console.log(anotherContainer);
    console.log(anotherContainer.current);
  }

  useEffect(() => {
    console.log(refContainer.current);
    //focus method is when u render the page your cursor will be on what you're focusing
    refContainer.current.focus();
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer}/>
          <button type='submit'>submit</button>
        </div>
      </form>
      <div ref={anotherContainer}>Hello world</div>
    </>
  );
};

export default UseRefBasics;
