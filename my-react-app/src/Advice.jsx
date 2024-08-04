import './Advice.css';
import React,{useState,useEffect} from 'react';
function Advice () {
    const [advice,setAdvice] = useState('Please Click the below button to get Advice');
    const [count,setCount] = useState(0);

    async function getAdvice () {
        const data = await fetch("https://api.adviceslip.com/advice"); 
        const res = await data.json();
        setAdvice(res.slip.advice);
        setCount((c)=> c+1);

    }
    useEffect(()=> {
        getAdvice();
    },[]);

    return (
              <div className="first">
              <h2>{advice}</h2>
              <button onClick={getAdvice}>Get Advice</button>  
              <p>You get <b>{count}</b> pieces of Advice</p>  
            </div>)
}

export default Advice;