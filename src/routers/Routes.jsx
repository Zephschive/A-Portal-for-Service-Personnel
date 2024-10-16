import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Login from '../pages/login'
import Signup from '../pages/signup'


const Woutes = () => {
  return(
    <Routes>
        <Route path="/" element={<Navigate to='login'/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
    </Routes>

  )
}

export default Woutes