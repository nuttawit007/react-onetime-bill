import React from 'react'

function Navbar() {
  return (
    <>
      <div className='flex gap-2'>
        <div className='flex-1 bg-red-400 py-4'>
          People
        </div>
        <div  className='flex-1 bg-red-400 py-4'>
          Menu
        </div>
        <div  className='flex-1 bg-red-400 py-4'>
          Summary
        </div>
      </div>
    </>
  )
}

export default Navbar