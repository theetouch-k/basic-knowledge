import React, {useState, useMemo} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Index} from './pages';
import {About} from './pages/about';
import {UserContext} from './UserContext'

export default function AppRouter() {
    const [value, setValue] = useState('hello from connnnn')
    const [user, setUser] = useState(null)

    const providerValue = useMemo(()=> ({value, setValue, user, setUser}), [value, setValue, user, setUser])

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        {/* <UserContext.Provider value={{value, setValue}}>  */}
        <UserContext.Provider value={providerValue}> 

            <Routes>

                <Route path="/" exact element={<Index/>} />
                <Route path="/about/" element={<About/>} />
            </Routes>
        </UserContext.Provider>
        </Router>
    );
}  