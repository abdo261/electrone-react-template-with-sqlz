import React from 'react'
import SideBare from '../components/SideBare'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div
      className=" min-w-screen min-h-screen  text-slate-900
     dark:text-slate-200 bg-gray-100 dark:bg-slate-900 overflow-y-auto overflow-hidden 
    relative grid grid-cols-1 md:grid-cols-[auto_1fr]"
    >
      <SideBare />
      <main className="h-screen flex flex-col items-center ">
        <Header />
        <section className="w-full flex-1 ">
          <Outlet/>
        </section>
      </main>
    </div>
  )
}

export default Layout
