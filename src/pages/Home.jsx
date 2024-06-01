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
                <div className='text-2xl max-w-7xl mb-10 text-black !leading-[1.5] md:text-4xl 2xl:text-5xl 2xl:!leading-[1.3] md:pr-6 cursor-default xl:mb-8 2xl:max-w-5xls'>We have selected some of the worst accounting scams and memes in the history of mankind and compiled them in this website(for educational purposes). </div>
            </div>
            {/* <div className='bg-black sticky w-[2000px] p-0 z-10 top-14 h-14 text-white flex items-center text-2xl font-bold xl:h-16 xl:text-4xl'>OUR WORK</div> */}
            {/* Section 2 */}
                <div className='w-full h-auto'>
                    <h1 className='text-3xl font-bold uppercase mb-10 text-center xl:text-4xl xl:mb-8'>OUR RECENT POST</h1>
                    {/* Cards */}
                    <div className='grid md:grid-cols-3 gap-4 w-full'>
                        <Link href='/blog' className='border-2 border-black rounded-md px-2 pt-2 pb-4 hover:bg-dark hover:text-orange'>
                        <a >
                            <img src='card1.png' className='rounded-md mb-2 w-full'/>
                            <h3 className='text-xs xl:text-sm'>May 30th, 2024</h3>
                            <p className='text-xl font-medium leading-none my-2 xl:text-2xl'>The Kraft-Heinz Scam Revealed: A Chronicle of Corporate Deceit</p>
                        </a>
                        </Link>
                        <Link href='/secondBlog' className='border-2 border-black rounded-md px-2 pt-2 pb-4 hover:bg-dark hover:text-orange'>
                        <a >
                            <img src='card2.png' className='rounded-md mb-2 w-full'/>
                            <h3 className='text-xs xl:text-sm'>May 31st, 2024</h3>
                            <p className='text-xl font-medium leading-none my-2 xl:text-2xl'>FTX: From Crypto Darling to Dumpster Fire (A Hilariously Tragic Tale)</p>
                        </a>
                        </Link>
                        <Link href='/thirdBlog' className='border-2 border-black rounded-md px-2 pt-2 pb-4 hover:bg-dark hover:text-orange'>
                        <a>
                            <img src='card3.png' className='rounded-md mb-2 w-full'/>
                            <h3 className='text-xs xl:text-sm'>May 31st, 2024</h3>
                            <p className='text-xl font-medium leading-none my-2 xl:text-2xl'>The PMC Bank Caper: A Hilarious Heist</p>
                        </a>
                        </Link>
                        <Link href='/fourthBlog' className='border-2 border-black rounded-md px-2 pt-2 pb-4 hover:bg-dark hover:text-orange'>
                        <a>
                            <img src='card4.png' className='rounded-md mb-2 w-full'/>
                            <h3 className='text-xs xl:text-sm'>May 30st, 2024</h3>
                            <p className='text-xl font-medium leading-none my-2 xl:text-2xl'>The Theranos Fraud: A Comprehensive Accounting Scandal Report</p>
                        </a>
                        </Link>
                        <Link href='/fifthBlog' className='border-2 border-black rounded-md px-2 pt-2 pb-4 hover:bg-dark hover:text-orange'>
                        <a>
                            <img src='card5.png' className='rounded-md mb-2 w-full'/>
                            <h3 className='text-xs xl:text-sm'>May 30st, 2024</h3>
                            <p className='text-xl font-medium leading-none my-2 xl:text-2xl'>The Hallmark Group Scandal: A Financial Farce of Epic Proportions</p>
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home