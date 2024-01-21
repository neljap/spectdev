import { useEffect, useState } from "react";
import { Footer } from "../components";
import { Herosection } from "./components";
import SpinnerLoad from "../components/SpinnerLoad";


const ContactPg = () => {
   const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | Contact"
  }, [])
  return (
    <>
    {loading ? (
      <SpinnerLoad /> 
    ): (
      <div>
      <Herosection />
      <Footer />
    </div>
    )}
    </>
    
  )
}

export default ContactPg;