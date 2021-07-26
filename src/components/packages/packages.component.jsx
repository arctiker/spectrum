import React, {useState} from 'react';
import { Button } from '../Button';

const PackageItem = ({title, Order2}) => {
  
    
    return (
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>{title} MB HIGH</h1>
                <Button onClick={Order2} className='button' >ORDER SERVICE</Button>
            </div>
        </div> 
    )
}

const Packages = () => {
    const i = [4,5,6,7,8,9]
    const [message, setMessage] = useState("Please Click")
    const [show, setShow] = useState(true)

    const Order = () => {
        console.log("clicked")
        setShow(!show)
     
    } 
return(
    <div className='homepage'>
        <div className='service'>
            {
                i.map( s =>
                <PackageItem title={s} Order2={Order}/>
                )
            }
        </div>
       { show === true ?
        <p>Click</p>
        :
        <p>Thank you</p>
       }
    </div>

);
}

export default Packages;