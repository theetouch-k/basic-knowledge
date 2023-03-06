import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const  [show, setShow] = useState(false)

  return (
  <>
    <button className='btn' onClick={()=> setShow(!show)}>{show ? "hide" : "show"}</button>
    {show && <Item />}
  </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerHeight);
  const checkSize = () => {
    setSize(window.innerHeight);
  }

  useEffect(()=> {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  }, [])

  return (<div style={{ marginTop: '2rem'}}>
    <h1>window</h1>
    <h2>size : {size} px</h2>
  </div>
  
  );
}

export default ShowHide;
