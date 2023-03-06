import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url);
    //fetch will return response as a Promise
    /**
    The Promise object represents the eventual completion (or failure) 
    of an asynchronous operation and its resulting value.
    
    A Promise is in one of these states:

    - pending: initial state, neither fulfilled nor rejected.
    - fulfilled: meaning that the operation was completed successfully.
    - rejected: meaning that the operation failed.

    const users = await response.json();
    */

    setUsers(users)
    //if you use that useEffect without set it 
    //it will set an infinite loop -> you browser will crash

    console.log(users);
  }

  useEffect(()=> {
    getUsers()
  }, []);

  return (
    <>
      <h3>Github users</h3>
      <ul className='users'>
      {users.map((user)=> {
        const {id, login, avatar_url, html_url} = user;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login}/>
            <div>
              <h4>{login}</h4>
              <a href={html_url}>profile</a>
            </div>
          </li>
        );
        })
      }
      </ul>
    </>
  );
};

export default UseEffectFetchData;
