import { Button} from '../../ui';
import Navigation from '../../components/Navigation';
import { servicetwo, stockhero, stockone } from "../../../assets";
import { Link } from 'react-router-dom';

const Herosection = () => {
  return (
    <>
    <div className='h-[50vh] w-full bg-stkheros bg-no-repeat bg-opacity-50 bg-cover bg-center'>
        <Navigation />
        <div className="container">
          <p className='text-2xl font-[600]'>Planning Services</p>
        </div>
    </div>
    <div className=' bg-[#f1f1f1] dark:bg-[#1f2937]'>
        <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-12 overflow-hidden'>
            <div data-aos="fade-up-left">
                <img src={servicetwo} alt="img" className='w-full rounded' />
            </div>
            <div className='flex flex-col gap-6' data-aos="fade-up-right">
                <h2 className='text-lg md:text-3xl font-[Jost] pb-2 ' data-aos="zoom-in">A PLAN THAT PUTS THE BEST FINANCIAL CHOICES IN YOUR HANDS</h2>
                <p data-aos="zoom-in">These days, it's more important than ever to have a plan. Our version of financial planning not only gives you the confidence to know you're ready for anything, but is also designed to help you reach all your goals in the days ahead. Our advisors will design a personalized financial plan with the right</p>
                <div className='flex flex-row gap-6' data-aos="fade-down">
                  <Link to="/login">
                    <Button btntext="Get Started" />
                  </Link>
                  <Link to="/contact">
                    <Button btntext="Contact Us" />
                  </Link>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
    <div className='container'>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
            {clientest.map(item => (
             <CltCard key={item.id} text={item.text} img={item.img}/>   
            ))}    
        </div> */}
        <div className='flex justify-center items-center py-6 md:py-12'>
          <div className='flex flex-col justify-center items-center w-1/2 gap-6'>
                <p className='text-lg md:text-3xl font-[Jost] pb-2' data-aos="zoom-in">OUR VERSION OF FINANCIAL PLANNING</p>
                <p className='text-center' data-aos="zoom-in">Some companies only focus on insurance, Others on investments. Our advisors look at your financial big picture and recommend the right insurance and investment strategies in one integrated financial plan, designed to help you live the life you've always wanted.</p>
        </div>  
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center py-12 overflow-hidden">
          <div className="flex flex-col gap-6" data-aos="fade-up-left">
            <h3 className="text-xl md:text-3xl font-[Jost] pb-2 font-[600]" data-aos="fade-up">Outstanding team</h3>
            <p data-aos="fade-up">PortPolio Finance is a tightly knit group working together with management teams toward common goals. We have more than 70 investment professionals, including 24 partners with an average tenure at Passfolio Finance of more than a decade. This allows us to devote substantial time to the companies in which we invest.</p>
          </div>
          <div data-aos="fade-up-right">
            <img src={stockhero} alt="image" className="w-full rounded-lg" />
          </div>
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center py-12 overflow-hidden">
          <div data-aos="fade-up-left">
            <img src={stockone} alt="image" className="w-full rounded-lg" />
          </div>
          <div className='flex flex-col gap-6' data-aos="fade-up-right">
            <h3 className='text-xl md:text-3xl font-[Jost] pb-2 font-[600]'>Collaborative style</h3>
            <p>Our objective is to work with portfolio company leadership and create a backdrop in which companies can thrive. We encourage management teams to invest alongside us, and our forward-thinking approach and philosophy to leave companies better than when we found them also means that portfolio company employees often choose to invest alongside Passfolio Finance as well.</p>
          </div>
          
        </div> 
    </div>
    </>
    
  )
}

export default Herosection