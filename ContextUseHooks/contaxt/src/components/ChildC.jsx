import React from 'react'
import { useContext } from 'react'
import { UserContaxt , ThemeContext } from '../App'
const ChildC = () => {
    const user = useContext(UserContaxt);
    const {Theme , setTheme} = useContext(ThemeContext)

    const handleClickButton = ()=>{
      if (Theme === 'light') {
        setTheme('dark')
      }else{
        setTheme('light');
      }
    }
  return (
    <div>
       <h1>final data {user.name}</h1> 
       <button className='button-sectin' onClick={handleClickButton}>
          Change Color
       </button>
    </div>
  )
}

export default ChildC