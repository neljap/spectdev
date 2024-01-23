// import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { addressData } from "../../../../utils/data"
import { useEffect, useState } from "react"
import SpinnerLoad from "../../../components/SpinnerLoad"
import { FaClipboard } from "react-icons/fa"
import FooterCR from "./FooterCR"

// import {CopyToClipboard} from "react-copy-to-clipboard"
// import { FaRegClipboard } from "react-icons/fa"

const UserPayDataInfo = () => {
    const navigate = useNavigate()
  const {wallet} = useParams()
  const {amount} = useParams()

  // const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(true)
  // const [clipAddress, setClipAddress ] = useState<any>("")
  const [isCopied, setIsCopied] = useState(false);

  // console.log("from clipboard", clipAddress)



  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | Payment"
  }, [])

  const selectedAddress:any = addressData.find((item : any) => item.name === wallet)

  // This is the function we wrote earlier
  async function copyTextToClipboard() {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(selectedAddress?.address);
    } else {
      return document.execCommand('copy', true, selectedAddress?.address);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard()
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
     <>
    {loading ? (
      <SpinnerLoad /> 
    ): (
      <div>
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
        <div className="relative">
          <input type="text" name="" value={selectedAddress?.address} id="" className="w-full rounded-xl border border-primary pe-16 ps-4 py-2"/>
          <div className="absolute right-2 top-2 cursor-pointer flex flex-row justify-center items-center" onClick={handleCopyClick}><FaClipboard /> <p className="text-sm">{isCopied ? 'Copied': 'Copy'}</p></div>
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
    <FooterCR />
      </div>
    
    )}
    </>
  )
}

export default UserPayDataInfo