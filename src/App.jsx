import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'

import {Link, Route} from 'wouter'
import FAQs from './pages/FAQs'
import Blog from './pages/Blog'
import SecondBlog from './pages/SecondBlog'
import Meme from './pages/Meme'
import ThirdBlog from './pages/ThirdBlog'
import FourthBlog from './pages/FourthBlog'
import FifthBlog from './pages/FifthBlog'


function App() {
	
	return (
		<>
			<NavBar/>
			<Route path='/' component={Home}/>
			<Route path='/blog' component={Blog}/>
			<Route path='/secondBlog' component={SecondBlog}/>
			<Route path='/thirdBlog' component={ThirdBlog}/>
			<Route path='/fourthBlog' component={FourthBlog}/>
			<Route path='/fifthBlog' component={FifthBlog}/>
			<Route path='/meme' component={Meme}/>
			<Route path='/faq' component={FAQs}/>
			<Footer/>
		</>
	)
}

export default App
