import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthContext";
import SpinnerLoad from "../../../components/SpinnerLoad";

const UserSupport = () => {
    const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const {data} = useContext(AuthContext);
  const [loadingSup, setLoadingSup] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingSup(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | Support"
  }, [])

  const options = [
    "Select Categories",
    "My Wallet",
    "Verification",
    "Change Phone Number",
    "Profile",
    "Referral",
    "Withdrawal",
    "Payment complaint",
    "Investment",
    "Contract",
    "Others",
  ];

const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);

      

      const supData = {subject, message, category, userid: data._id};
      await axios.post(
        "https://specserver.vercel.app/api/user/support",
        supData
      );
      setMessage("");
      setSubject("");
      setCategory("");
      setLoading(false);
      toast.success("Message Received, We will get back to you Shortly", {
        position: "bottom-left",
      });
    } catch (err: any) {
      toast.error(err.code, { position: "bottom-left" });
    }finally{
      setLoading(false)
    }
  };

  return (
    <>
    {loadingSup ? (
      <SpinnerLoad /> 
    ): (
    <div className='container py-6'>
        <p className='text-center text-3xl pb-4'>Support</p>
        <div className="w-full">
            <form className="w-full border border-primary p-4 rounded-lg shadow-lg flex flex-col gap-4 bg-[#f1f1f1] dark:bg-[#1f2937]" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Subject</label>
                    <input type="text" name="" value={subject} onChange={(e) => setSubject(e.target.value)} id="" placeholder="Enter Subject" className="w-full border border-primary p-2 rounded-lg" required/>
                </div>
                <div>
                    <select name="" id="" className="w-full p-2 rounded-lg border border-primary" onChange={(e) => setCategory(e.target.value)} value={category} required>
                      {options.map((item, index )=> (
                        <option value={item} key={index}>{item}</option>
                      ))}
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Message</label>
                    <textarea name="" id="" value={message} cols={30} rows={10} className='w-full border border-primary rounded p-2' onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <button className="py-4 px-8 rounded-2xl bg-primary">{loading ? "Submitting..." : "Submit"}</button>
            </form>
        </div>
        </div>
    )}
    </>
  )
}

export default UserSupport;