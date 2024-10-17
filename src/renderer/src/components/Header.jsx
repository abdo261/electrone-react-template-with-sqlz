import React from 'react'
import ToogleTheme from './ToogleTheme'
import ToogleSideBar from './ToogleSideBar'

const Header = () => {
  return (
    <header className='w-full border-b border-b-gray-300'>
      <ToogleSideBar/>
      <ToogleTheme/>
    </header>
  )
}

export default Header