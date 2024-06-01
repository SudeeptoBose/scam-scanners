import React from 'react'
import Meme from './Meme'
import { Link } from 'wouter'

const Home = () => {
    return (
        <>
        <div className='bg-[#efea69] p-10 w-full '>
            {/* Section 1 */}
            <div className='w-full h-screen'>
                <h1 className='text-left text-[calc(21.7691vw-3.82641px)] lg:text-[calc(8.45829vw-4.55018px)] 2xl:text-[200px] uppercase font-extrabold leading-none mb-6 md:mb-4 xl:mb-2 cursor-default text-dark'>FIND THE <br className='lg:hidden'/>  WORST <span className='text-red-600'> ACCOUNTING</span> <br className='lg:hidden 2xl:block'/> SCAMS
                </h1>
                <div className='text-2xl max-w-3xl mb-10 text-black !leading-[1.5] md:text-4xl 2xl:text-5xl 2xl:!leading-[1.3] md:pr-6 cursor-default xl:mb-8 2xl:max-w-5xls'>We have selected some of the worst accounting scams and memes in the history of mankind and compiled them in this website(for educational purposes). </div>
                <button className='border-black border-2  px-3 py-1 rounded-full'> Recent post</button>
            </div>
            {/* Section 2 */}
            <div className='w-screen h-screen'>
                <h1 className='text-3xl font-bold uppercase mb-10 text-center xl:text-4xl xl:mb-8'>OUR RECENT POST</h1>
                {/* Cards */}
                <div className='grid md:grid-cols-3 gap-4 w-full'>
                    <Link href='/blog' className='border-2 border-black rounded-md px-2 pt-2 pb-4 hover:bg-dark hover:text-orange'>
                    <a >
                        <img src='card1.jpg' className='rounded-md mb-2 w-full'/>
                        <h3 className='text-xs xl:text-sm'>May 30th, 2024</h3>
                        <p className='text-xl font-medium leading-none my-2 xl:text-2xl'>The Kraft-Heinz Scam Revealed: A Chronicle of Corporate Deceit</p>
                    </a>
                    </Link>
                    <a className='border-2 border-black rounded-md px-2 pt-2 pb-4 hover:bg-dark hover:text-orange'>
                        <img src='card2.jpg' className='rounded-md mb-2 w-full'/>
                        <h3 className='text-xs xl:text-sm'>May 31st, 2024</h3>
                        <p className='text-xl font-medium leading-none my-2 xl:text-2xl'>FTX: From Crypto Darling to Dumpster Fire (A Hilariously Tragic Tale)</p>
                    </a>
                    <a className='border-2 border-black rounded-md px-2 pt-2 pb-4 hover:bg-dark hover:text-orange'>
                        <img src='card3.jpg' className='rounded-md mb-2 w-full'/>
                        <h3 className='text-xs xl:text-sm'>May 31st, 2024</h3>
                        <p className='text-xl font-medium leading-none my-2 xl:text-2xl'>The PMC Bank Caper: A Hilarious Heist</p>
                    </a>
                </div>
            </div>
            {/* Section3 */}
            <div className='w-screen h-screen'>
                <h1 className='text-3xl font-bold uppercase mb-10 text-center xl:text-4xl xl:mb-8'>Whats a scam without memes?</h1></div>
                <Meme/>
            </div>
        </>
    )
}

export default Home