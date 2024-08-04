import './Card.css'
function Cart (props) {
    return (
        <div className='one'>
            <div className='two'>
                <span className={props.online?'mode online':'mode offline'}>{props.online?'ONLINE':'OFFLINE'}</span>
                <img src={props.profile} alt="It is a person image" height={100} width={100} className="image"/>
                <div className='basics'>
                    <h3>{props.name}</h3>
                    <h3>{props.city}</h3>
                    <h3>Age : {props.age}</h3>
                </div>
                <p className='discription'>{props.discription}</p>
                <div className="buttons">
                    <button className='button1'>Message</button>
                    <button className='button2'>Contact</button>
                </div>
                <div className="skills">
                        <ul>
                          {props.skills.map((skill,index) => {
                            return <li key={index}>{skill}</li>
                          }) }
                        </ul>
                </div>

            </div>
        </div>
          
    )
}
export default Cart;

<Card name="Kumar" 
city="Salem" 
age="23"
discription="Frontend Developer"
skills={["HTML","CSS","JAVA SCRIPT","REACT","NODE"]}
profile="person.jpg.jpg"
online={false}/>