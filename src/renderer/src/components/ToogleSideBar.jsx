import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appActions } from '../redux/slice/app'

const ToogleSideBar = () => {
    const dispatch= useDispatch()
    const {isSideBarActive} =useSelector(state=>state.app)
    const toggleActive = ()=>dispatch(appActions.setSidBareActive(!isSideBarActive))
  return (
    <button onClick={toggleActive}>ToogleSideBar</button>
  )
}

export default ToogleSideBar