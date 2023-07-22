import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber,decNumber } from './actions'

const App = () => {
  const myState= useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increament/Decreament</h1>

        <div className="quantity">
          <a href="#" className='quantity_minus' title='decreament' onClick={()=>dispatch(decNumber())}><span> - </span></a>
          <input type="text" name='quantity' className='quantity_input' value={myState}/>
          <a href="#"  className='quantity_plus' title='increament' onClick={()=>dispatch(incNumber())}> <span> + </span></a>
        </div>
      </div>
    </>

  )
}

export default App