import { useEffect, useState } from "react";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import { addressData } from "../../../../utils/data";
import SpinnerLoad from "../../../components/SpinnerLoad";
import FooterCR from "./FooterCR";

const UserDeposit = () => {
    const navigate = useNavigate();

  const [amount, setAmount] = useState<any>(null);
  const [select, setSelect] = useState("");
  const [sumLoading, setSumLoading] = useState(false)
  // const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | Deposit"
  }, [])


  const SelectChange = (e : any) => {
    setSelect(e.target.value);
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    setSumLoading(true)
    if (amount == null || amount < 500) {
      toast.error("Amount is too low", {
        position: "bottom-left",
      });
      setSumLoading(false)
      return;
    } else if (select === "Select Payment Option") {
      toast.error("Please ", {
        position: "bottom-left",
      });
      setSumLoading(false)
    }
    try {
      // alert(select)
      if (select === "Ethereum") {
        navigate(`/user/payment/Ethereum/${amount}`);
        // alert("eth");
      } else if (select === "Bitcoin") {
        navigate(`/user/payment/Bitcoin/${amount}`);
        // alert("Btc");
      } else if (select === "Litecoin") {
        navigate(`/user/payment/Litecoin/${amount}`);
        // alert("ltc");
      } else if (select === "USDT") {
        navigate(`/user/payment/USDT/${amount}`);
        // alert("usdt");
      } else {
        toast.error("Kindly Select a Payment Options", {
          position: "bottom-left",
        });
      }
    } catch (err : any) {
      toast.error(err.code, {position: "bottom-left"})
    }finally{
      setSumLoading(false);
    }
  };
  return (
    <>
    {loading ? (
      <SpinnerLoad /> 
    ): (
      <div className="">
      <div className="container py-12 min-h-screen">
        <div className="w-full md:w-3/4 mx-auto">
          <h2 className="text-center text-3xl font-[700] p-6 font-[Jost]">Deposit</h2>
            <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 border border-primary rounded p-4 bg-[#f1f1f1] dark:bg-[#1f2937]"
        >
          <div>
            <label className="font-[Jost] font-[600] text-xl">Enter Amount</label> <br />
            <input
              type="number"
              value={amount}
              onChange={(e: any) => setAmount(e.target.value)}
              name="amount"
              className="w-full p-2 rounded font-[500]"
            />
          </div>
          <select
            value={select}
            id="select"
            onChange={SelectChange}
            className="w-100 p-2 rounded"
          >
            {addressData.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <button className="bg-primary rounded-lg py-2" type="submit">
            {sumLoading ? "Processing..." : "Proceed to Payment"}
          </button>
        </form>
        </div>
    </div>  
    {/* <div className="m-50"> */}
    <div className="">
      <FooterCR />
    </div>
    
      </div>
    
    )}
    </>
  )
}

export default UserDeposit