import { toast } from "react-toastify";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import SpinnerLoad from "../../../components/SpinnerLoad";

const UserWdFunds = () => {
  const [otp, setOtp] = useState(0);
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const {data} = useContext(AuthContext);

  const navigate = useNavigate()

  const [loadingWd, setLoadingWd] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingWd(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | Withdraw"
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (amount < 10000) {
        toast.error("Amount is too Low", {
          position: "bottom-left",
        });
        setLoading(false);
        setAddress("");
        setAmount(0);
        setOtp(0);
        return;
      } else if (otp == 553456 || 567890 ) {
        const widinfo = {amount, otp, address, userid: data._id}
        await axios.post("https://specserver.vercel.app/api/user/withdraw", widinfo);

        // await addDoc(collection(db, "withdraw"), {
        //   otp,
        //   address,
        //   amount,
        //   sendAt,
        // });

        toast.success(
          "Withdraw Request Successful, Your Funds will be deposited to your wallet, shortly",
          {
            position: "bottom-left",
          }
        );
        setLoading(false);
        setAddress("");
        setAmount(0);
        setOtp(0);
        navigate("/user/withdraw-success")
      } 
      else {
        toast.error("Please contact Support", {
          position: "bottom-left",
        });
        setLoading(false);
        setAddress("");
        setAmount(0);
        setOtp(0);
      }
      setLoading(false);
      setAddress("");
      setAmount(0);
      setOtp(0);
    } catch (err: any) {
      toast.error(err.code, { position: "bottom-left" });
    }
  };
  return (
    <>
    {loadingWd ? (
      <SpinnerLoad /> 
    ): (
    <div className="container">
     <div className="flex justify-center items-center flex-col py-5">
      <h3>Complete withdrawal request</h3>
      <div className="border border-primary p-6 rounded-2xl bg-[#f1f1f1] dark:bg-[#1f2937]">
        <h2>USDT</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-3">
            <label>Enter Amount to Withdraw($)</label>
            <input
              type="number"
              placeholder="0"
              value={amount}
              onChange={(e: any) => setAmount(e.target.value)}
              name=""
              id=""
              required
               className="w-full rounded-xl p-2 border border-primary"
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <div className="flex gap-3 justify-start items-center">
              <label>Enter OTP</label>
              <button
                className="bg-primary px-4 py-2 rounded-xl"
                type="button"
                onClick={() => toast.info("Contact Support for your OTP", {position: "bottom-left"})}
              >
                Request OTP
              </button>
            </div>
            <input
              type="number"
              value={otp}
              onChange={(e: any) => setOtp(e.target.value)}
              name=""
              placeholder="OTP"
              required
              id=""
              className="w-full rounded-xl p-2 border border-primary"
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <label>Enter USDT Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
               className="w-full rounded-xl p-2 border border-primary"
            />
          </div>
          <p className="text-xs">
            USDT is a default withdrawal option in your account, please
            enter the correct wallet address to receive your funds
          </p>
          <button type="submit" className="bg-primary px-4 py-2 rounded-xl">
            {loading ? "Submitting..." : "Complete Request"}
          </button>
        </form>
      </div>
    </div>   
    </div>
    )}
    </>
  );
};

export default UserWdFunds;
