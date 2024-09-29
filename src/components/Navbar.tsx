import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center h-14 items-center bg-red-500 text-white'>
      <ul className='flex gap-5'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Navbar