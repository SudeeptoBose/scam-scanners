import React from 'react'
import { Link } from 'wouter'

const ThirdBlog = () => {
  return(
    <div className='w-screen h-auto  bg-[#efea69]'>
        <div className='max-w-6xl mx-auto px-4 pt-8 pb-10'>
            <img src='pmc.jpg' className='rounded-md md:rounded-xl'/>
            <h1 className='text-[28px] leading-[30px] md:text-[36px] mt-4 mb-6 md:leading-[40px] font-bold text-dark'>The PMC Bank Caper: A Hilarious Heist</h1>
            <div className='flex gap-10'>
                <div className='p-2 border-2 border-black rounded-md w-full md:w-fit mb-6'>
                    <div className='max-w-5xl mx-auto mb-2'>
                        <div className='flex items-start flex-col'>
                            <h4 className='text-lg font-bold'>Imran Hossain</h4>
                            <p className='mt-0 text-dark text-sm'> MBA, Institute of Business Administration, DU.</p>
                        </div>
                    </div>
                    <div className='text-sm text-dark'>
                        <p>Published: June 1st, 2024. </p>
                        <p>Reading time: 4 minutes</p>
                    </div>
                </div>
                <div className='p-2 border-2 border-black rounded-md w-full md:w-fit mb-6'>
                    <div className='max-w-5xl mx-auto mb-2'>
                        <div className='flex items-start flex-col'>
                            <h4 className='text-lg font-bold'>Sadman Mahmud Faisal </h4>
                            <p className='mt-0 text-dark text-sm'> MBA, Institute of Business Administration, DU.</p>
                        </div>
                    </div>
                    <div className='text-sm text-dark'>
                        <p>Published: June 1st, 2024. </p>
                        <p>Reading time: 4 minutes</p>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <Link href='/blog'><button className='border-black border-2 px-3 py-1 rounded-full'>To Beginning</button></Link>
            </div>
            <p className='text-xl font-regular mb-6 leading-[1.8g]'> The PMC Bank Fraud of 2019, a story that would make even the most seasoned accountant want to switch to interpretive dance. Buckle up, for we're diving into a financial fiasco that involved shady loans, fictitious accounts by the bucket load, and a real estate developer who dodged repayments like Neo dodging bullets in the Matrix.
            </p>
            <div className='prose md:prose-lg xl:prose-xl w-full whitespace-break-spaces max-w-full text-dark marker:text-dark mb-6'>
                <h2 className='text-xl font-bold mb-6 leading-[1.8g]'>The Root of the Rotten Apple</h2>
                <p className='text-xl font-regular mb-6 leading-[1.8g]'>The Punjab and Maharashtra Cooperative (PMC) Bank was once a shining star among cooperative banks in India. But beneath the surface, a seedy drama was unfolding. Enter Housing Development and Infrastructure Limited (HDIL), a real estate company with ambitions that far outweighed its financial reality. The company, helmed by the flamboyant Wadhwan brothers (Rakesh and Sarang), was struggling to repay hefty loans.</p>

                <h2 className='text-xl font-bold mb-6 leading-[1.8g]'>A Match Made in Accounting Hell</h2>
                <p className='text-xl font-regular mb-6 leading-[1.8g]'>Here's where things get interesting – and incredibly suspicious. The Wadhwan brothers allegedly saw PMC Bank as their own personal piggy bank. They dangled the promise of lucrative returns in front of the bank's management, who, blinded by visions of sugar plums (or perhaps hefty bribes, nudge nudge wink wink), decided to play along.</p>


                <h2 className='text-xl font-bold mb-6 leading-[1.8g]'>The Money Maze: Unraveling the PMC Bank Scheme</h2>
                <p className='text-xl font-regular mb-6 leading-[1.8g]'>Imagine a bank heist, but instead of 
                    guns and masks, we have dodgy 
                    accounting software and a whole 
                    lot of creativity. Here's a simplified 
                    flowchart to illustrate the glorious 
                    mess:
                    HDIL Needed a Loan: Housing 
                    Development and Infrastructure
                    Limited, strapped for cash, 
                    approached PMC Bank for a loan. 
                    But their credit score resembled a 
                    deflated whoopie cushion – not exactly loan-worthy.
                    <br/><br/>
                    <img src='blog3-meme.png' className='rounded-md md:rounded-xl w-1/3'/>
                    <br/>
                    "No Can Do" Turned into "Can Do...Kinda": PMC Bank initially rejected the loan request due to HDIL's shaky finances. But then came the questionable twist...
                    Cooking the Books: Instead of following proper procedures, PMC Bank allegedly cooked the books. They created a bunch of fake accounts to hide HDIL's bad loans.
                    Fake Money In, Real Money Out: Money magically appeared in these fictitious accounts (think virtual Monopoly money), allowing PMC Bank to approve the loan. In reality, though, real money flowed out of the bank and straight to HDIL.
                    A House of Cards: Everyone involved pretended everything was peachy keen. But as with any house of cards, this scheme was bound to crumble.
                    The jig is Up: The Reserve Bank of India (RBI) eventually discovered the mess, leading to panic among depositors and the bank's eventual collapse.</p>

                <h2 className='text-xl font-bold mb-6 leading-[1.8g]'>The Numbers Game: A Staggering Sum of Shame</h2>
                <p className='text-xl font-regular mb-6 leading-[1.8g]'>This elaborate scheme wasn't exactly petty cash. We're talking about a whopping ₹6,500 crore (approximately $8.6 billion) that vanished into thin air, courtesy of fictitious accounts. ₹73% of PMC Bank's total loans were allegedly funneled towards the perpetually cash-strapped HDIL.</p>

                <h2 className='text-xl font-bold mb-6 leading-[1.8g]'>Settlement of the Scam: A Long and Winding Road</h2>
                <p className='text-xl font-regular mb-6 leading-[1.8g]'>The party came to a screeching halt in September 2019 when the Reserve Bank of India (RBI) exposed the whole kit and kaboodle. Depositors went into meltdown, the bank was put under restrictions, and fingers started pointing faster than in a game of musical chairs.
                <br/>
                <br/>
                Fast forward to today (May 2024), the saga continues. The Wadhwan brothers are facing legal battles, assets are being seized, and depositors are gradually getting some of their money back, albeit in a slow trickle. PMC Bank itself has been merged with Unity Small Finance Bank, a fresh start for a tarnished name</p>

                <h1 className='text-[28px] leading-[30px] md:text-[36px] mt-4 mb-6 md:leading-[40px] font-bold text-dark'>Links</h1>
                <div className='flex gap-5 flex-col'>
                    <a target='_blank' href='https://www.moneycontrol.com/news/business/markets/pmc-bank-crisis-the-inside-story-of-what-really-went-wrong-4610601.html'>1. "PMC Bank Crisis: The Inside Story of What Really Went Wrong" - [Link](https://www.moneycontrol.com/news/business/markets/pmc-bank-crisis-the-inside-story-of-what-really-went-wrong-4610601.html)</a>
                    <a target='_blank' href='https://www.rbi.org.in/Scripts/AnnualReportPublications.aspx?Id=1273'>2. "RBI Annual Report 2019-20" - [Link](https://www.rbi.org.in/Scripts/AnnualReportPublications.aspx?Id=1273)</a>
                    <a target='_blank' href='https://www.financialexpress.com/opinion/pmc-bank-fraud-a-case-of-regulatory-lapse/1743140/'>3. "PMC Bank Fraud: A Case of Regulatory Lapse?" - [Link](https://www.financialexpress.com/opinion/pmc-bank-fraud-a-case-of-regulatory-lapse/1743140/)</a>
                    <a target='_blank' href='https://www.thehindubusinessline.com/money-and-banking/hdils-debt-woes-and-the-pmc-bank-fiasco-explained/article29578635.ece'> 4. "HDIL's Debt Woes and the PMC Bank Fiasco Explained" - [Link](https://www.thehindubusinessline.com/money-and-banking/hdils-debt-woes-and-the-pmc-bank-fiasco-explained/article29578635.ece)</a>
                    <a target='_blank' href='https://www.thehindubusinessline.com/money-and-banking/understanding-the-pmc-bank-crisis/article29577102.ece'> 5. "Understanding the PMC Bank Crisis" - [Link](https://www.thehindubusinessline.com/money-and-banking/understanding-the-pmc-bank-crisis/article29577102.ece)</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdBlog