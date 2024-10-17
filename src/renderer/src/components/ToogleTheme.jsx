import React, { useEffect, useState } from 'react'

const ToogleTheme = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark') ? JSON.parse(localStorage.getItem('isDark')) : false)
  const ToggleThem = () => {
    setIsDark(!isDark)
  }
  useEffect(() => {
   if (isDark){
    
    document.body.classList.add('dark')
   }
  else{
    document.body.classList.remove('dark')
   }
   localStorage.setItem('isDark' ,isDark)
  }, [isDark])
  console.log(isDark)
  return <button onClick={ToggleThem}>ToogleTheme</button>
}

export default ToogleTheme
