import { BiMoneyWithdraw } from "react-icons/bi";
import { RiRefund2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import BtcIcon from "../../../../assets/bitcoin.png";
import LiteCoin from "../../../../assets/litecoin.png";
import EthIcon from "../../../../assets/ethereum.png";
import SpinnerLoad from "../../../components/SpinnerLoad";

const UserWallet = () => {
  const {data} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | Wallet"
  }, [])

  return (
    <>
    {loading ? (
      <SpinnerLoad /> 
    ): (
      <>
      <div className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8 w-full justify-between align-middle">
        <div className="">
          <div className="py-4">
            <p className="text-2xl font-semibold">{data?.fullname}</p>
            <p className="text-sm">{data?.email}</p>
            
          </div>
          <div className="flex gap-2 justify-between items-center px-3">
            <div className="flex flex-col justify-center items-center gap-2">
              <RiRefund2Fill size={40} />
              <p>Fund Wallet</p>
              <Link to="/user/deposit">
                <button className="bg-primary px-4 py-2 rounded-xl">Proceed</button>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <BiMoneyWithdraw size={40} />
              <p>Withdraw</p>
              <Link to="/user/withdraw">
                <button className="bg-primary px-4 py-2 rounded-xl">Proceed</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex justify-center  items-center gap-2 border border-primary p-2 rounded" style={{width: '200px', height: '120px'}}>
              <img
                src={BtcIcon}
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
              <div>
                <h6>Bitcoin Wallet</h6>
                <h4>${data?.tBtc}.00</h4>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2 border border-primary  p-2 rounded" style={{width: '200px', height: '120px'}}>
              <img
                src={EthIcon}
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
              <div>
                <h6>Ethereum Wallet</h6>
                <h4>${data?.tEth}.00</h4>
              </div>
            </div>
            <div className="flex justify-center  items-center gap-2 border border-primary p-2 rounded" style={{width: '200px', height: '120px'}}>
              <img
                src={LiteCoin}
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
              <div>
                <h6>Litecoin Wallet</h6>
                <h4>${data?.tLtc}.00</h4>
              </div>
            </div>
          </div>
      </div>
      </div>
    <div>
        <h1 className="text-3xl">Personal Trading Chart</h1>
        <div className="w-full my-5 bg-[#f1f1f1] dark:bg-[#1f2937]" style={{ height: "500px" }}>
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_cd3c4&symbol=BINANCE%3ABTCUSD&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&studies=%5B%5D&theme=dark&style=9&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.account.deepmargins.com&utm_medium=widget&utm_campaign=chart&utm_term=BINANCE%3ABTCUSD#%7B%22page-uri%22%3A%22www.account.deepmargins.com%2Foverview%22%7D"
            // frameborder="0"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      </>
    
    )}
    </>
  )
}

export default UserWallet;