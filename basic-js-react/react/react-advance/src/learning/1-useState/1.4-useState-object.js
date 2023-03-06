import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'person message',
  });
  console.log(person);

  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('message')

  const changeMessage = () => {
    // setPerson('hello world');
    // setPerson({message: 'hello world'})

    //use spread operator
    setPerson({...person, message: 'hello world'})
  }

  return (
  <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{person.message}</h3>
    <h3>{message}</h3>
    <button className="btn" onClick={() => setMessage('Change message')}>
      change message
    </button>
    <button className="btn" onClick={() => setMessage('Random message')}>
      random message
    </button>
  </>
  );
};

export default UseStateObject;