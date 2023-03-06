import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import {useCountRenders} from './useCountRenders'

//use React memo only when 'increment' changed
export const Hello = React.memo(({increment}) => {
    useCountRenders() //log 'render' everytime Hello component re-rendered

    return <div>
       <button onClick={() => increment(5)}>Hello</button>
    </div>
})