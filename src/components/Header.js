import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../starter-code/assets/shared/logo.svg"

export default function Header() {
  return (
    <>
    <header className='header'>
        <div>
         <Link to="/">
             <img src={logo} alt="Space Tourism" title="Space Toursim"/>
         </Link>
         </div>
         </header></>
  )
}
