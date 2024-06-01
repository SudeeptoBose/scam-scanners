import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'


function App() {
	
	return (
		<>
			<NavBar/>
				<Home/>
			<Footer/>
		</>
	)
}

export default App
