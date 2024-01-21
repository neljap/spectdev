import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Asimg from "../../assets/Sign up-bro.svg";
import SpinnerLoad from "../components/SpinnerLoad";

const RegisterPg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPass, setShowPass] = useState(false);
  //   const [checked, setChecked] = useState(false)
  //   const [isRecapVerify, setIsRecapVerify] = useState(false)

  const navigate = useNavigate();

  const [loadingSpin, setLoadingSpin] = useState(true)

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

    try {
      setLoading(true);
      if (password !== passwordConfirm) {
        toast.error("Password do not match, Try Again", {
          position: "bottom-left",
        });
        setLoading(false);
      } else {
        const regdata = {
          email,
          password,
          fullname,
          number,
        };
        await axios.post(
          "https://specserver.vercel.app/api/user/register",
          regdata
        );

        toast.success("Registration Successfully, Login to Get Started", {
          position: "bottom-left",
        });
        navigate("/login");
        setLoading(false);
      }
    } catch (error: any) {
      toast.error(error.code, { position: "bottom-left" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    {loadingSpin ? (
      <SpinnerLoad /> 
    ): (
    <div className="min-h-screen grid md:grid-cols-2 grid-cols-1 justify-between align-middle items-center">
      <div className="md:block hidden w-full h-full ">
        <Link to="/">
          <div className="py-2 px-4 shadow-lg flex flex-row justify-between rounded-lg w-28 mt-12 ml-6 align-middle bg-[#f1f1f1] dark:bg-[#1f2937] cursor-pointer">
            <FaArrowLeftLong
              size={24}
              className="dark:fill-[#f1f1f1] fill-[#1f2937]"
            />
            <p className="">Home</p>
          </div>
        </Link>
        <img src={Asimg} alt="" className="w-[80%] mx-auto" />
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
        <h1 className="text-center text-3xl py-4">Register Page</h1>
        <div className="md:px-10 px-4">
          <form
            action=""
            className="w-full px-8 shadow-2xl rounded-2xl py-8 bg-[#f1f1f1] dark:bg-[#1f2937]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1 py-1">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                className="p-1 w-full rounded-lg border border-primary"
                value={fullname}
                onChange={(e: any) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1 py-1">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                className="p-1 w-full rounded-lg border border-primary"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1 py-1">
              <label htmlFor="">Phone Number</label>
              <input
                type="number"
                className="p-1 w-full rounded-lg border border-primary"
                value={number}
                onChange={(e: any) => setNumber(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1 py-1 relative">
              <label htmlFor="">Password</label>
              <input
                type={visible ? "text" : "password"}
                className="p-1 w-full rounded-lg border border-primary"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                required
              />
              <div className="absolute top-9 right-3 cursor-pointer">
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
            <div className="flex flex-col gap-1 py-1 relative">
              <label htmlFor="">Confirm Password</label>
              <input
                type={showPass ? "text" : "password"}
                className="p-1 w-full rounded-lg border border-primary"
                value={passwordConfirm}
                onChange={(e: any) => setPasswordConfirm(e.target.value)}
                required
              />
              <div className="absolute top-9 right-3 cursor-pointer">
                {showPass ? (
                  <AiOutlineEye
                    size={25}
                    color="green"
                    onClick={() => setShowPass(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    color="green"
                    size={25}
                    onClick={() => setShowPass(true)}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-row justify-between align-middle items-center py-2 gap-2">
              <button className="bg-primary rounded-xl py-2 px-4 text-lg">
                {loading ? "Registering" : "Register"}
              </button>
              <p className="text-sm">
                Already have an Account?
                <Link to="/login" className="text-primary">
                  Login
                </Link>
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

export default RegisterPg;
