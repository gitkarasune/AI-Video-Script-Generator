import React from 'react'
import Logo from "./Logo"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font px-[100px]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <div><Link to="/about" className="mr-5 hover:text-gray-900 cursor-pointer">About</Link></div>
            <div><Link to="/content" className="mr-5 hover:text-gray-900 cursor-pointer">Content</Link></div>
            <div><Link to="/product" className="mr-5 hover:text-gray-900 cursor-pointer">Product</Link></div>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar