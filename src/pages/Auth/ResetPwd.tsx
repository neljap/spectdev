import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";
import Asimg from "../../assets/Sign in-bro.svg";
import SpinnerLoad from "../components/SpinnerLoad";
import { hosturl } from "../../utils/ApiFeatures";


const ResetPwd = () => {
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [isRecapVerify, setIsRecapVerify] = useState(false)
  const navigate = useNavigate();
  // const handleRecapChange = (value) => {
  //   setIsRecapVerify(true)
  // }
  const {token, id} = useParams()
  const [loadingSpin, setLoadingSpin] = useState(true);


  // 6LdND14pAAAAALsYMjhH7xcwm-xPrCw5RVpTDnKs
  // 6LdND14pAAAAAOWtgD_45LoccEfDyciUbdd0xtPB

  useEffect(() => {
    setTimeout(() => {
      setLoadingSpin(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | Login"
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if(password !== passwordConfirm){
        toast.error("Password do not match", {position: "bottom-left"})
        return;
    }

    setLoading(true);

    await axios
      .post(`${hosturl}/api/user/reset-password/${id}/${token}`, {password})
      .then((res) => {
        Cookies.set("token", res.data.token, { expires: 7 });
        navigate("/user/home");
        window.location.reload();
        toast.success("Password Reset Successfully", { position: "bottom-left" });
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
            <p className="">Home</p>
          </div>
          </Link>
        <h1 className="text-center text-3xl font-[600] py-8">Reset Password</h1>
        <div className="md:px-10 px-4">
          <form
            action=""
            className="w-full px-10 shadow-2xl rounded-2xl p-24 bg-[#f1f1f1] dark:bg-[#1f2937]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col py-4 relative">
              <label className="font-[500] text-xl">Password</label>
              <input
                type={visible ? "text" : "password"}
                className="p-2 w-full rounded-lg border border-primary"
                value={password}
                placeholder="Enter Your Password"
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <div className="absolute top-12 right-5 cursor-pointer">
                {visible ? (
                  <AiOutlineEye
                    size={25}
                    color="green"
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    color="green"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col py-4 relative">
              <label className="font-[500] text-xl">Confirm Password</label>
              <input
                type={show ? "text" : "password"}
                className="p-2 w-full rounded-lg border border-primary"
                value={passwordConfirm}
                placeholder="Re-Enter Your Password"
                onChange={(e: any) => setPasswordConfirm(e.target.value)}
              />
              <div className="absolute top-12 right-5 cursor-pointer">
                {show ? (
                  <AiOutlineEye
                    size={25}
                    color="green"
                    onClick={() => setShow(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    color="green"
                    size={25}
                    onClick={() => setShow(true)}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-row gap-2 justify-between align-middle items-center py-2 ">
             <button
              className="bg-primary rounded-xl py-2 px-4 text-lg"
              disabled={loading ? true : false}
            >
              {loading ? "Sending..." : "Send"}
            </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
        )}
    </>
  );
};

export default ResetPwd;
