import './App.css';
import React, {useState, useLayoutEffect, useRef, useCallback, useMemo, useReducer} from 'react'
import {Hello} from './Hello'
import {RandomNum} from './RandomNum'
import {useFetch} from './useFetch'

const computeLongestWord = (arr) => {
  if (!arr) {
    return []
  }
  console.log('computing longest word');

  let longestWord = '';
  
  JSON.parse(arr).forEach(sentence => sentence.split(' ').forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }))

  return longestWord;
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state+1;
    case "decrement":
      return state-1;
    default:
      return state;
  }
}

function reducer2(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, {text: action.text, completed: false}],
        todoCount: state.todoCount + 1
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) => idx === action.idx ? {...t, completed: !t.completed} : t),
        todoCount: state.todoCount
    };
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const myNums = [1, 34,545];

  const {data} = useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json');

  // const computeLongestWord = useCallback((arr) => {
  //   if (!arr) {
  //     return []
  //   }
  //   console.log('computing longest word');
  
  //   let longestWord = '';
    
  //   JSON.parse(arr).forEach(sentence => sentence.split(' ').forEach(word => {
  //     if (word.length > longestWord.length) {
  //       longestWord = word;
  //     }
  //   }))
  
  //   return longestWord;
  // }, [])

  const longestWord = useMemo(()=> computeLongestWord(data), [data])

  const [count2, dispatch] = useReducer(reducer, 0);
  const [{todos, todoCount}, dispatchhh] = useReducer(reducer2, {todos: [], todoCount: 0});
  const [text, setText] = useState();

  const increment = useCallback((n)=> {
  //   setCount(count + 1)
  // }, [count, setCount]) //everytime count or setCount changed, the callback func in useCallback will recreated
  // setCount(c => c + 1)
  // }, [setCount]) //everytime setCount changed, the callback func in useCallback will recreated
  setCount(c => c + n)
  }, [setCount]) //everytime count or setCount changed, the callback func in useCallback will recreated


  return (
    <div>
      <Hello increment={increment} />
      <div>count: {count}</div>
      {myNums.map(n=> {
        // return <RandomNum onClick={()=> increment(n)} n={n} key={n}></RandomNum>
        return <RandomNum increment={increment} n={n} key={n}></RandomNum>
      })}
      <div>{longestWord}</div>

      <div> count2: {count2}</div>
      <button onClick={()=>dispatch({type: 'increment'})}>increment</button>
      <button onClick={()=>dispatch({type: 'decrement'})}>decrement</button>
      
      
      <form onSubmit= {e => {
        e.preventDefault()
        dispatchhh({type: 'add-todo', text}); // or  dispathhh({type: 'add-todo', payload: text});
        setText("");
      }} >
      <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      <div>number of todos: {todoCount}</div>
      {/* <pre>
        {JSON.stringify(todos, null, 2)}
      </pre> */}
      {
         //set key so that value won't be duplicate (u will get warnning if not set key for each element in list)
        todos.map((t, idx)=> <div onClick={()=> dispatchhh({type: 'toggle-todo', idx })} key={t.text} style={{textDecoration: t.completed ? 'line-through' : ""}}>{t.text}</div>)
      }
      
    </div>
  )
}

export default App;
