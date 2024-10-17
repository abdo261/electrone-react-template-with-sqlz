import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { linksNavigation } from '../utils/utils'
import { useSelector } from 'react-redux'

const SideBare = () => {
  const { isSideBarActive } = useSelector((state) => state.app)
  return (
    <aside className="fixed md:static flex flex-col items-center gap-10 p-2 justify-between left-0 top-0 w-fit h-screen  bg-gray-50 dark:bg-slate-900  border-r-[1px] border-r-gray-300 ">
      <div className="w-full flex items-center justify-center">
        <div className="avatar">
          <div className="w-12 rounded-xl">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
      <div className="w-full  flex-1 flex flex-col justify-between items-center font-semibold">
        <div className="flex-1 w-full flex flex-col items-stretch gap-2">
          {linksNavigation.map((l) => (
            <NavLink
              to={l.href}
              className={`block ${!isSideBarActive && 'md:tooltip  md:tooltip-right'}`}
              data-tip={!isSideBarActive && l.label}
              key={l.id}
            >
              <div
                className={`flex items-center gap-1 w-full rounded-xl p-2  hover:bg-slate-300 hover:border-slate-400  
               bg-slate-100 border border-slate-300 dark:bg-gray-800
                dark:text-slate-100 dark:hover:bg-slate-700 hover:dark:border-slate-400
                 dark:hover:border-gray-700 ${!isSideBarActive ? 'justify-center' : ''}`}
              >
                {React.createElement(l.icon, { size: 25 })}
                <span key={l.id} className={!isSideBarActive ? 'hidden' : ''}>
                  {l.label}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
        <div>logout</div>
      </div>
    </aside>
  )
}

export default SideBare
