import React from 'react'
import { useContext } from 'react'
import { UserContaxt } from '../App'
const ChildC = () => {
    const user = useContext(UserContaxt);
  return (
    <div>
       <h1>final data {user.name}</h1> 
    </div>
  )
}

export default ChildC