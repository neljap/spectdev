import {IoCheckmarkCircle} from "react-icons/io5";
import { Button } from ".";
// import { Link } from "react-router-dom";

interface Investypes{
    name: String,
    minDeposit: number,
    maxDeposit: number,
    roi: number,
    time: number
}

const InvestCard = ({name, minDeposit, maxDeposit, roi, time}: Investypes) => {
  return (
    <div className="p-6 rounded-xl border border-primary bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-center align-middle gap-8" data-aos="flip-up">
        <h2 className="text-3xl text-center">{name} PLAN</h2>
        <div className="flex flex-col gap-4 items-center">
         <div className='flex flex-row gap-3'>
        <h1>${minDeposit} </h1>
        <p>minimum</p>
        </div>
        <p>/{time}days</p>   
        </div>
        

        <div className="flex flex-col justify-center align-middle">
            <div className="flex justify-between align-baseline pb-2">
                <p>Min Deposit</p>
                <p>${minDeposit}</p>
            </div>
            <div className="flex justify-between align-baseline pb-2">
                <p>Max Deposit</p>
                <p>${maxDeposit}</p>
            </div>
            <div className="flex justify-between align-baseline pb-2">
                <p>Return of Interest</p>
                <p>{roi}%</p>
            </div>
            <div className="flex justify-between align-baseline pb-2">
                <p>Base Currency</p>
                <p>USD</p>
            </div>
            <div className="flex justify-between align-baseline pb-2">
                <p>Full IT Support</p>
                <IoCheckmarkCircle />
            </div>
            <div className="flex justify-between align-baseline pb-2">
                <p>Refferal Bonus</p>
                <IoCheckmarkCircle />
            </div>
            <div className="flex justify-between align-baseline pb-2">
                <p>Hedging Allowed</p>
                <IoCheckmarkCircle />
            </div>
        </div>
         <Button btntext="Get Started" />     
            
        
    </div>
  )
}

export default InvestCard