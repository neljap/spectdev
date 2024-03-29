import {createBrowserRouter, Link, Route, RouterProvider, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify"
import {HomePg, AboutPg, ContactPg, LoginPg, RegisterPg, FgtPwd, PlanServicePg, InvestmentstockPg, InvestForexPg, InvestBlockchain, ResetPwd} from "./pages";
import {FaSun, FaMoon, FaWhatsapp} from "react-icons/fa"
import { useTheme } from "next-themes";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"
import UserMain from "./pages/Dashboard/user/UserMain";




const router = createBrowserRouter([{
  path: "*",
  Component: Root
}
])


function Root() {

  const { systemTheme, theme, setTheme } = useTheme();

  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <FaSun color="black" size={18}/>;
    } else {
      return <FaMoon color="white" size={18}/>;
    }
  };
useEffect(() =>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  })
  const WhatsLinkUs = "https://wa.link/5u2vxx";
  return (
    
    <div>
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="fixed top-1/2 md:right-12 right-6 cursor-pointer border border-primary rounded-full p-2 z-50 dark:bg-[#f1f1f1] bg-[#1f2937] shadow-2xl">
      {themeBox()}
    </div>
    {/* <div className="fixed bottom-2/3 md:left-10 left-5 bg-primary w-12 h-12 rounded-full flex justify-center items-center cursor-pointer z-50"><Translator /></div> */}
    <div className="fixed bottom-1/3 md:right-10 right-5 bg-primary p-2 rounded-full flex justify-center items-center cursor-pointer z-50">
      <Link to={WhatsLinkUs} target="_blank">
        <FaWhatsapp size={40}/>
      </Link>
      
    </div>
    <div className="fixed top-1/3 w-32 h-20 bg-transparent z-50 right-20"></div>
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/about" element={<AboutPg />} />
        <Route path="/service" element={<PlanServicePg />} />
        <Route path="/stocks" element={<InvestmentstockPg />} />
        <Route path="/forex" element={<InvestForexPg />} />
        <Route path="/blockchain" element={<InvestBlockchain />} />
        <Route path="/user/*" element={<UserMain />} />
        <Route path="/login" element={<LoginPg />} />
        <Route path="/contact" element={<ContactPg />} />
        <Route path="/register" element={<RegisterPg />} />
        <Route path="/forgot-password" element={<FgtPwd />} />
        <Route path="/reset-password/:id/:token" element={<ResetPwd />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;