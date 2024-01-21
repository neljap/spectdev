import { TopstData, solidProItems, tstockData } from "../../../utils/data";
import { SolidItemCard, SusCard, TopstCard } from "../../ui";
import Navigation from "../../components/Navigation";
import { credassetsfx, stocktwo } from "../../../assets";

const Herosection = () => {
    const factItems = ["Stop and conditional orders may help protect your portfolio", "The price-to-earning (P/E) ratio can help you identify value stocks", "Compare earnings-per-share (EPS) between similar companies.", "Market capitalization (market cap) is the dollar value of a company", "Stock performance can fluctuate depending on market conditions"]
  return (
    <>
    <div className="h-[50vh] w-full bg-stkhero bg-no-repeat bg-cover bg-center">
        <Navigation />
        <div className="container">
          <p className='text-2xl font-[600]'>Stocks</p>
        </div>
    </div>
    <div>
       <div className="container py-6">
        <p className="text-lg md:text-3xl font-[Jost] pb-2">WHAT ARE STOCKS?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
            <div>
                <p>A stock represents a share in the ownership of a company, including a claim on the company's earnings and assets. As such, stockholders are partial owners of the company. When the value of the business rises or falls, so does the value of the stock. Stocks are generally bought and sold electronically through stock exchanges, the two primary ones in the United States being the New York Stock Exchange (NYSE) and the National Association of Securities Dealers (NASDAQ). While some companies sell</p>
            </div>
            <div>
                <p>stock directly to investors, most only sell stock through a brokerage such as Schwab. Investors buy and sell stocks for a number of reasons including the potential to grow the value of their investment over time, to potentially profit from shorter-term stock price moves, or even to earn an income by investing in dividend-paying stocks. Keep in mind that the price of a stock can fall as easily as it can rise. Investing in stock offers no guarantee that you will make money, and many investors lose money instead.</p>
            </div>
        </div>
    </div> 
    </div>
    <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
        <div data-aos="fade-up-left">
        <h2 className="text-lg md:text-3xl font-[Jost] pb-2">HOW STOCKS FIT WITHIN AN OVERALL INVESTMENT PORTFOLIO.</h2>
        <p>Stocks are an important part of any portfolio because of their potential for growth and higher returns versus other investment products. In order to determine how much you should allocate to stocks, you should first develop a comprehensive financial plan that reflects your investment horizon and the level of risk you're willing to accept in exchange for the potential upside stocks can offer.</p>
        <p>Asset classes perform differently, and it's nearly impossible to predict which asset class will perform best in a given year. If you had invested $100,000 in just U.S. Stocks in 1997, it would have almost quadrupled to $400,000 by 2017, but there would have been many ups and downs due to volatility. A more diversified investment portfolio would have had a lower return, but reduced volatility.</p>
        </div>
        <div data-aos="fade-up-right">
    <img src={stocktwo} alt="image" className="w-full rounded-lg" />
        </div>
    </div>
    </div>
    <div className="container">
        <h2 className="text-lg md:text-3xl font-[Jost] pb-2">WHY INVEST IN STOCKS WITH SPECTRUM CAPITALS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
            {solidProItems.map(item => (
                <SolidItemCard key={item.id} img={item.img} title={item.title} text={item.text}/>
            ))}
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="md:w-1/2 w-full py-12">
                <h3 className="text-lg md:text-3xl  font-[Jost] pb-2 text-center font-[600]" data-aos="zoom-in">WHY TRADE STOCKS?</h3>
                <p className="text-md text-center" data-aos="zoom-in">Stocks let you own a piece of a company’s future. They’re available for a wide variety of industries—so you can tap into your knowledge of specific businesses, or help you to diversify your portfolio.</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
            {tstockData.map(item => (
                <SusCard key={item.id} title={item.title} text={item.text} img={item.img}/>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 justify-center items-center overflow-hidden">
            <div data-aos="fade-up-left">
                <img src={credassetsfx} alt="image" className="w-full rounded-xl " />
            </div>
            <div data-aos="fade-up-right">
                <h2 className="text-lg md:text-3xl font-[Jost] pb-2">Fast Facts</h2>
                <ul>
                    {factItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
        <hr />
        <div className="py-6">
            <h2 className="text-center text-3xl font-[Jost] pb-2">TOP FIVE DIVIDEND YIELDING STOCKS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                {TopstData.map(item => (
                    <TopstCard key={item.id} text={item.text} title={item.title}/>
                ))}
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Herosection;