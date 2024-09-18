import { FaUserAlt } from "react-icons/fa"
import { FaUserXmark } from "react-icons/fa6"
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiRefund2Fill } from "react-icons/ri";
import { GiProfit } from "react-icons/gi";
import { AiOutlineGift } from "react-icons/ai";
import { BsPersonAdd, BsShieldLockFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import {IoMdCheckmarkCircleOutline} from "react-icons/io"
import SpinnerLoad from "../../../components/SpinnerLoad";
import FooterCR from "./FooterCR";

const UserHome = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | User Home"
  }, [])

const {data} = useContext(AuthContext);

let dataverify = data?.verified
  const verifiedeta = () => {
    if(dataverify === true){
    return (
      <div className="flex flex-row gap-2">
        <p className="font-[600] font-[Jost]">Verified</p>
        <IoMdCheckmarkCircleOutline size={25} color="yellow"/>
        </div>
    )
  }else{
    return (
      <div className="flex flex-row gap-2">
        <p className="font-[600] font-[Jost] text-xl">Unverified</p>
        <FaUserXmark size={25} color="red" />
      </div>
    );
  }
  }

  return (
    <>
    {loading ? (
      <SpinnerLoad /> 
    ): (
      <div>
    <div className='pt-6'>
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 w-full justify-between align-middle md:ps-4 ps-0">
        <div>
         <p className="text-start text-2xl font-[700] font-[Jost] capitalize">Welcome, {data?.fullname}</p>
      <div className="flex gap-3 justify-start items-center">
          
          {data?.profilePics === "" ? (
          <div className="mb-3 bg-white p-3 rounded-full">
           <FaUserAlt size={40} color="black"/> 
          </div>
          ): ( 
          <div className="mb-3 bg-white p-2 rounded-full">
           <img src={data?.profilePics} alt="image" className="rounded-full w-24 h-24"/>
          </div>
          )}
          <div>
            <p className="font-[600]"><span className="font-[800] font-[Jost]">Account Plan:</span> {data?.accountype}</p>
            {verifiedeta()}
          </div>
        </div> 
        <div className="flex gap-2 justify-between items-center px-3">
            <div className="flex flex-col justify-center items-center">
              <RiRefund2Fill size={30} />
              <p className="font-[600] font-[Jost]">Fund Wallet</p>
              <Link to="/user/deposit">
                <button className="bg-primary px-4 py-2 rounded-xl">Proceed</button>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BiMoneyWithdraw size={30} />
              <p className="font-[600] font-[Jost]">Withdraw</p>
              <Link to="/user/withdraw">
                <button className="bg-primary px-4 py-2 rounded-xl">Proceed</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-3 mx-auto mt-5">
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937] w-48"
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="font-[600] font-[Jost]">Account Balance</h5> <FaWallet size={40} />
          </div>
          <h2>${data?.tAmount}.00</h2>
        </div>
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937] w-48"
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="font-[600] font-[Jost]">Escrow</h5> <BsShieldLockFill size={40} />
          </div>
          <h2>${data?.tEscrow}.00</h2>
        </div>
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937] w-48"
        >
          <div className="flex justify-between items-center">
            <h5 className="font-[600] font-[Jost]">Total Profit</h5> <GiProfit size={40} />
          </div>
          <h2>${data?.tProfit}.00</h2>
        </div>
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937] w-48"
        >
          <div className="flex justify-between items-center">
            <h5 className="font-[600] font-[Jost]">Total Bonus</h5> <AiOutlineGift size={40} />
          </div>
          <h2 className="font-[500]">${data?.tBonus}.00</h2>
        </div>
        {/* <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937]"
        >
          <div className="flex justify-between items-center">
            <h5>TOTAL WITHDRAWAL</h5> <BiMoneyWithdraw size={40} />
          </div>
          <h2>${data?.twithd}.00</h2>
        </div> */}
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937] w-48"
        >
          <div className="flex justify-between items-center">
            <h5 className="font-[600] font-[Jost]">REFERRALS</h5> <BsPersonAdd size={40} />
          </div>
          <h2 className="text-center">{data?.tRefer}</h2>
        </div>
        <div
          className="p-3 border border-primary rounded bg-[#f1f1f1] dark:bg-[#1f2937] w-48"
        >
          <div className="flex justify-between items-center ">
            <h5 className="font-[600] font-[Jost]">TOTAL DEPOSIT</h5> <RiRefund2Fill size={40} />
          </div>
          <h2>${data?.tDeposit}.00</h2>
        </div>
      </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-[700] font-[Jost] md:ps-4 ps-0">Personal Trading Chart</h1>
        <div className="w-full mt-5 bg-[#f1f1f1] dark:bg-[#1f2937] h-[600px]">
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_cd3c4&symbol=BINANCE%3ABTCUSD&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&studies=%5B%5D&theme=dark&style=9&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.account.deepmargins.com&utm_medium=widget&utm_campaign=chart&utm_term=BINANCE%3ABTCUSD#%7B%22page-uri%22%3A%22www.account.deepmargins.com%2Foverview%22%7D"
            // frameborder="0"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>    
    <FooterCR />
      </div>
    
    )}
    </>
  )
}

export default UserHome