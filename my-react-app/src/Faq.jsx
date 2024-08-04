import './Faq.css'
import React,{useState} from 'react'


function Faq () {
    const [show,setShow] = useState(false);

    function ToggleShow () {
        setShow(!show)
    }

    return(<div>
        <div className={`faq-items ${show ? 'active' :''}`}>
            <div className="faq-header" onClick={ToggleShow} >
                Sample question 1
            </div>
            <div className="faq-body">
                    <div className="faq-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore a aperiam voluptatibus architecto corporis quae recusandae beatae temporibus? Reiciendis, illo laborum quae corporis laudantium fugiat sint neque? Itaque, corporis perferendis.
                    </div>
                </div>
        </div>
    </div>)
}

export default Faq;