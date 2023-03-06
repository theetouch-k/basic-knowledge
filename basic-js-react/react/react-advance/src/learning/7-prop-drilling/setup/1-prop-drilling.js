import React, { useState } from 'react';
import { data } from '../../../data';

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people)=> {
      return people.filter((person)=> person.id !== id)
    })
  }
  return (
    <>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson}/>
    </>
  );
};

const List = ({people, removePerson}) => {
  return (
    <>
     {people.map((person) => {
       // we pass each person data and removePerson function to SinglePerson
       //and where removePerson come from? -> it come form List that also passed removePerson function
       return <SinglePerson key={person.id} {...person} removePerson={removePerson}/>
     })}
    </>
  );
};

const SinglePerson = ({id, name, removePerson}) => {
  return <div className="item">
    <h4>{name}</h4>
    <button onClick={()=> removePerson(id)} >Remove</button>
  </div>
}

export default PropDrilling;
//prop drilling is bad when it come to many components heirachy
//because like if u want to use that removePerson that invoke setPeople useState
//you have to pass it down the hierachy tree which is hard to control it's correctness
//so how to fix?
//we use useContext API or redux instead
