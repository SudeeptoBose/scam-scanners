import React from 'react'
import { Link } from 'wouter'

const Footer = () => {
    return (
        <div className='bg-[#353535] text-[#efea69] w-full px-4 md:px-6 pt-10 xl:px-10'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
                <div className='flex flex-col justify-start md:justify-center h-full z-10'>
                    <h3 className='text-2xl font-bold mb-6 xl:text-3xl'>LINKS</h3>
                    <ul className='space-y-6 md:space-y-8 text-lg xl:text-xl'>
                        <Link href='/'>
                            <li>Home</li>
                        </Link>
                        <Link href='/'>
                            <li>About Us</li>
                        </Link>
                        <Link href='/blog'>
                            <li>Blog</li>
                        </Link>
                        <Link href='/meme'>
                            <li>Memes</li>
                        </Link>
                        <Link href='/faq'>
                            <li>FAQ</li>
                        </Link>
                    </ul>
                </div>
                <div className='order-1 lg:order-none col-span-2 lg:col-span-1 w-full font-extrabold leading-[0.8]'>
                    <img src='Capture.PNG'/>
                </div>
                <div className='flex flex-col justify-start lg:justify-center h-full text-right z-10'>
                    <h3 className='text-2xl font-bold mb-4 xl:text-3xl'>FOLLOW US</h3>
                    <div className='flex justify-end mb-4'>
                        <div className='w-10 h-10'>
                            <a rel="noreferrer" aria-label="LinkedIn" href="https://www.linkedin.com/in/fazle-rabbi-7a1005129/" target="_blank"><svg className="w-full h-full" viewBox="0 0 1080 1080"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(80.000000, 80.000000)" fill="currentColor"><path d="M230,292.727273 C264.643436,292.727273 292.727273,264.643436 292.727273,230 C292.727273,195.356564 264.643436,167.272727 230,167.272727 C195.356564,167.272727 167.272727,195.356564 167.272727,230 C167.272727,264.643436 195.356564,292.727273 230,292.727273 Z" fill-rule="nonzero"></path><path d="M167.272727,376.363636 C167.272727,353.268291 185.995564,334.545455 209.090909,334.545455 L250.909091,334.545455 C274.004436,334.545455 292.727273,353.267873 292.727273,376.363636 L292.727273,710.909091 C292.727273,734.005273 274.004436,752.727273 250.909091,752.727273 L209.090909,752.727273 C185.995564,752.727273 167.272727,734.005273 167.272727,710.909091 L167.272727,376.363636 Z" fill-rule="nonzero"></path><path d="M418.181818,752.727273 L460,752.727273 C483.096182,752.727273 501.818182,734.005273 501.818182,710.909091 L501.818182,522.727273 C501.818182,460 627.272727,418.181818 627.272727,501.818182 L627.272727,710.925818 C627.272727,734.022 645.994727,752.727273 669.090909,752.727273 L710.909091,752.727273 C734.005273,752.727273 752.727273,734.005273 752.727273,710.909091 L752.727273,460 C752.727273,376.363636 690,334.545455 606.363636,334.545455 C522.727273,334.545455 501.818182,397.272727 501.818182,397.272727 L501.818182,376.363636 C501.818182,353.267873 483.096182,334.545455 460,334.545455 L418.181818,334.545455 C395.085636,334.545455 376.363636,353.268291 376.363636,376.363636 L376.363636,710.909091 C376.363636,734.005273 395.085636,752.727273 418.181818,752.727273 Z" fill-rule="nonzero"></path><path d="M794.545455,5.68434189e-14 C863.834,5.68434189e-14 920,56.1680909 920,125.454545 L920,794.545455 C920,863.834 863.834,920 794.545455,920 L125.454545,920 C56.1680909,920 0,863.834 0,794.545455 L0,125.454545 C0,56.1680909 56.1680909,5.68434189e-14 125.454545,5.68434189e-14 L794.545455,5.68434189e-14 Z M794.545455,83.6363636 C817.641636,83.6363636 836.363636,102.3592 836.363636,125.454545 L836.363636,794.545455 C836.363636,817.641636 817.641636,836.363636 794.545455,836.363636 L125.454545,836.363636 C102.3592,836.363636 83.6363636,817.641636 83.6363636,794.545455 L83.6363636,125.454545 C83.6363636,102.3592 102.3592,83.6363636 125.454545,83.6363636 L794.545455,83.6363636 Z"></path></g></g></svg></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-xs '> <a target='_blank' href='https://www.linkedin.com/in/sudeepto-bose/' className='text-[#s444444]'> Developed By @SudeeptoBose</a></div>
            <div className='text-xs '> <a target='_blank' href='https://www.linkedin.com/in/fazle-rabbi-7a1005129/' className='text-[#s444444]'> Designed By @FazzleRabbiKoushik</a></div>
        </div>
    )
}

export default Footer