import Navigation from "../../components/Navigation";
import { comassestsfx, credassetsfx, cryassetsfx, forexassets, hexassestsfx, instimanage, instragety, privassets, realassets } from "../../../assets";

const Herosection = () => {
  return (
    <div>
      <div className="h-[50vh] w-full bg-stkheros bg-no-repeat bg-opacity-50 bg-cover bg-center">
        <Navigation />
        <div className="container">
          <p className='text-2xl font-[600]'>Foreign Exchange</p>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 justify-center items-center">
          <div>
            <p >
              Our advisors connect your finances to what you want out of life
              and create a plan designed to make it happen, revealing
              possibilities while protecting you from the unexpected—today and
              every day after.
            </p>
            <ul >
              <li>
                A personalized plan that brings all aspects of your financial
                life together
              </li>
              <li>
                A strategic mix of insurance and investments working together
                for your goals
              </li>
              <li>
                Your go-to financial expert who helps keep your big picture, and
                dreams, in focus
              </li>
            </ul>
          </div>
          <div>
            <p>
              As a catalyst for shared prosperity and a better future, we strive
              to lead the alternative investment industry, both in terms of
              generating returns and make a lasting positive impact. Our growth
              in becoming one of the largest alternative investment managers is
              aligned with this vision and is a testament to our shared values,
              experienced management team, and focus on performance and
              high-quality investor base, which includes large asset management
              , trading , Infrastructures, sovereign wealth funds and financial
              planning.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <div className="md:w-1/2 w-full flex flex-col gap-4">
            <h1 className="text-center text-3xl font-[Jost] font-[600]">TYPES OF ALTERNATIVE FUNDS</h1>
            <p className="text-center">
              There are a number of different types of alternative funds, each
              with their own characteristics and level of risk.
            </p>
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 justify-center items-center overflow-hidden">
            
            <div data-aos="fade-up-right">
              <h3 className="text-lg md:text-3xl font-[Jost] pb-2'">Foreign Exchange</h3>
              <p className="text-md">
                Spectrum Capitals finance offers a broad array of professional services and access to the global foreign exchange markets for commercial and institutional clients. execution and clearing services in virtually all tradable currency pairs and derivative instruments.
              </p>
              <div>
                <h4>What is foreign exchange?</h4>
                <p className="text-md">Forex, or foreign exchange, can be explained as a network of buyers and sellers, who transfer currency between each other at an agreed price. It is the means by which individuals, companies and central banks convert one currency into another - if you have ever travelled abroad, then it is likely you have made a forex transaction.</p>
                </div>
            </div>
            <div data-aos="fade-up-left">
              <img src={forexassets} alt="" className="w-full rounded-xl" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 justify-center items-center overflow-hidden">
            
            <div data-aos="fade-up-right">
              <img src={cryassetsfx} alt="" className="w-full rounded-xl" />
            </div>
            <div data-aos="fade-up-left">
              <h3 className="text-lg md:text-3xl font-[Jost] pb-2'">Crypto asset</h3>
              <p className="text-md">
                Spectrum Capitals offers a variety of cryptocurrencies that can be traded in relation to many different currencies. We offer pairings with the following cryptocurrencies: Bitcoin, Litecoin, Ripple, TRON, Ethereum and many others. Study cryptocurrency price charts with Spectrum Capitals
              </p>
              <p className="text-md">
                Investing vs. trading cryptocurrency There are two options when trading in the cryptocurrency market. You can buy actual cryptocurrency on exchanges, where you own the underlying asset. This is considered a long-term investment, as you are waiting for the price to rise significantly before selling.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 justify-center items-center overflow-hidden">
            <div data-aos="fade-up-left">
              <h3 className="text-3xl font-[Jost] pb-2">Real Assets</h3>
              <p className="text-md">
                These funds typically invest in tangible assets that derive
                their value from their substance and physical properties. Real
                assets include real estate, public and private infrastructure,
                natural resources, precious metals, and commodities. Investors
                looking to add a broad real assets allocation to their private
                markets portfolio and gain access to key market sectors,
                including energy, power, infrastructure, and natural resources
                turn to Spectrum Capitals Real assets also serve as a crucial
                portfolio diversifier as they tend to respond to different
                economic conditions than other private asset classes. The
                performance of real assets, for example, has been positively
                correlated with inflation which has made them an effective hedge
                during periods when prices have risen.
              </p>
            </div>
            <div data-aos="fade-up-right">
              <img src={realassets} alt="" className="w-full rounded-xl" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 justify-center items-center overflow-hidden">
            <div data-aos="fade-up-left">
              <img src={instragety} alt="" className="w-full rounded-xl" />
            </div>
            <div data-aos="fade-up-right">
              <h3 className="text-lg md:text-3xl font-[Jost] pb-2'">Infrastructure</h3>
              <p className="text-md">
                We are one of the world's largest infrastructure investors, owning and operating assets across the utilities, transport, energy and data infrastructure sectors. Our portfolio, grounded in 7 years of investment experience, provides diversified exposure to scarce, high-quality businesses with significant barriers to entry. We invest in infrastructure assets that deliver essential goods and services - from the movement of passengers and freight over toll roads and rail networks to the distribution of energy and other products through ports and pipelines, and much more.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 justify-center items-center overflow-hidden">
            <div data-aos="fade-up-left">
              <h3 className="text-lg md:text-3xl font-[Jost] pb-2'">Commodities</h3>
              <div>
                <h4>Who we are</h4>
                <p className="text-md">Spectrum Capitals commodities team seeks to generate alpha through directional and relative value strategies across both physical and financial commodities markets. We evaluate opportunities in natural gas, power, crude, and refined products, and agriculture, primarily in North America and Europe.</p>
              </div>
              <div>
                <h4>How we do it</h4>
                <p className="text-md">Spectrum Capitals uses fundamental research, proprietary analytical methodologies, and quantitative analysis to drive our views. We join these techniques with an intense focus on understanding each market we trade, reflected in our ability to generate supply and demand balances for each commodity or product. A key part of this process is our advanced technology platform that allows us to quickly and deeply understand patterns within a market or product, conduct scenario analysis and improve the overall accuracy of our views.</p>
              </div>
            </div>
            <div data-aos="fade-up-right">
              <img src={comassestsfx} alt="" className="w-full rounded-xl" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 justify-center items-center overflow-hidden">
            <div data-aos="fade-up-left">
              <img src={credassetsfx} alt="" className="w-full rounded-xl" />
            </div>
            <div data-aos="fade-up-right">
              <h3 className="text-lg md:text-3xl font-[Jost] pb-2'">Credit</h3>
              <div>
                <h4>Who we are</h4>
                <p className="text-md">Spectrum Capitals's credit team seeks to generate alpha by focusing on the relationships that connect corporate bonds, convertible bonds, bank debt, credit derivatives, credit indices, and equities.</p>
              </div>
              <div>
                <h4>How we do it</h4>
                <p className="text-md">Operating primarily across the U.S. and European corporate universe, the group's core strategies integrate structural, statistical, and fundamental approaches to investing across the corporate capital structure.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 justify-center items-center overflow-hidden">
            <div data-aos="fade-up-left">
              <h3 className="text-lg md:text-3xl font-[Jost] pb-2'">Hedge Strategies</h3>
              <p className="text-md">
                Also referred to as alternative strategies, these investment strategies use both long and short positions in markets and securities as well as derivatives in an attempt to minimize market beta returns while seeking alpha and risk-adjusted returns. Some of the most common strategies are long and short equity, global macro, relative value, and credit.
              </p>
            </div>
            <div data-aos="fade-up-right">
              <img src={hexassestsfx} alt="" className="w-full rounded-xl" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 justify-center items-center overflow-hidden">
            <div data-aos="fade-up-left">
              <img src={instragety} alt="" className="w-full rounded-xl" />
            </div>
            <div data-aos="fade-up-right">
              <div>
                <h3 className="text-lg md:text-3xl font-[Jost] pb-2'">INVESTED IN SUSTAINABLE GROWTH</h3>
              <p className="text-md">
                Sustainability and Energy Transition are areas of intense focus for the investment community, impacting virtually every sector. At Spectrum Capitals, we draw from our in-depth research and thought leadership across the firm as we explore Sustainability and its impact on the business and social landscape. We bring particular expertise in alternative energy, mobility technology, biotechnology, synthetic biology, Internet of Things, edge computing and 5G, and robotics and automation.
              </p>
              </div>
              
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 justify-center items-center overflow-hidden">
            <div data-aos="fade-up-left">
              <h3 className="text-lg md:text-3xl font-[Jost] pb-2'">INSTITUTIONAL MANAGEMENT</h3>
              <p>
               When you select Spectrum Capitals to manage institutional assets, you will discover why we've earned the reputation for solid performance and equally solid relationships. Our stable ownership and strong balance sheet allow us to think long-term, while our dynamic culture inspires long tenures and deep institutional knowledge. And, above all, our high rate of client retention demonstrates that we not only say what we do, we do what we say.

              </p>
            </div>
            <div data-aos="fade-up-right">
              <img src={instimanage} alt="" className="w-full rounded-xl" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 justify-center items-center overflow-hidden">
            <div data-aos="fade-up-left">
              <img src={privassets} alt="" className="w-full rounded-xl" />
            </div>
            <div data-aos="fade-up-right">
              <h3 className="text-lg md:text-3xl font-[Jost] pb-2'">Private Equity</h3>
              <p className="text-md">
                Private equity funds typically invest in equity capital that is not quoted on a public exchange. Instead, the funds take direct ownership positions in private companies, which potentially may provide above-market returns and control of the investment, at the risk of reduced liquidity and diversification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
