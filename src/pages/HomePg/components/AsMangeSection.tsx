import { AssemgeCard, Button} from "../../ui";
import {  stockData } from "../../../utils/data";
import IRAsset from "../../../assets/investrealte.jpg"
import Fplanassest from "../../../assets/fplanassest.jpg";

const AsMangeSection = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-10">
        {stockData.map(item => (
          <AssemgeCard key={item.id} asstitle={item.title} asstext={item.text}  assimg={item.img}/>
        ))}
        
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14">
        <div>
          <p data-aos="zoom-in">
            Our advisors connect your finances to what you want out of life and
            create a plan designed to make it happen, revealing possibilities
            while protecting you from the unexpected—today and every day after.
          </p>
          <ul>
            <li>
              A personalized plan that brings all aspects of your financial life
              together
            </li>
            <li>
              A strategic mix of insurance and investments working together for
              your goals
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
            generating returns and make a lasting positive impact. Our growth in
            becoming one of the largest alternative investment managers is
            aligned with this vision and is a testament to our shared values,
            experienced management team, and focus on performance and
            high-quality investor base, which includes large asset management ,
            trading , Infrastructures, sovereign wealth funds and financial
            planning.
          </p>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 justify-center items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-lg md:text-3xl font-[Jost] pb-2">INVESTOR RELATIONS</p>
            </div>
            <p>provides advanced investment strategies and wealth management solutions to forward-thinking investors around the world. Through its distinct investment brands Management, we offers a diversity of investment approaches, encompassing bottom-up fundamental active management, Responsible Investing, systematic investing and customized implementation of client-specified portfolio exposures. Exemplary service, timely innovation and attractive returns across market cycles have been hallmarks of since the origin.</p>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-lg md:text-3xl  font-[Jost] pb-2">OUR DIVERSITY & INCLUSION STRATEGY</p>
            </div>
            <p>At , we want every person to have the opportunity to succeed based on merit, regardless of race, color, religion, creed, ancestry, national origin, sex, age, disability, marital status, citizenship status, sexual orientation, gender identity expression, military or veteran status, or any other criterion. Why is this so important? To us, diverse and inclusive teams enriched with people of distinctive backgrounds make us better. They help us generate better ideas, reach more balanced decisions, engage our communities and help our clients achieve better outcomes.</p>
          </div>
        </div>
        <div>
          <img src={IRAsset} alt=""  className="w-full rounded-xl"/>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 justify-center items-center">
        <div>
          <img src={Fplanassest} alt="" className="w-full rounded-lg" />
        </div>
        <div>
          <div>

          </div>
            <div className="flex justify-start items-start flex-col gap-4">
              <h2 className="text-lg md:text-3xl  font-[Jost] pb-2 ">FINANCIAL PLANNING</h2>
             <p>These days, it's more important than ever to have a plan. Our version of financial planning not only gives you the confidence to know you're ready for anything, but is also designed to help you reach all your goals in the days ahead.</p>
            <Button btntext="Learn More"/> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default AsMangeSection;
