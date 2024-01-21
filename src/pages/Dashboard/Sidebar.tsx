import {useState, useEffect} from 'react'
import Logo from "../../assets/logosc.png";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
    FaTh,
    FaUserAlt,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaTimes,
    FaBars
}from "react-icons/fa";
import Cookies from 'js-cookie';
import { IoLogOutSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { MainLogo } from '../components';

const Sidebar = ({children}: any) => {
    // const[isOpen ,setIsOpen] = useState(false);
    // const toggle = () => setIsOpen (!isOpen);

    const [logoutModal, setLogoutModal] = useState(false);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const logOutFunc = () => {
    try{  
      Cookies.remove("token");
      setLogoutModal(false);
      navigate("/");
      toast.info("Log Out Successfully", {position: "bottom-left"})
    }catch(err: any){
      toast.error(err.code, { position: "bottom-left" });
    }
  }

  useEffect(() => {
    let cookietoken = Cookies.get("token");

    if(!cookietoken){
      navigate("/login")
    }

  }, [])

    const menuItem=[
        {
            path:"/user/home",
            name:"Overview",
            icon:<FaTh/>
        },
        {
            path:"/user/wallet",
            name:"Wallet",
            icon:<FaUserAlt/>
        },
        // {
        //     path:"/user/refferals",
        //     name:"Refferals",
        //     icon:<FaRegChartBar/>
        // },
        
        {
            path:"/user/kyc",
            name:"KYC Verification",
            icon:<FaShoppingBag/>
        },
        {
            path:"/user/support",
            name:"Support",
            icon:<FaThList/>
        },
        {
            path:"/user/settings",
            name:"Settings",
            icon:<FaCommentAlt/>
        }
    ]

    return (
        <>
        
        {/* <div className='flex justify-between items-center p-4'>
            <h1>Logo</h1>
            <div onClick={() => setShowMenu(true)} className='cursor-pointer'>bars</div>
        </div> */}
        <div className="flex block md:hidden items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <ul
          className={`
        md:hidden bg-[#f1f1f1] dark:bg-[#1f2937] fixed z-10 w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
            {menuItem.map((item, index) => (
               <li key={index} onClick={() => setOpen(false)}>
            <Link to={item.path} className="py-1 px-3 inline-block">
              {item.name}
            </Link>
          </li> 
            ))}
        </ul>
        </div>
        <div className='flex flex-row '>
            
             <div className=" bg-black h-screen w-0 md:w-56 py-4 text-white fixed hidden md:block">
               <div className="flex flex-row p-6">
                <Link to="/">
                    <MainLogo />
                    </Link>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="flex flex-row gap-5 px-6 py-2 justify-start items-center">
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <div className='flex gap-4 ps-5 cursor-pointer' onClick={() => setLogoutModal(true)}>   
                <IoLogOutSharp size={32} />
                <p>Logout</p>
               </div>
           </div>
          
           <main className='md:pl-56 pl-0 w-full'>{children}</main>
        </div>
        {logoutModal && (<div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-80 rounded-xl h-40 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-center items-center gap-8'>
                <p>Are you sure you want to Log Out?</p>
                <div className='flex justify-between items-center px-8 gap-4'>
                    <button className='bg-primary px-4 py-2 rounded-xl' onClick={logOutFunc}>Yes</button>
                    <button className='bg-red-500 px-4 py-2 rounded-xl' onClick={() => setLogoutModal(false)}>No</button>
                </div>
            </div>
        </div>)}
        </>
        
    );
};
export default Sidebar;