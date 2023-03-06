import React, {useContext, useState} from 'react';
import {UserContext} from '../UserContext'
import {login} from  '../utils/login'

export function Index() {
    const {value, setValue, user, setUser} = useContext(UserContext);
    
    const [text, setText] = useState("")

    return <div>
        <h2>Home</h2>
        <div>{value}</div>
        <form onSubmit= {e => {
        e.preventDefault();
        setText("");
        }} >
        <input value={text} onChange={e => setText(e.target.value)}/>
        <button onClick={()=> setValue(text)}>cahnge value</button>
        </form>

        <pre>{JSON.stringify(user, null, 2)}</pre>
        {user ? 
        <button onClick={() => setUser(null)}>logout</button> :
        <button onClick={
            async () => {
                const user = await login();
                setUser(user)
            }
        }>login</button>}
    </div>
}