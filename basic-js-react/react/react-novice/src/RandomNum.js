import React from 'react';
import {useCountRenders} from './useCountRenders'

// export const RandomNum = React.memo(({onClick, n}) => {
export const RandomNum = React.memo(({increment, n}) => {
    useCountRenders() //log 'render' everytime RandomNum component re-rendered

    // return <button onClick={onClick}>{n}</button>
    return <button onClick={() => increment(n)}>{n}</button>
})