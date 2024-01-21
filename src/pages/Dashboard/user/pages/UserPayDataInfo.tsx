// import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { addressData } from "../../../../utils/data"
import { useEffect, useState } from "react"
import SpinnerLoad from "../../../components/SpinnerLoad"
// import {CopyToClipboard} from "react-copy-to-clipboard"
// import { FaRegClipboard } from "react-icons/fa"

const UserPayDataInfo = () => {
    const navigate = useNavigate()
  const {wallet} = useParams()
  const {amount} = useParams()

  // const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | Payment"
  }, [])

  const selectedAddress = addressData.find((item : any) => item.name === wallet)
  return (
     <>
    {loading ? (
      <SpinnerLoad /> 
    ): (
    <div className="container md:py-12 py-4">
        <div className="flex justify-center align-middle items-center">
            <div className="border border-primary rounded-xl">
                <div className=" ">
                  <div className="dark:bg-[#f1f1f1] bg-[#1f2937] rounded-t-lg py-2 md:py-4">
              <h3 className="text-center text-[#f1f1f1] dark:text-[#1f2937] md:text-2xl text-lg font-[500]">Make Payment</h3>      
                  </div>
      
      <div className="flex justify-between items-center p-3">
        <div>
          <h4>
            {selectedAddress?.name}
          </h4>
        </div>
        <h2>${amount}</h2>
      </div>
      <div className="rounded shadow bg-dark flex flex-col items-center justify-center gap-2 p-3 mx-auto">
        <div
          style={{ height: "200px", width: "200px"}}

          className="rounded"
        >
          <img src={selectedAddress?.image} className="w-full" alt="" />
        </div>
        <p>Send ${amount} to the address below</p>
        <div className="">
          <input type="text" name="" value={selectedAddress?.address} id="" className="w-100 rounded"/>
          {/* <CopyToClipboard text={selectedAddress?.address} onCopy={() => setCopied(true)}>
            <FaRegClipboard size={30} cursor="pointer" />
          </CopyToClipboard> */}
          {/* {copied ? (<span style={{color: 'green'}}>Copied</span>): null } */}
        </div>
        <p>Network Type: {selectedAddress?.unit}</p>
        {/* <Link to='proof'> */}
          <button className="bg-primary w-full rounded-xl p-3" onClick={() => navigate('/user/payment/proof')}>
            Mark as Completed
          </button>
        {/* </Link> */}
        
      </div>
      
    </div>
            </div>
        </div>
    </div>
    )}
    </>
  )
}

export default UserPayDataInfo