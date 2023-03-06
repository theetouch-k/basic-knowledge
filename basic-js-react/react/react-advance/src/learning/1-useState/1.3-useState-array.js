import React from 'react';
import { data } from '../../data';

const UseStateArray = () => {
  //we pass 'data' array to be default value
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    //filter out the array
    let newPeople = people.filter((people)=> people.id != id)
    setPeople(newPeople)
    console.log("Remove successful");
  }

  return (
    <>
    {
      //iterate through people
      people.map((person) => {
        console.log(person.name);
        const {id, name} = person;
        return (
          <div key={id} className='item'>
            <h4> {name} </h4>
            <button className="btn" onClick={()=> removeItem(id)}>
              remove
            </button>
          </div>   
        );
      })
    }

    <button className="btn" onClick={() => setPeople([])}>
      clear items
    </button>

    </>
  );
};

export default UseStateArray;