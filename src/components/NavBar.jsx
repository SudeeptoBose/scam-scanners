import React from 'react'
import { Link, Route } from 'wouter'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Meme from '../pages/Meme'
import FAQs from '../pages/FAQs'

const NavBar = () => {
	return (
		<>
			<ul className='grid grid-cols-5 min-h-10 w-screen justify-between text-lg text-center bg-[#efea69]'>
				<Link href='/home'>
					<li className='p-2.5 border-2 border-black'>Scam Scanners</li>
				</Link>
				<li className='p-2.5 border-2 border-black'>About Us</li>

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
			<Route path='/home' component={Home}/>
			<Route path='/blog' component={Blog}/>
			<Route path='/meme' component={Meme}/>
			<Route path='/faq' component={FAQs}/>
		</>
	)
}

export default NavBar