
import { useState } from "react";
import "./Counter.css"
import "../App.css";
function Counter() {
    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(1)
    const [classNameValue,setClassNameValue]= useState("")
    const subtractHandler=()=>{
        setCounterValue(counterValue-inputValue)
    }
    const addHandler=()=>{
        setCounterValue(parseInt(counterValue)+parseInt(inputValue))
    }
    return (
        <div >
            <h3 data-testid="header">My Counter</h3>
            <h2 className={`${counterValue >=100 ? "green" :""}${counterValue<=-100? "red":""}`} data-testid="counter">{counterValue}</h2>
            <button data-testid="subtract-btn" onClick={subtractHandler}>-</button>
            <input 
            data-testid="input" 
            type="number" 
            value={inputValue} 
            className="text-center"
            onChange={
                (e)=>{
                    setInputValue(parseInt(e.target.value))
                }
            }
            />
            <button data-testid="add-btn" onClick={addHandler} >+</button>
        </div>
    );
}

export default Counter;
