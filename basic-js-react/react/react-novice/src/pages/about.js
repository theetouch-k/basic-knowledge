import React, {useContext} from 'react';
import {UserContext} from '../UserContext'

export function About() {
    const {value ,user} = useContext(UserContext);

    return <div>
        <h2>About</h2>
        <div>{value}</div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
}