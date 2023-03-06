import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setName] = useState('default name')
  const {personID} = useParams();

  useEffect(()=> {
    const newPerson = data.find((person)=> person.id === parseInt(personID));
    setName(newPerson.name)
  })
  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people' className='btn'>
        Back to people
      </Link>
    </div>
  );
};

export default Person;
