import React from 'react'
import { Link } from 'react-router-dom'
import "../BasciDetails/ProfileDetailsStyled.css";
const Finished = () => {
  return (
    <div className='submit-finis-form'>
        <h1>Thank You for submiting your details</h1>
        <Link to = "/"><button>Home</button></Link>
    </div>
  )
}

export default Finished