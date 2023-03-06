import React, { useState } from 'react';
// in JS
// const input = document.getElementById('myText');
// const inputValue = input.value

// in React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    //Event.preventDefault() is
    //method tells the user agent that if the event does not get explicitly handled,
    //its default action should not be taken as it normally would be.
    e.preventDefault();

    // console.log('hello world');
    // console.log(firstName);
    // console.log(email);

    if (firstName && email) {
      console.log('submit the form');
      const person1= {firstName: firstName, email: email};
      //or if the name you want match the variable
      const person2 = {firstName, email};
      console.log(person1);
      console.log(person2);

      const person= {id: new Date().getTime().toString(), firstName: firstName, email: email};

      setPeople((people)=> {
        return [...people, person]
      })
      setFirstName('')
      setEmail('')
    }
    else {
      console.log('empty value');
    }

  }

  return (
    <>
      <article>
       {/* u may wonder in onSubmit should i use handleSubmit or handleSubmit().
       It's up to what u're call it the source is handleSubmit use handleSubmit, 
       if handleSubmit() use handleSubmit() */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstname" value={firstName} 
            onChange={(e)=> setFirstName(e.target.value)}></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="text" id="email" name="email" value={email} 
            onChange={(e)=> setEmail(e.target.value)}></input>
          </div>
          <button type="submit">add person</button>
        </form>
        {
          people.map((person)=> {
            const {id, firstName, email} = person
            return <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
