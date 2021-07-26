import { React } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increNumber } from "../action"
import { decreNumber } from "../action"

import "./App.css"
const App = () => {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div className="main">
      <h1>INCREMENT/DECREMENT COUNTER </h1>
      <h4>Using React and Redux..</h4>
      <div className="container">
        <button className="quantitiy-minus" title="Decrement" onClick={() => dispatch(decreNumber())}><span>-</span></button>
        <input name="quantity" value={myState} type="text" className="quantity-input" />
        <button className="quantitiy-plus" title="Increment" onClick={() => dispatch(increNumber())} ><span>+</span></button>
      </div>
    </div>
  )
}
export default App;
