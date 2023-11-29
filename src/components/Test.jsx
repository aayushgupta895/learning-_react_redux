import React from 'react'
import { useSelector } from 'react-redux'

function Test() {
    const state = useSelector(state=>state.changeName)
  return (
    <div>
        <h3> the current state is : {state.length}</h3>
    </div>
  )
}

export default Test