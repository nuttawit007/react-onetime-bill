import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const [route, setRoute] = useState("menu");
  return (
    <nav className='mb-4'>
      <div className='flex gap-2'>
        <Link to="/menu" className={`flex-1 py-4 ${route === "menu" ? "bg-secondary text-white" : ""}`} onClick={() => setRoute("menu")}>MenuList</Link>
        <Link to="/people" className={`flex-1 py-4 ${route === "people" ? "bg-secondary text-white" : ""}`} onClick={() => setRoute("people")}>PeopleList</Link>
      </div>
    </nav>
  )
}

export default Navbar