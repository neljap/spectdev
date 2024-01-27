import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Asimg from "../../assets/Sign in-bro.svg";
import SpinnerLoad from "../components/SpinnerLoad";
import { hosturl } from "../../utils/ApiFeatures";

const FgtPwd = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [loadingSpin, setLoadingSpin] = useState(true);

  // 6LdND14pAAAAALsYMjhH7xcwm-xPrCw5RVpTDnKs
  // 6LdND14pAAAAAOWtgD_45LoccEfDyciUbdd0xtPB

  useEffect(() => {
    setTimeout(() => {
      setLoadingSpin(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | Forgot-Password"
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);


    await axios
      .post(`${hosturl}/api/user/forgot-password`, {email})
      .then(() => {
        toast.success("Please look in your email for the reset token.", { position: "bottom-left" });
        setEmail("")
      })
      .catch((err) => {
        toast.error(err.message, { position: "bottom-left" });
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
    {loadingSpin ? (
      <SpinnerLoad /> 
    ): (
    <div className="min-h-screen grid md:grid-cols-2 grid-cols-1 justify-between align-middle items-center">
      <div className=" md:block hidden w-full h-full">
        <Link to="/">
          <div className="py-2 px-4 shadow-lg flex flex-row justify-between rounded-lg w-28 mt-12 ml-6 align-middle bg-[#f1f1f1] dark:bg-[#1f2937] cursor-pointer">
            <FaArrowLeftLong
              size={24}
              className="dark:fill-[#f1f1f1] fill-[#1f2937]"
            />
            <p className="">Home</p>
          </div>
        </Link>
        <img src={Asimg} alt="" className="w-[75%] mx-auto" />
      </div>
      <div>
          <Link to="/" className=" md:hidden block">
            <div className=" py-2 px-4 shadow-lg flex flex-row justify-between rounded-lg w-28 mt-12 ml-6 align-middle bg-[#f1f1f1] dark:bg-[#1f2937] cursor-pointer">
            <FaArrowLeftLong
              size={24}
              className="dark:fill-[#f1f1f1] fill-[#1f2937]"
            />
            <p className="/">Home</p>
          </div>
          </Link>
        <h1 className="text-center text-3xl  font-[600] py-8">Forgot Password</h1>
        <div className="md:px-10 px-4">
          <form
            action=""
            className="w-full px-10 shadow-2xl rounded-2xl p-24 bg-[#f1f1f1] dark:bg-[#1f2937]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-3">
              <label className="font-[500] text-xl">Email Address</label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                required
                className="p-2 w-full rounded-lg border border-primary"
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-2 justify-between align-middle items-center py-2 ">
             <button
              className="bg-primary rounded-xl py-2 px-4 text-lg"
              disabled={loading ? true : false}
            >
              {loading ? "Sending..." : "Send"}
            </button>
            <p className="text-sm">
              Back to
              <Link to="/login" className="text-primary">Login</Link>
            </p> 
            </div>
            
          </form>
        </div>
      </div>
    </div>
        )}
    </>
  );
};

export default FgtPwd;
