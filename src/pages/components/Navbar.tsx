import { Link } from "react-router-dom"
import { Button } from "../ui"
import { MainLogo } from "."

const Navbar = () => {
  return (
    <div className="container bg-transparent">
        <div className="flex justify-between align-middle items-center py-3 bg-transparent">
            <div>
                <Link to="/">Logo</Link>
                <MainLogo />
            </div>
            <ul className="flex flex-row gap-5">
                <li>
                    <Link to='/about' className="">About</Link>
                </li>
                <li>
                    <Link to="/"></Link>
                </li>
                <li>
                    <Link to="/service">Planning Services</Link>
                </li>
                <li>
                    <Link to="/investment-stocks">Investment Products</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
            <div>
                <Link to="/login">
                 <Button btntext="Login" />   
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar