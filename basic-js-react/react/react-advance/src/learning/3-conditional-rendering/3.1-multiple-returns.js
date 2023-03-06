import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');
  

  useEffect(()=>{
    fetch(url)
      .then((resp)=> {
        console.log(resp); //will return full https request
        //console.log(resp.json()); //will return Promise, why u comment this? because it will create a Promise
        //and it will stuck at resolving state
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        }
        else {
          setLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      //next is data inside the request body
      .then((user)=> {
        console.log(user);
        const {login} = user;
        setUser(login);
        setLoading(false);
      })
      .catch(error => {
        console.log(error)
        setIsError(true)
      });
  }, [])

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    )
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
};

export default MultipleReturns;
