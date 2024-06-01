import React from 'react'

const NavBar = () => {
	return (
		<>
			<ul className='grid grid-cols-5 min-h-10 w-screen justify-between text-lg text-center bg-[#efea69]'>
				<li className='p-2.5 border-2 border-black'>Scam Scanners</li>
				<li className='p-2.5 border-2 border-black'>About Us</li>
				<li className='p-2.5 border-2 border-black'>Blog</li>
				<li className='p-2.5 border-2 border-black'>Memes</li>
				<li className='p-2.5 border-2 border-black'>FAQ</li>
			</ul>
		
		</>
	)
}

export default NavBar