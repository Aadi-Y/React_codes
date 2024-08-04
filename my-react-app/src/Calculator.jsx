import './Calculator.css'
import React,{useState} from 'react'
function Calculator() {
    const [value,setValue] = useState("");
    return(<>
    <div className="container">
    <h1>Calculator</h1>
    <div className='box'>
        <div className="calculator">
          <div className="display">
              <input type="text"  className='input_display' value={value}/>
          </div>
          <div>
              <input className='all_clear' type='button' value='AC'onClick={()=>setValue("")}/>
              <input className='delete' type='button'
              value='DE'onClick={(e)=>setValue(value.slice(0,-1))}/>
          </div>
          <input type="text" />
          <div>
            <input type='button' value='7' onClick={(e)=>setValue(value + e.target.value)}/>
            <input type='button' value='8'  onClick={(e)=>setValue(value + e.target.value)}/>
            <input type='button' value='9'  onClick={(e)=>setValue(value + e.target.value)}/>
            <input type='button' value='+'onClick={(e)=>setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type='button' value='4'  onClick={(e)=>setValue(value + e.target.value)}/>
            <input type='button' value='5'  onClick={(e)=>setValue(value + e.target.value)}/>
            <input type='button' value='6'  onClick={(e)=>setValue(value + e.target.value)}/>
            <input type='button' value='-'/>
          </div>
          <div>
            <input type='button' value='1'  onClick={(e)=>setValue(value + e.target.value)}/>
            <input type='button' value='2'  onClick={(e)=>setValue(value + e.target.value)}/>
            <input type='button' value='3'  onClick={(e)=>setValue(value + e.target.value)}/>
            <input type='button' value='*'  onClick={(e)=>setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type='button' value='0'  onClick={(e)=>setValue(value + e.target.value)}/>
            <input type='button' value='.'  onClick={(e)=>setValue(value + e.target.value)}/>
            <input type='button' value='='onClick={()=>setValue(eval(value))}/>
            <input type='button' value='/'  onClick={(e)=>setValue(value + e.target.value)}/>
          </div>
        </div>
      </div>
    </div>
           </>)
}
export default Calculator