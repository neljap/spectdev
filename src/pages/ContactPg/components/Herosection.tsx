import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import {SlEarphonesAlt} from "react-icons/sl"
import Navigation from "../../components/Navigation";
import { contactImg } from "../../../assets";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Herosection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true)
    try {
      const condata = {fullname: name, email, subject, message}
   await axios.post("https://specserver.vercel.app/api/user/contact", condata);
      
      setEmail('')
      setMessage('')
      setName('')
      setSubject('')
      setLoading(false)
      toast.success('Message Received, We will get back to you Shortly', {
        position: 'bottom-left'
      })
    } catch (err: any) {
      throw new Error(err)
    }
  };
  return (
    <div>
      <div className="h-[50vh] bg-abtimg bg-center bg-cover">
        <Navigation />
        <div className="container">
          <p className='text-2xl font-[600]'>Contact</p>
        </div>
      </div>

      <div className="container py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-4 border border-primary rounded w-fit bg-[#f1f1f1] dark:bg-[#1f2937]">
              <SlEarphonesAlt size={30}/>
            </div>
            <p>+1 (916) 857-3164</p>
            <p>Mon - Sat: 8:00 - 21:00 (GMT-8)</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-4 border border-primary rounded w-fit bg-[#f1f1f1] dark:bg-[#1f2937]">
              <FaEnvelope size={30}/>
            </div>
            
            <p>support@spectrumcapitals.com</p>
            <p>24/7 Customer Support</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-4 border border-primary rounded w-fit bg-[#f1f1f1] dark:bg-[#1f2937]">
              <FaLocationDot size={30}/>
            </div>
            <p className="text-center">Aberdeen Avenue, California, Santa Rosa, US</p>
            <p>Main Office Location</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 rounded-lg py-12 shadow-lg h-[600px]">
          <div className="h-[100%] hidden md:block">
            <img src={contactImg} alt="" className="h-full object-cover" />
          </div>
          <form action="" className="w-full px-10 p-12 bg-[#f1f1f1] dark:bg-[#1f2937]" onSubmit={handleSubmit}>
            <div className="flex flex-row gap-3 w-full justify-between align-middle">
              <div className="flex flex-col gap-3">
                <label htmlFor="">Your Full Name</label>
                <input
                  type="text"
                  className="p-2 w-full rounded-lg border border-primary"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="">Email Address</label>
                <input
                  type="email"
                  className="p-2 w-full rounded-lg border border-primary"
                  value={email}
                  onChange={(e:any) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col py-4">
              <label htmlFor="">Subject</label>
              <input
                type="text"
                className="p-2 w-full rounded-lg border border-primary"
                value={subject}
                onChange={(e:any) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Message</label>
              <textarea
                name=""
                id=""
                className="w-full border border-primary rounded-lg"
                cols={30}
                rows={10}
                value={message}
                onChange={(e:any) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="bg-primary rounded-xl py-2 px-4 text-lg">
              {loading ? "Sending" : "Send"}
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className="w-full">
          <iframe
            width="100%"
            height="500"
            // frameborder="0"
            scrolling="no"
            // marginheight={0}
            // marginwidth={0}
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Aberdeen%20Avenue,%20California,%20Santa%20Rosa,%20US+(Spectrum%20Capitals)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Population mapping</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
