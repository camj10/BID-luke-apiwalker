import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import user from '../assets/img/user.png'

const Menu = () => {

    const options=['vehicles','people','films','species'];
    const[iden,setIden]= useState(0);
    const[dat,setDat]=useState(options[0]);

    return (
            <div className='container'>
                <Form className='form-container' method="get" action={`/${dat}/${iden}`}>
                    <select className='select' value={dat} onChange={ e=> setDat(e.target.value)}>
                        {options.map((item,ind)=><option key={ind}>{item}</option>)}
                    </select>
                    <div className='input-container'>
                        <img src={user} height='40px'/>
                        <label>Id</label>
                        <input type="number" className='inputs' onChange={e=>setIden(e.target.value)}/>
                        <button type="submit" className='btn'>Search</button>
                    </div>
                </Form>
            </div>
    )
}

export default Menu