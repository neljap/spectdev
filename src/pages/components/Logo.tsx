import { Link } from "react-router-dom";
import LogoImg from "../../assets/logosc.png";

const Logo = () => {
  return (
    <Link to="/" className="flex justify-center items-center ">
        <img src={LogoImg} alt="" className="w-10 h-10"/>
        <div>
            <p className="text-md font-[600]">Spectrum</p>
            <p className="text-md font-[500]">Capitals</p>
        </div>
    </Link>
  )
}

export default Logo