import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Forms from './components/Forms'
import './App.css'
import data from './data'
import manageArr from './manageReducer'
import { removeName } from './actions/changeName'
import { useDispatch, useSelector } from 'react-redux'
import ReduxForm from './components/ReduxForm'
import Test from './components/Test'


function App() {
  
  // const [state, dispatch] = useReducer(manageArr, data)
  const state = useSelector((state) => state.changeName);
  const dispatch = useDispatch();
  return (
    <>
      <h1>This is my first vite project</h1>
      <h2>And i am Aayush</h2>
      <h3>why is everything is on the center.. ahhh... whatever</h3>
      {/* <Forms dispatch={dispatch}/> */}
      <ReduxForm/>
      {
        state.map((item)=>{
          return <>
            <p key={item.id}>{item.name}</p>
            <button onClick={()=> dispatch(removeName(item))}>remove</button>
          </>
        })
      }
      <Test/>
    </>
  )
}

export default App
