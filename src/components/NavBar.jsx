import React from 'react'
import { Link, Route } from 'wouter'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Meme from '../pages/Meme'
import FAQs from '../pages/FAQs'
import SecondBlog from '../pages/SecondBlog'

const NavBar = () => {
	return (
		<>
			<ul className='grid grid-cols-5 min-h-10  justify-between text-lg text-center bg-[#efea69]'>
				<Link href='/'>
					{/* <img src='logo.png' className='p-2.5 w-[150px] border-2 border-black'/> */}
					<li className='p-2.5 border-2 border-black'>Scam Scanners</li>
				</Link>
				<Link href='/'>
					<li className='p-2.5 border-2 border-black'>About Us</li>
				</Link>
			
				<Link href='/blog'>
					<li className='p-2.5 border-2 border-black'>Blog</li>
				</Link>

				<Link href='/meme'>
					<li className='p-2.5 border-2 border-black'>Memes</li>
				</Link>	

				<Link href='/faq'>
					<li className='p-2.5 border-2 border-black'>FAQS</li>
				</Link>
			</ul>

		</>
	)
}

export default NavBar