import React from 'react'

const Blog = () => {
  return (
    <div className='w-screen h-auto  bg-[#efea69]'>
        <div className='max-w-6xl mx-auto px-4 pt-8 pb-10'>
            <img src='kraft.png' className='rounded-md md:rounded-xl'/>
            <h1 className='text-[28px] leading-[30px] md:text-[36px] mt-4 mb-6 md:leading-[40px] font-bold text-dark'>The Kraft-Heinz Scam Revealed: A Chronicle of Corporate Deceit</h1>
            <div className='flex gap-10'>
                <div className='p-2 border-2 border-black rounded-md w-full md:w-fit mb-6'>
                    <div className='max-w-5xl mx-auto mb-2'>
                        <div className='flex items-center'>
                            <h4 className='text-lg font-bold'> Abi Rawan Arko</h4>
                            <p className='mt-0 text-dark text-sm'> MBA, Institute of Business Administration, DU.</p>
                        </div>
                    </div>
                    <div className='text-sm text-dark'>
                        <p>Published: May 30th, 2024. </p>
                        <p>Reading time: 5 minutes</p>
                    </div>
                </div>
                <div className='p-2 border-2 border-black rounded-md w-full md:w-fit mb-6'>
                    <div className='max-w-5xl mx-auto mb-2'>
                        <div className='flex items-center'>
                            <h4 className='text-lg font-bold'> Fazle Rabbi </h4>
                            <p className='mt-0 text-dark text-sm'> MBA, Institute of Business Administration, DU.</p>
                        </div>
                    </div>
                    <div className='text-sm text-dark'>
                        <p>Published: May 30th, 2024. </p>
                        <p>Reading time: 5 minutes</p>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <button className='border-black border-2 px-3 py-1 rounded-full'> View Next Story</button>
            </div>
            <p className='text-xl font-regular mb-6 leading-[1.8g]'> A clear reminder of the dangers that exist in the corporate world, where greed may lead to dishonesty and profit can take precedence above ethics, is the Kraft-Heinz incident. The Kraft-Heinz scam is the subject of this blog, which will go into detail about the scam's background, methods, and its place in corporate history.</p>
            <div className='prose md:prose-lg xl:prose-xl w-full whitespace-break-spaces max-w-full text-dark marker:text-dark mb-6'>
                <h2 className='text-xl font-bold mb-6 leading-[1.8g]'>Reasons Behind the Fraud</h2>
                <p className='text-xl font-regular mb-6 leading-[1.8g]'>Promising synergies and increased profitability, the 2015 merger of Kraft Foods Group and H.J. Heinz Company was widely seen as a union of two industry giants. But a darker truth existed beyond the surface of corporate synergy. The constant pressure on CEO's to satisfy shareholders and achieve ambitious financial goals is the root cause of the scam. Fraudulent actions flourished as a result of the confluence of these factors and the competitive natureof the market.<br/>A complicated web of competing priorities entangled Kraft-Heinz's executives, who frequently put short-term profits ahead of long-term sustainability and openness. The stage was prepared for a series of misleading tactics to manipulate financial measures and hide the company's real financial health when these variables came together. In order to boost reported earnings and satisfy investors, executives engaged in questionable accounting methods, which were conveniently covered by the merger.</p>
                <h2 className='text-xl font-bold mb-6 leading-[1.8g]'>Deception in Details</h2>
                <p className='text-xl font-regular mb-6 leading-[1.8g]'>
                Incorrect Expense Recognition.
                <br/><br/>
                In order to hide the real financial health of the company and artificially 
                inflate earnings, executives engaged in a series of accounting techniques. 
                The reported earnings were inflated by deferring or misrepresenting certain 
                costs (Heller, 2021).  The extent of the deceit committed by officials at 
                Kraft-Heinz was brought to light by the revelations made public by the Securities 
                and Exchange Commission (SEC), which showed that the company had
                exaggerated its earnings by almost $270 million.
                <br/> <br/>
                Claw-back Transactions and Price Phasing
                Kraft-Heinz sought out misleading agreement terms from vendors. In exchange 
                for a favorable offering from KHC, one of their suppliers paid $3.5 million up 
                advance. While KHC claimed that the upfront payment was based on current 
                or previous years' transactions, the SEC examination found that these 
                measures led to suppliers receiving advantageous contracts for future years 
                with increasing prices (Wall Street Millennial, 2021)</p>
                <h2 className='text-xl font-bold mb-6 leading-[1.8g]'>The Aftermath</h2>
                <p className='text-xl font-regular mb-6 leading-[1.8g]'>
                Kraft-Heinz was forced to face regulatory 
                authorities following the affair.
                Kraft-Heinz has settled allegations of 
                accounting fraud for $62 million, 
                according to a news release from the SEC. 
                One of the biggest fines ever 
                levied against a corporation for financial 
                misbehavior was this settlement 
                (Hirsch, 2021). Kraft-Heinz was ordered to do more than just pay a fine; 
                it had to put strict internal controls and compliance procedures in place and 
                stop breaking securities rules altogether.
                Chief Operating Officer Eduardo Pelleissonei consented to pay $300,000
                in civil penalties, $14,211.31 in disgorgement and prejudgment interest, and 
                an end to any further infractions. In a final judgment, Chief Procurement 
                Officer Klaus Hofmann agreed to a five-year prohibition on serving as an 
                officer or director of a public company, a $100,000 fine, and a permanent 
                prohibition on future offenses; he did not acknowledge or deny the SEC's 
                charges. We are waiting for the court to approve this deal with Hofmann 
                (SEC, 2021).
                <br/><br/>
                Seth M. Nadler, Thomas B. Rogers, James Connor, and Gary Peters of the 
                SEC oversaw the investigation, which also included Sarah Concannon and 
                Thomas Bednar. Greg Faragasso and Ms. Bandy served as supervisors (SEC, 2021).
                <br/> <br/>
                Finally, the Kraft-Heinz incident shows how dangerous corporate greed can 
                be and how important it is to have strong governmental supervision. 
                The scandal damaged the reputation and trustworthiness of business 
                entities in addition to the financial fines and legal consequences. 
                Stakeholders are still dealing with the effects of the Kraft-Heinz scandal, 
                but it should serve as a rallying cry for more openness, responsibility, and 
                ethics in corporate leadership. Resolving the trust gap and creating a more
                robust and fair business environment can only be achieved by 
                unwavering commitment to these principles.</p>

                <h1 className='text-[28px] leading-[30px] md:text-[36px] mt-4 mb-6 md:leading-[40px] font-bold text-dark'>Links</h1>
                <div className='flex gap-5 flex-col'>
                    <a target='_blank' href='https://www.cfo.com/news/kraft-heinz-fined-62m-for-accounting-fraud/655402/'>Heller, M. (2021, September 3). Kraft Heinz Fined $62M for Accounting Fraud. Retrieved from CFO website: https://www.cfo.com/news/kraft-heinz-fined-62m-for-accounting-fraud/655402/</a>
                    <a target='_blank' href='https://www.nytimes.com/2021/09/03/business/kraft-heinz-sec-charges.html'>Hirsch, L. (2021, September 3). Kraft Heinz will pay $62 million to settle accusations of an accounting “scheme.” The New York Times. Retrieved from https://www.nytimes.com/2021/09/03/business/kraft-heinz-sec-charges.html</a>
                    <a target='_blank' href='https://www.sec.gov/news/press-release/2021-174'>SEC. (2021, September 3). SEC Charges The Kraft Heinz Company and Two Former Executives for Engaging in Years-Long Accounting Scheme. Retrieved from www.sec.gov website: https://www.sec.gov/news/press-release/2021-174</a>
                    <a target='_blank' href='https://www.youtube.com/watch?v=GqaPby5v078&ab_channel=WallStreetMillennial'> Wall Street Millennial. (2021, September 18). Kraft Heinz Massive Accounting Fraud Explained. Retrieved from www.youtube.com website: https://www.youtube.com/watch?v=GqaPby5v078</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog