import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

//state is state before the update and action is what we're trying to do
//and we call this function using dispatch, similar to useState
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    return {...state, people: newPeople,
      isModalOpen:true, modalContent:"item added!"}
  }
  if (action.type === 'NO_VALUE') {
    return {...state, isModalOpen:true, modalContent:"empty value"}
  }
  if (action.type === 'CLOSE_MODAL') {
    return {...state, isModalOpen:false}
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person)=> 
      person.id != action.payload);
    return {...state, people: newPeople,
      isModalOpen:true, modalContent:"Removed!"}
  }
  throw new Error('no matching action type')
}

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: ''
}



const Index = () => {
  const [name, setName] = useState('')
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);

  //reducer is a function to change state behavior
  //defaultState is default behavior of the state
  const [state, dispath] = useReducer(reducer, defaultState)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // setShowModal(true);
      // setPeople([...people, {id: new Date().getTime().toString(), name}]);
      // setName('');

      const newItem = {id: new Date().getTime().toString(), name}
      //in dispath we can pass in any value for this example we use 'type' for reference
      //our action
      //and we use 'payload' to pass in our value
      //then it will call reduce function to do the action
      dispath({type:'ADD_ITEM', payload:newItem}); //good practice to use upper case in type
      setName('');  
    }
    else {
      // setShowModal(true);

      dispath({type:'NO_VALUE'});
    }
  }

  const closeModal = () => {
    dispath({type:'CLOSE_MODAL'})
  }

  return (
    <>
    {/** showModal && <Modal /> */}

    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}

    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" value={name} onChange={(e)=> {setName(e.target.value)}}/>
      </div>
    <button type="submit">add person</button>
    </form>

    {/** people.map((person)=> {
      return <div key={person.id}>
        <h4>{person.name}</h4>
      </div> 
    }) */}

    {state.people.map((person)=> {
      return <div key={person.id} className="item">
        <h4>{person.name}</h4>
        <button onClick={()=>dispath({type:"REMOVE_ITEM", payload:person.id})}>Remove</button>
      </div> 
    })}
    </>
  );
};

export default Index;
