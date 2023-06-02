import React from 'react'
import './navbar.css'
export default function Navbar(){
    return (
        <div>
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-screen h-screen">
            <div className="mb-0">
    <a  href='/' className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Birthday Reminder</a>
        </div>
  <div className='mt-6 sm:mt-0'>
    <a href='/' className="text-lg no-underline text-grey-darkest hover:bg-orange-300 p-4">Karyakar</a>
    <a href='/'  className="text-lg no-underline text-grey-darkest hover:bg-orange-300 p-4">Balko</a>
  </div>
</nav>
        </div>
    );
}
