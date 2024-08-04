import './DateTime.css'
import React,{useState,useEffect} from "react";
function DateTime(){
    const [timeNow,setTimeNow] = useState(new Date())
    useEffect(()=>{const timer = setInterval(()=>{setTimeNow(new Date())},1000);
       return () => clearInterval(timer);
       

    },[]
    
);
function formatedHour(hour){
    return hour === 0 ? 12 : hour>12 ? hour-12 : hour

};
function leadingZero(num){
   return num < 10 ? `0${num}` : num ;
};

const formatedDate = (date) => {
    const options = { weekday:"long",year:'numeric',month:'long',day:'numeric'}
    return date.toLocaleDateString(undefined,options)}
    return(<>
        <div className='box'>
            <div className="container">
                <h1>Digital Clock</h1>
                <div className="display_time">{leadingZero(formatedHour(timeNow.getHours()))} :{leadingZero(timeNow.getMinutes())} : {leadingZero(timeNow.getSeconds())}
                </div>
                <div className="display_date">{formatedDate(timeNow)}</div>
                
            </div>
        </div>
           </>)
}
export default DateTime;