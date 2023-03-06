import React, { useState, useContext } from 'react';
import { data } from '../../../data';

//create context to fix the propdrilling
const PersonContext = React.createContext();
//context is contains Provider and Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    //you can set the Provider value by pass it in value as an object like this {{}}
    //why double bracket? {} for one value and another {} inside it is a list so we pass in
    //a list of objects
    <>
    <PersonContext.Provider value={{removePerson, people}}>
      <h3>avoid prop drilling using useContext</h3>
      <List people={people} removePerson={removePerson} />
    </PersonContext.Provider>
    </>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, }) => {
  //then we can call it like this
  const {removePerson, people} = useContext(PersonContext);
  console.log(people);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
