import { FaEnvelope, FaFacebook, FaGithub, FaHome, FaLinkedin, FaPhone } from "react-icons/fa"
import { Button } from "../ui"
import { MainLogo } from "."
import { Link } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleEmailSub = async() => {
    try{
      await axios.post("http://localhost:3030/api/user/email-subscribe", {email});
      setEmail('');
      toast.success("Email Address Received", {position: "bottom-left"})
    }catch(err: any){
      toast.error(err, {position: "bottom-left"})
    }
  }

  const uselinkItems = [
    {
      id: 1,
      link: "about",
      text: "About Us"
    },
    {
      id: 2, 
      link: "/service",
      text: "Services",
    },
    {
      id: 3,
      link: "/forex",
      text: "Forex"
    },
    {
      id: 4,
      link: "/stock",
      text: "Stocks"
    }
  ]

  return (
    <>
     {/* <div className="bg-subfooter bg-cover bg-center h-[500px] w-full"></div> */}
    <div className="bg-footer py-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 text-white justify-start items-start">
        <div>
          <div className="flex justify-start items-start">
            <MainLogo />
          </div>
          
          <p>Spectrum Capitals is committed to security ensures that your investments are safeguarded, allowing you to focus on growing your portfolio with peace of mind.</p>
        </div>
        <div>
          <h3>Useful Links</h3>
          <ul>
            {uselinkItems.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>
                 {item.text} 
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <div>
            <div className="flex flex-row gap-2 justify-start items-center py-2">
              <div>
                <FaHome size={23}/>
              </div>
              
              <p>Aberdeen Avenue, California, Santa Rosa, US</p>
            </div>
            <div className="flex flex-row gap-2 justify-start items-center py-2">
              <div>
                <FaEnvelope size={23} />
              </div>
              
              <p>support@spectrumcapitals.com</p>
            </div>
            <div className="flex flex-row gap-2 justify-start items-center py-2">
              <div>
               <FaPhone size={23}/> 
              </div>
              
              <p>+1 916 857 3164</p>
            </div>
          </div>
        </div>
        <div>
          <h4>Subscribe Our Newletter to get updates</h4>
          <div className="flex flex-col gap-2">
            <input type="email" value={email} onChange={(e:any) => setEmail(e.target.value)} placeholder="Email Address" name="" id="" className="border border-primary p-2 rounded-xl text-black"/>
            <div onClick={handleEmailSub}>
             <Button btntext="Subscribe" /> 
            </div>
            
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between align-middle items-center py-3">
         <p className="text-white">2005 @ spectrum capitals</p>
          <div className="flex flex-row gap-3">
            <FaFacebook color="white" size={28}/>
            <FaLinkedin color="white" size={28}/>
            <FaGithub color="white" size={28}/>
          </div>
      </div>
     
      </div>
      
    </div>
    </>
    
  )
}

export default Footer;