import React from 'react'
import { Link } from 'wouter'

const SecondBlog = () => {
  return (
    <div className='w-screen h-auto  bg-[#efea69]'>
        <div className='max-w-6xl mx-auto px-4 pt-8 pb-10'>
            <img src='ftx.png' className='rounded-md md:rounded-xl'/>
            <h1 className='text-[28px] leading-[30px] md:text-[36px] mt-4 mb-6 md:leading-[40px] font-bold text-dark'>FTX: From Crypto Darling to Dumpster Fire (A Hilariously Tragic Tale)</h1>
            <div className='flex gap-10'>
                <div className='p-2 border-2 border-black rounded-md w-full md:w-fit mb-6'>
                    <div className='max-w-5xl mx-auto mb-2'>
                        <div className='flex items-start flex-col'>
                            <h4 className='text-lg font-bold'> Farhan Anjum</h4>
                            <p className='mt-0 text-dark text-sm'> MBA, Institute of Business Administration, DU.</p>
                        </div>
                    </div>
                    <div className='text-sm text-dark'>
                        <p>Published: May 31st,, 2024. </p>
                        <p>Reading time: 6 minutes</p>
                    </div>
                </div>
                <div className='p-2 border-2 border-black rounded-md w-full md:w-fit mb-6'>
                    <div className='max-w-5xl mx-auto mb-2'>
                        <div className='flex items-start flex-col'>
                            <h4 className='text-lg font-bold'> Nasser Mohammad Sharif </h4>
                            <p className='mt-0 text-dark text-sm'> MBA, Institute of Business Administration, DU.</p>
                        </div>
                    </div>
                    <div className='text-sm text-dark'>
                        <p>Published: May 31st, 2024. </p>
                        <p>Reading time: 6 minutes</p>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <Link href='/ThirdBlog'><button className='border-black border-2 px-3 py-1 rounded-full'> View Next Story</button></Link>
            </div>
            <p className='text-xl font-regular mb-6 leading-[1.8g]'> Ah, FTX. Remember them? The golden child of crypto, who promised to 
            revolutionize finance and make everyone rich (except, you know, for the actual 
                regulators). Well, buckle up, true believers, because we're about to dissect the 
                accounting scandal that turned FTX from a billion-dollar dream into a cautionary 
                meme.</p>
            <div className='prose md:prose-lg xl:prose-xl w-full whitespace-break-spaces max-w-full text-dark marker:text-dark mb-6'>
                <h2 className='text-xl font-bold mb-6 leading-[1.8g]'>The Base of the Scandal: A House of Inflated Hopes (and Tokens)</h2>
                <p className='text-xl font-regular mb-6 leading-[1.8g]'>Imagine a Jenga game, but instead of wooden blocks, it's customer deposits and 
                sketchy accounting practices. That's FTX in a nutshell. Here's the recipe for 
                disaster:
                <br/>
                <br/>
                * FTX Token (FTT): This was FTX's very own "magic internet bean," 
                whose value they swore would only go up (much like your uncle's collection of
                Beanie Babies in the attic). The problem? They kept buying FTT with customer 
                deposits, like a toddler shoving all the M&Ms into their cheeks and claiming they're 
                "saving" them.
                <br/>
                <br/>

                * Alameda Research: This was FTX's "supposedly" independent trading firm, 
                run by SBF's ex-girlfriend (because what's a good crypto scam without a little
                romance?). Alameda borrowed heavily from FTX using those same customer 
                deposits, then proceeded to gamble it all on crypto ventures riskier than a 
                blindfolded dart game at a clown convention 
                <a href='https://www.investopedia.com/terms/c/cryptocurrency.asp'>
                [(https://www.investopedia.com/terms/c/cryptocurrency.asp)].
                </a>
                <br/>
                <br/>
                
                Why the Scandal? Greed, Glorious Greed (and Maybe a Few Lambo Dreams)
                <br/>
                <br/>
                
                Why cook up this financial fiasco? Well, the answer is as old as time itself: 
                money (and maybe a serious case of FOMO – the Fear Of Missing Out on all those 
                    fancy yachts other crypto bros were buying). By inflating FTT's value, FTX made 
                    themselves look like a financial powerhouse, attracting more investors and juicing 
                    their own profits (on paper, at least).</p>
                <h2 className='text-xl font-bold mb-6 leading-[1.8g]'>How They Did It</h2>
                <p className='text-xl font-regular mb-6 leading-[1.8g]'>
                The Accounting Shenanigans Nobody Saw Coming 
                (Except Maybe That Janitor Who Knew They Never Threw Away Any Shredded Paper)
                Here's where things get interesting (and by interesting, we mean mind-numbingly
                fraudulent). FTX's financial statements were about as transparent as a blindfold. 
                Some key tricks in their playbook:
                <br/><br/>
                Creative Accounting: They probably had a secret handshake for "let's just 
                make up some numbers that look good." Expenses mysteriously vanished, 
                liabilities took a permanent vacation, and FTT's value became as inflated as
                a birthday balloon filled with helium.
                <br/> <br/>
                Related-Party Shenanigans: Remember Alameda, 
                the "independent" trading firm? Yeah, their risky bets
                weren't exactly disclosed in FTX's financials. 
                It was like a family recipe for financial disaster, 
                passed down through generations (of questionable
                accounting practices).</p>
                
                <br/>
                <img src='blog2-meme.png' className='rounded-md md:rounded-xl w-1/3'/>
                <br/><br/>

                <h2 className='text-xl font-bold mb-6 leading-[1.8g]'>How it was Manipulated in the Accounts: The Great FTT Fiasco</h2>
                <p className='text-xl font-regular mb-6 leading-[1.8g]'>
                FTT was the linchpin of the whole scam. Here's how they made it look rosier than a flamingo pool float:
                <br/><br/>
                * Buybacks Galore: They used customer deposits to buy back FTT, artificially inflating its price. This was like repeatedly blowing up a balloon and claiming it somehow makes the entire room bigger.
                <br/><br/>
                * Limited Supply, Supposedly High Demand: FTX limited the number of FTT tokens in circulation, creating a "scarcity" (read: a fake sense of value) that supposedly drove demand (which was probably more fueled by marketing hype than actual utility).
                <br/><br/></p>


                <h2 className='text-xl font-bold mb-6 leading-[1.8g]'>What Were the Red Flags in the Auditors' Reports? The Ones They Conveniently Missed (or Ignored)</h2>
                <p className='text-xl font-regular mb-6 leading-[1.8g]'>
                The auditors, bless their oblivious hearts, somehow missed the giant red flags waving like a possessed pool noodle. Here's what they might have noticed if they weren't too busy counting their own fees:
                <br/><br/>
                * Lack of Transparency: The financial statements were about as clear as mud, with limited details on asset valuation and related-party transactions. This lack of transparency is a major red flag for any investor, as highlighted by the Association of International Certified Professional Accountants (AICPA) [(https://www.aicpa-cima.com/)].
                <br/><br/>
                * Going Concern Issues: FTX's reliance on customer deposits and Alameda's risky bets should have raised serious questions about their long-term viability.
                </p>

                <h2 className='text-xl font-bold mb-6 leading-[1.8g]'>The End (Hopefully, For This Kind of Nonsense)</h2>
                <p className='text-xl font-regular mb-6 leading-[1.8g]'>

                The FTX debacle serves as a stark reminder that the Wild West of crypto needs some serious taming. Here's to hoping regulators take note and the next "crypto king" isn't crowned with a fool's gold tiara. In the meantime, let the FTX saga be a hilarious (and cautionary) reminder that even in the digital age, greed and a complete lack of financial scruples can bring even the mightiest crypto empires crashing down. After all, a little bit of skepticism can go a long way in the crypto world, just like a healthy dose of laughter can help us learn from the mistakes of others.</p>
            </div>
        </div>
    </div>
  )
}

export default SecondBlog